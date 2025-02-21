import { Header } from '@/app/header';
import { SectionBanner } from './(section-banner)/section-banner';
import { SectionShowcase } from './(section-showcase)/section-showcase';
import { SectionAbout } from './(section-about)/section-about';
import { SectionPortfolio } from './(section-portfolio)/section-portfolio';
import { SectionSkills } from './(section-skills)/section-skills';
import { SectionWorkHistory } from './(section-work-history)/section-work-history';
import { SectionContact } from './(section-contact)/section.contact';

export default function Home() {
    return (
        <div>
            <Header />
            <SectionBanner />
            <SectionShowcase />
            <SectionAbout />
            <SectionPortfolio />
            <SectionSkills />
            <SectionWorkHistory />
            <SectionContact />
        </div>
    );
}
