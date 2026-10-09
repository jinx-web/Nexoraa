import Reveal from '@/components/Reveal';

const aboutTiles = ['50+ Agents Built', '30+ ML Pipelines', '200+ Teams Trained', '15h/wk Time Saved'];

export default function About() {
    return (
        <section id="about" className="relative section-pad px-6 bg-[#f5ede0] border-t-[2.5px] border-[#12100e]">
            <div className="relative max-w-7xl mx-auto">
                <Reveal>
                    <div className="bg-white border-[2.5px] border-[#12100e] rounded-[22px] overflow-hidden shadow-[8px_8px_0_0_#12100e] grid md:grid-cols-[1fr_1.45fr]">
                        <div className="relative h-64 md:h-auto overflow-hidden border-b-[2.5px] md:border-b-0 md:border-r-[2.5px] border-[#12100e] bg-[#12100e]">
                            <img src="https://images.pexels.com/photos/39492703/pexels-photo-39492703.png?auto=compress&cs=tinysrgb&w=700" alt="Abstract" className="w-full h-full object-cover opacity-90" loading="lazy" width={700} height={467} />
                            <div className="absolute bottom-3 left-3 bg-[#d4a017] text-[#12100e] border-[1.5px] border-[#12100e] rounded-full px-3 py-1 text-[11px] font-extrabold tracking-[0.08em] uppercase shadow-[2px_2px_0_0_#12100e] rotate-[-1deg]">Since 2026 ✦ Built to last</div>
                        </div>
                        <div className="p-8 md:p-10">
                            <span className="pill bg-[#12100e] text-[#fdf8f0]">About Us</span>
                            <h2 className="mt-4 font-display font-extrabold text-display-md leading-[0.95] text-[#12100e]">
                                A consultancy built on <span className="font-serif italic font-normal text-[#e85d2f]">deep expertise</span> — not decks.
                            </h2>
                            <p className="mt-3 text-[14px] leading-relaxed text-[#3d332b]">
                                AI engineers, ML practitioners, and automation folks who ship systems that create operational leverage. From advisory to full autonomous deployment.
                            </p>
                            <div className="mt-6 flex flex-wrap gap-2.5">
                                {aboutTiles.map((tile) => (
                                    <span key={tile} className="bg-[#fdf8f0] border-[1.5px] border-[#12100e] rounded-full px-3.5 py-2 text-[12px] font-bold tracking-[-0.01em] text-[#12100e] shadow-[3px_3px_0_0_#12100e] rotate-[-0.3deg] even:rotate-[0.4deg]">
                                        {tile}
                                    </span>
                                ))}
                            </div>
                            <div className="mt-6 flex items-center gap-2 text-[11px] font-mono text-[#6e6259]">
                                <span className="w-6 h-px bg-[#12100e]/20" /> Hand-written. Hand-shipped.
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
