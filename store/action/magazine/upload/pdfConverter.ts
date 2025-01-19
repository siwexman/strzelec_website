'use server';

import CloudConvert from 'cloudconvert';
import fs from 'fs';
import https from 'https';
import path from 'path';
import { env } from 'process';

const cloudConvert = new CloudConvert(env.API_KEY_PDF_CONVERTER || '');

/**
 * converts pdf file to image
 * @param pdfFilePath string path to pdf file
 * @param pdfFileName string pdf file name with extension
 * @param outputFolderPath string path to folder where img will be saved
 * @returns
 */
export async function convertPdfToImage(
    pdfFilePath: string,
    pdfFileName: string,
    outputFolderPath: string
) {
    try {
        // create job (job builder for convertion of file) my example pdf uploaded from stored file to url that is downloaded and saved to file
        let job = await cloudConvert.jobs.create({
            tasks: {
                'import-pdf-file': {
                    operation: 'import/upload',
                },
                'convert-pdf-to-img': {
                    operation: 'convert',
                    input_format: 'pdf',
                    output_format: 'png',
                    engine: 'mupdf',
                    input: 'import-pdf-file',
                    pixel_density: 300,
                    alpha: false,
                    pages: '1',
                },
                'export-img': {
                    operation: 'export/url',
                    input: 'convert-pdf-to-img',
                    inline: false,
                    archive_multiple_files: false,
                },
            },
            tag: 'jobbuilder',
        });

        // Upload file
        const uploadTask = job.tasks.filter(
            task => task.name === 'import-pdf-file'
        )[0];

        const inputFile = fs.createReadStream(pdfFilePath);

        await cloudConvert.tasks.upload(uploadTask, inputFile, pdfFileName);

        // Download file
        job = await cloudConvert.jobs.wait(job.id); // Wait for job completion

        const file = cloudConvert.jobs.getExportUrls(job)[0];

        const outputPath = path.join(outputFolderPath, file.filename);
        const writeStream = fs.createWriteStream(outputPath);

        if (!file.url) {
            return;
        }

        https.get(file.url, response => {
            response.pipe(writeStream);
        });

        // Save to local file
        await new Promise<void>((resolve, reject) => {
            writeStream.on('finish', resolve);
            writeStream.on('error', reject);
        });
    } catch (error) {
        console.log(error);
    }
}
