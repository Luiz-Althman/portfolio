import Link from 'next/link';

import { ButtonWhatsApp } from '@/components/button-whatsapp';
import { InfoTitleRoot, InfoTitleText } from '@/components/info-title';
import { ButtonEmailAndCopy } from './components/button-email-and-copy';
import { FaArrowUp } from 'react-icons/fa';

export function SectionContact() {
    return (
        <section
            id="contato"
            className="md:py-28 py-12 flex flex-col justify-center md:items-center items-start"
        >
            <div className="md:pb-16 pb-6 text-left md:text-center inline-flex flex-col justify-center md:items-center items-start">
                <InfoTitleRoot>
                    <span className="mr-2">📬</span>
                    <InfoTitleText title="Contatos" />
                </InfoTitleRoot>
                <h2 className="text-5xl font-extrabold text-white pt-4 hidden md:block">
                    Entre em contato
                </h2>
                <h2 className="text-2xl font-extrabold text-white pt-4 md:hidden block">
                    Entre <br /> em contato
                </h2>
            </div>
            <div className="flex md:flex-row flex-col items-start gap-10">
                <ButtonWhatsApp /> <ButtonEmailAndCopy />
            </div>
            <Link
                href="#section-banner"
                className="text-purple/50 flex items-center gap-2 mt-16 hover:text-white transition duration-300"
            >
                Voltar ao topo <FaArrowUp />
            </Link>
        </section>
    );
}
