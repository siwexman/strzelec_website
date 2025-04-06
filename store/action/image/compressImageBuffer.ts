import sharp from 'sharp';

export async function compressImageBuffer(buffer: Buffer, extension: string) {
    const extensionWithoutDot = extension.slice(1);
    try {
        if (extensionWithoutDot === 'jpeg' || extensionWithoutDot === 'jpg') {
            const compressedJPGBuffer = await sharp(buffer)
                .jpeg({ quality: 50 })
                .toBuffer();

            return compressedJPGBuffer;
        } else if (extensionWithoutDot === 'png') {
            const compressedPNGBuffer = await sharp(buffer)
                .png({
                    compressionLevel: 9,
                    adaptiveFiltering: true,
                    palette: true,
                })
                .toBuffer();

            return compressedPNGBuffer;
        } else {
            throw new Error('Nieznane rozszerzenie');
        }
    } catch (error) {
        console.log(error);
        throw new Error('Błąd podczas kompresji');
    }
}
