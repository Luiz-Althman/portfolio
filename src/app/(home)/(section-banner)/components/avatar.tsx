import Image from 'next/image';
import avatar from '../../../../assets/avatar.svg';
import ellipse from '../../../../assets/ellipse.png';

import { FaReact } from 'react-icons/fa';
import { SiTypescript } from 'react-icons/si';
import { RiNextjsFill } from 'react-icons/ri';

export function Avatar() {
    return (
        <div className="relative">
            <div className="absolute top-4 right-0 z-[-1]">
                <Image src={ellipse} alt="" />
            </div>

            <div className="bg-dark/50 inline-flex absolute top-28 left-6 p-3 rounded-full animate-bounce">
                <FaReact className="text-purple size-8" />
            </div>
            <div className="bg-dark/50 inline-flex absolute top-50 right-2 p-3 rounded-full animate-bounce">
                <SiTypescript className="text-purple size-6" />
            </div>
            <div className="bg-dark/50 inline-flex absolute bottom-25 left-5 p-3 rounded-full animate-bounce ">
                <RiNextjsFill className="text-purple size-8" />
            </div>

            <Image src={avatar} alt="Avatar" width={430.1} height={598.21} />
        </div>
    );
}
