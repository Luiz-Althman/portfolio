import { IconBgRoot, IconBgIcon } from '@/components/icon-bg';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';

export function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center gap-2 max-w-[1240px] mx-auto py-4">
            <IconBgRoot>
                <IconBgIcon
                    href="https://www.linkedin.com/in/luiz-althman-173656245/"
                    icon={<FaLinkedinIn />}
                    aria-label="Botão que redireciona para o linkedin do Luiz Althman"
                />
                <IconBgIcon
                    href=""
                    //https://github.com/Luiz-Althman
                    icon={<FiGithub />}
                    aria-label="Botão que redireciona para o github do Luiz Althman"
                />
                <IconBgIcon
                    href="https://www.instagram.com/luiz_althman/"
                    icon={<FaInstagram />}
                    aria-label="Botão que redireciona para o instagram do Luiz Althman"
                />
            </IconBgRoot>
            <span className="text-white/50 text-left">
                Copyright &copy; Luiz Althman - 2025
            </span>
        </footer>
    );
}
