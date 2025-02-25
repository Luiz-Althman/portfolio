import { FaLinkedinIn, FaRegHandPeace, FaInstagram } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

import { IconBgRoot, IconBgIcon } from '@/components/icon-bg';
import {
    InfoTitleRoot,
    InfoTitleIcon,
    InfoTitleText,
} from '@/components/info-title';
import { Avatar } from './components/avatar';
import { ButtonDownload } from './components/button-download';
import { ButtonWhatsApp } from '@/components/button-whatsapp';
import { Mobile } from './mobile';

export function SectionBanner() {
    return (
        <section className="md:grid grid-cols-3 gap-3 py-12 md:py-28 md:items-center md:border-b md:border-purple/30">
            <div className="block md:hidden">
                <Mobile />
            </div>
            <div className="hidden md:block">
                <InfoTitleRoot className="inline-flex">
                    <span className="mr-2">👋</span>
                    <InfoTitleText title="Saudações!" />
                </InfoTitleRoot>
                <div className="flex flex-col">
                    <h1 className="font-extrabold text-5xl text-white pt-6 pb-4">
                        Luiz <br />
                        Althman
                    </h1>

                    <h2 className="pb-6 text-xl text-white opacity-50">
                        Front-End developer
                    </h2>
                </div>

                <IconBgRoot>
                    <IconBgIcon
                        href="https://www.linkedin.com/in/luiz-althman-173656245/"
                        icon={<FaLinkedinIn />}
                        aria-label="Botão que redireciona para o linkedin do Luiz Althman"
                    />
                    <IconBgIcon
                        href="https://github.com/Luiz-Althman"
                        icon={<FiGithub />}
                        aria-label="Botão que redireciona para o github do Luiz Althman"
                    />
                    <IconBgIcon
                        href="https://www.instagram.com/luiz_althman/"
                        icon={<FaInstagram />}
                        aria-label="Botão que redireciona para o instagram do Luiz Althman"
                    />
                </IconBgRoot>
            </div>
            <div className="hidden md:block">
                <Avatar />
            </div>

            <div className="text-purple-100 md:flex items-end justify-center flex-col gap-4 hidden">
                <ButtonDownload />
                <ButtonWhatsApp />
            </div>
        </section>
    );
}
