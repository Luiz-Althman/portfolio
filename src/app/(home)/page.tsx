import { Header } from '@/app/header';
import { SectionBanner } from './(section-banner)/section-banner';
import { SectionShowcase } from './(section-showcase)/section-showcase';
import { SectionAbout } from './(section-about)/section-about';
import { SectionPortfolio } from './(section-portfolio)/section-portfolio';

export default function Home() {
    return (
        <div>
            <Header />
            <SectionBanner />
            <SectionShowcase />
            <SectionAbout />
            <SectionPortfolio />
        </div>
    );
}
