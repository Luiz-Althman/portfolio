import { BoxShowcase } from './components/box-showcase';

export function SectionShowcase() {
    return (
        <section className="pb-12 md:py-28 flex flex-col justify-center items-center gap-8 md:border-b md:border-purple/30">
            <div className="mx-40">
                <BoxShowcase />
            </div>
        </section>
    );
}
