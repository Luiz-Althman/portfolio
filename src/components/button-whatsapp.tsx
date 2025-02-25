import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export function ButtonWhatsApp() {
    return (
        <Link
            href="https://api.whatsapp.com/send?phone=5511947469137"
            className="inline-flex items-center gap-2 border border-purple/50 px-3.5 py-2 rounded-2xl font-semibold cursor-pointer text-purple-100 hover:text-white hover:bg-purple/50 transition-colors duration-300"
            target="_blank"
        >
            <FaWhatsapp className="size-5" /> Vamos conversar{' '}
        </Link>
    );
}
