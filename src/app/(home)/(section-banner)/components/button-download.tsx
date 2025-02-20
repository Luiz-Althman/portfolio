import { GoDownload } from 'react-icons/go';

export function ButtonDownload() {
    return (
        <a
            download
            href="/files/cv.pdf"
            className="flex items-center font-semibold"
        >
            Baixar CV <GoDownload className="size-5" />
        </a>
    );
}
