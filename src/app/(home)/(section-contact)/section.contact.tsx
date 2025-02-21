import Link from 'next/link';

import { ButtonWhatsApp } from '@/components/button-whatsapp';
import { InfoTitleRoot, InfoTitleText } from '@/components/info-title';
import { ButtonEmailAndCopy } from './components/button-email-and-copy';
import { FaArrowUp } from 'react-icons/fa';

export function SectionContact() {
    return (
        <section
            id="contato"
            className="py-28 flex flex-col justify-center items-center"
        >
            <div className="pb-16 text-center">
                <InfoTitleRoot>
                    <span className="mr-2">📬</span>
                    <InfoTitleText title="Contatos" />
                </InfoTitleRoot>
                <h2 className="text-5xl font-extrabold text-white pt-6">
                    Vamos conversar!
                </h2>
            </div>
            <div>
                <div className="flex items-center gap-10">
                    <ButtonWhatsApp /> <ButtonEmailAndCopy />
                </div>
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
