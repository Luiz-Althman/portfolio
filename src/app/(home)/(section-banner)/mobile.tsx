import { ButtonWhatsApp } from '@/components/button-whatsapp';
import { IconBgRoot, IconBgIcon } from '@/components/icon-bg';
import { InfoTitleRoot, InfoTitleText } from '@/components/info-title';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { Avatar } from './components/avatar';
import { ButtonDownload } from './components/button-download';

export function Mobile() {
    return (
        <div className="flex flex-col">
            <div className="flex justify-center">
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
            <div className="py-1.5">
                <Avatar />
            </div>
            <div className="py-8">
                <InfoTitleRoot>
                    <span className="mr-2">👋</span>
                    <InfoTitleText title="Saudações!" />
                </InfoTitleRoot>
                <div>
                    <h1 className="font-extrabold text-5xl text-white pt-6 pb-4">
                        Luiz <br />
                        Althman
                    </h1>

                    <h2 className="pb-6 md:text-xl text-[18px] text-white opacity-50">
                        Front-End developer
                    </h2>
                </div>
                <div className="text-purple-100 flex justify-start gap-4 ">
                    <ButtonDownload />
                    <ButtonWhatsApp />
                </div>
            </div>
        </div>
    );
}
