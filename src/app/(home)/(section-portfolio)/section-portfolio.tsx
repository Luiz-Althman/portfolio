import { InfoTitleText, InfoTitleRoot } from '@/components/info-title';
import { BoxProjects } from './components/box-projects';

export function SectionPortfolio() {
    return (
        <section className="py-28 flex flex-col justify-center items-center gap-8">
            <div>
                <div>
                    <InfoTitleRoot>
                        <span className="mr-2">🔗</span>
                        <InfoTitleText title="Portfolio" />
                    </InfoTitleRoot>
                    <h2>Trabalhos e projetos</h2>
                </div>
                <BoxProjects />
            </div>
        </section>
    );
}
