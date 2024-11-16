import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const config = {
    api: {
        bodyParser: false,
    },
};

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const form = new formidable.IncomingForm();

    form.parse(req, async (err, fields, files) => {
        if (err) {
            return res.status(500).json({ error: 'Error parsing the file' });
        }

        const postId = fields.postId;
        if (!postId) {
            return res.status(400).json({ error: 'postId is required' });
        }

        const uploadDir = path.join(process.cwd(), 'public', 'uploads', postId);

        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }

        const file = files.file;
        const newFilePath = path.join(uploadDir, file.newFilename);

        fs.rename(file.filepath, newFilePath, async err => {
            if (err) {
                return res.status(500).json({ error: 'Error saving the file' });
            }

            try {
                const image = await prisma.image.create({
                    data: {
                        path: `/uploads${postId}/${file.newFilename}`,
                        postId: parseInt(postId),
                    },
                });
                res.status(200).json({ image });
            } catch (error) {
                res.status(500).json({ error: 'Error saving to database' });
            }
        });
    });
}
