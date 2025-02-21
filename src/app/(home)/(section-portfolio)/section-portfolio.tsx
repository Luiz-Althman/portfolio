import { InfoTitleText, InfoTitleRoot } from '@/components/info-title';
import { BoxProjects } from './components/box-projects';

export function SectionPortfolio() {
    return (
        <section className="py-28 flex flex-col justify-center items-center border-b border-purple/30">
            <div>
                <div className="pb-24" id="portfolio">
                    <InfoTitleRoot>
                        <span className="mr-2">🔗</span>
                        <InfoTitleText title="Portfolio" />
                    </InfoTitleRoot>
                    <h2 className="text-5xl font-extrabold text-white pt-6">
                        Trabalhos e projetos
                    </h2>
                </div>
                <BoxProjects />
            </div>
        </section>
    );
}
