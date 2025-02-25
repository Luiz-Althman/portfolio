'use client';

import { MdOutlineContentCopy } from 'react-icons/md';
import { LuCheckCheck } from 'react-icons/lu';
import { FiSend } from 'react-icons/fi';
import { useState } from 'react';
import Link from 'next/link';

export function ButtonEmailAndCopy() {
    const [copied, setCopied] = useState(false);
    function copyInviteLink() {
        navigator.clipboard.writeText('luizalthmandev@gmail.com');

        setCopied(true);

        setTimeout(() => setCopied(false), 2000);
    }
    return (
        <div className="flex flex-col">
            <span className="text-xl text-purple md:text-center text-start">
                E-mail:{' '}
            </span>
            <div className="flex items-center md:gap-3 gap-5">
                <span className="text-white/50">luizalthmandev@gmail.com</span>
                {/* biome-ignore lint/a11y/useButtonType: <explanation> */}
                <button
                    onClick={copyInviteLink}
                    disabled={copied}
                    className="flex items-center gap-2 text-purple/50 transition duration-300 cursor-pointer relative group disabled:cursor-not-allowed"
                >
                    {copied ? (
                        <>
                            <span className="text-purple text-sm absolute top-5 left-1/2 -translate-x-1/2 opacity-100 ">
                                Copiado
                            </span>
                            <LuCheckCheck className="size-5 text-purple/50" />
                        </>
                    ) : (
                        <MdOutlineContentCopy className="size-5 hover:text-white" />
                    )}
                </button>
                <Link
                    href="mailto:luizalthmandev@gmail.com"
                    className="cursor-pointer text-purple/50 hover:text-white transition duration-300"
                >
                    <FiSend className="size-5" />
                </Link>
            </div>
        </div>
    );
}
