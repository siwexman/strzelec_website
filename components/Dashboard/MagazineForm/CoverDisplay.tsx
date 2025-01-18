import { useState } from 'react';
import { getDocument } from 'pdfjs-dist';

export default function CoverDisplay() {
    const [imageUrl, setImageUrl] = useState(null);

    // TODO: wyswietlic okładkę po przesłaniu pliku

    async function handleConvertToImg() {
        try {
            const fileReader = new FileReader();

            fileReader.onload = async e => {
                const loadingTask = getDocument(
                    new Uint8Array(e.target.result)
                );
                const pdf = await loadingTask.promise;

                // Get the first page
                const page = await pdf.getPage(1);
                const scale = 1.5;
                const viewport = page.getViewport({ scale });

                // Create a canvas to render the page
                const canvas = document.createElement('canvas');
                const context = canvas.getContext('2d');
                canvas.width = viewport.width;
                canvas.height = viewport.height;

                // Render the page on the canvas
                await page.render({
                    canvasContext: context,
                    viewport,
                }).promise;

                // Convert the canvas to an image
                const imgData = canvas.toDataURL();
                setImageUrl(imgData);
            };

            fileReader.readAsArrayBuffer(pdfFile);
        } catch (error) {
            console.error('Error converting PDF to image:', error);
        }
    }

    return (
        <div className="absolute top-0 right-0">
            <button
                className="p-2 bg-slate-300 rounded"
                onClick={handleConvertToImg}
            >
                Podgląd okładki
            </button>
            <div className="relative">
                {/* <Image src={} alt="User's image" fill sizes="10vw" /> */}
            </div>
        </div>
    );
}
