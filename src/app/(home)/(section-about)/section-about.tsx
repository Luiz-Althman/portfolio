import Image from 'next/image';

import { InfoTitleRoot, InfoTitleText } from '@/components/info-title';
import Img from '../../../assets/eu-sorrindo.jpg';

export function SectionAbout() {
    return (
        <section className="py-28 flex justify-between items-center gap-40 border-b border-purple/30">
            <div className="w-1/3">
                <Image
                    src={Img}
                    className="rounded-full"
                    alt="Foto de perfil, Luiz Althman."
                />
            </div>
            <div className="space-y-6 w-2/3">
                <InfoTitleRoot className="">
                    <span className="mr-2">🧐</span>
                    <InfoTitleText title="Sobre mim" />
                </InfoTitleRoot>
                <h2 className="text-5xl font-extrabold text-white">
                    Luiz Henrique <br /> Althman Silva Pedro
                </h2>
                <div>
                    <p>
                        👋{' '}
                        <span className="text-white/50">
                            Me chamo Luiz Henrique Althman Silva Pedro, mas pode
                            me chamar de Althman, Luiz Althman...Como preferir.{' '}
                        </span>
                        😊 <span className="text-white/50">Muito prazer!</span>
                    </p>
                    <br />
                    <p>
                        👨‍💻
                        <span className="text-white/50">
                            {' '}
                            Há mais de 3 anos desenvolvendo e programando
                            interfaces web responsivas com JavaScript, React Js
                            e Typescript.
                        </span>
                    </p>
                    <p>
                        🎓{' '}
                        <span className="text-white/50">
                            Graduado em Análise e Desenvolvimento de Sistemas
                            pela Faculdade Impacta de São Paulo.
                        </span>
                    </p>
                    <p>
                        💡{' '}
                        <span className="text-white/50">
                            Interesses em desenvolvimento Front-end web e mobile
                            com ReactJs, ViteJs, NextJs entre outros.
                        </span>
                    </p>
                    <br />
                    <p>
                        🚀{' '}
                        <span className="text-white/50">
                            Buscando sempre ser melhor do que ontem todos os
                            dias!
                        </span>
                    </p>
                </div>
            </div>
        </section>
    );
}
