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
                    />
                    <IconBgIcon
                        href="https://github.com/Luiz-Althman"
                        icon={<FiGithub />}
                    />
                    <IconBgIcon
                        href="https://www.instagram.com/luiz_althman/"
                        icon={<FaInstagram />}
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
                    <h2 className="font-extrabold text-5xl text-white pt-6 pb-4">
                        Luiz <br />
                        Althman
                    </h2>

                    <h3 className="pb-6 text-xl text-white opacity-50">
                        Front-End developer
                    </h3>
                </div>
                <div className="text-purple/50 flex justify-start gap-4 ">
                    <ButtonDownload />
                    <ButtonWhatsApp />
                </div>
            </div>
        </div>
    );
}
