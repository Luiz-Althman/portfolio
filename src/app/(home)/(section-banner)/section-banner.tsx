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

export function SectionBanner() {
    return (
        <section className="grid grid-cols-3 gap-3 py-28 items-center border-b border-purple/30">
            <div>
                <InfoTitleRoot>
                    <span className="mr-2">👋</span>
                    <InfoTitleText title="Saudações!" />
                </InfoTitleRoot>
                <div className="">
                    <h2 className="font-extrabold text-5xl text-white pt-6 pb-4">
                        Luiz <br />
                        Althman
                    </h2>
                </div>
                <h3 className="pb-6 text-xl text-white opacity-50">
                    Front-End developer
                </h3>
                <IconBgRoot>
                    <IconBgIcon icon={<FaLinkedinIn />} />
                    <IconBgIcon icon={<FiGithub />} />
                    <IconBgIcon icon={<FaInstagram />} />
                </IconBgRoot>
            </div>
            <Avatar />
            <div className="text-purple/50 flex items-end justify-center flex-col gap-4">
                <ButtonDownload />
                <ButtonWhatsApp />
            </div>
        </section>
    );
}
