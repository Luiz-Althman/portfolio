import { BoxShowcase } from './components/box-showcase';

export function SectionShowcase() {
    return (
        <section className="py-28 flex flex-col justify-center items-center gap-8 border-b border-purple/30">
            <div className="mx-40">
                <BoxShowcase />
            </div>
        </section>
    );
}
