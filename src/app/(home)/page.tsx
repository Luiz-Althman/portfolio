import { Header } from '@/app/header';
import { Footer } from '@/app/footer';
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
            <div className="md:max-w-[1240px] max-w-3xl mx-auto px-5 md:py-9">
                <Header />
                <SectionBanner />
                <SectionShowcase />
                <SectionAbout />
                <SectionPortfolio />
                <SectionSkills />
                <SectionWorkHistory />
                <SectionContact />
            </div>
            <div className="bg-purple/10">
                <Footer />
            </div>
        </div>
    );
}
