import Link from 'next/link';
import { GoDownload } from 'react-icons/go';

export function ButtonDownload() {
    return (
        <Link
            download
            href="/files/cv-luiz-althman-2025.pdf"
            target="_blank"
            className="flex items-center font-semibold hover:text-white transition duration-300"
        >
            Baixar CV <GoDownload className="size-5" />
        </Link>
    );
}
