import { InfoTitleText, InfoTitleRoot } from '@/components/info-title';
import { BoxProjects } from './components/box-projects';
import { Mobile } from './components/mobile';

export function SectionPortfolio() {
    return (
        <section className="pb-12 md:py-28 flex flex-col md:justify-center md:items-center md:border-b md:border-purple/30">
            <div>
                <div className="md:pb-24 pb-10" id="portfolio">
                    <InfoTitleRoot>
                        <span className="mr-2">🔗</span>
                        <InfoTitleText title="Portfolio" />
                    </InfoTitleRoot>
                    <h2 className="text-5xl font-extrabold text-white pt-4 hidden md:block">
                        Trabalhos e projetos
                    </h2>
                    <h2 className="text-2xl font-extrabold text-white pt-4 md:hidden block">
                        Trabalhos <br /> e projetos
                    </h2>
                </div>
                <div className="block md:hidden">
                    <Mobile />
                </div>
                <div className="md:block hidden">
                    <BoxProjects />
                </div>
            </div>
        </section>
    );
}
