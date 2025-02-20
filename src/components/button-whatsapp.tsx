import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';

export function ButtonWhatsApp() {
    return (
        <Link
            href="https://api.whatsapp.com/send?phone=5511947469137"
            className="flex items-center gap-2 border border-purple/50 px-3.5 py-2 rounded-2xl font-semibold cursor-pointer"
            target="_blank"
        >
            <FaWhatsapp className="" /> Vamos conversar{' '}
        </Link>
    );
}
