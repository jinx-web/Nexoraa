import Reveal from '@/components/Reveal';

const tools = [
    { name: 'Claude', description: 'Advanced reasoning & analysis', letter: 'C', bg: '#e85d2f' },
    { name: 'ChatGPT', description: 'Conversational AI & content', letter: 'G', bg: '#12100e' },
    { name: 'LangGraph', description: 'Stateful agent orchestration', letter: 'L', bg: '#0f766e' },
    { name: 'LangChain', description: 'LLM application framework', letter: 'L', bg: '#6d28d9' },
    { name: 'ADK', description: 'Agent Development Kit', letter: 'A', bg: '#d4a017' },
    { name: 'N8N', description: 'Workflow automation engine', letter: 'N', bg: '#be185d' },
];

export default function Tools() {
    return (
        <section id="tools" className="relative section-pad px-6 overflow-hidden border-t-[2.5px] border-[#12100e] bg-[#12100e] text-[#fdf8f0]">
            <div className="absolute inset-0 opacity-[0.06] dots-bg" style={{ backgroundImage: 'radial-gradient(circle, #fdf8f0 1.2px, transparent 1.2px)' }} />

            <div className="relative max-w-7xl mx-auto">
                <Reveal>
                    <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
                        <div>
                            <span className="pill bg-[#d4a017] text-[#12100e] border-white/20">Tools</span>
                            <h2 className="mt-4 font-display font-extrabold text-display-lg leading-[0.95] text-[#fdf8f0]">
                                The <span className="font-serif italic font-normal text-[#ff8a5c]">stack</span> we actually use.
                            </h2>
                            <p className="mt-3 text-[15px] leading-relaxed text-white/70 max-w-[58ch]">No vaporware. These are the platforms we ship with — battle-tested, production-grade.</p>
                        </div>
                        <span className="hidden sm:inline-flex text-[11px] font-mono text-white/50 border border-white/15 rounded-full px-3 py-1.5">drag → hover to pause</span>
                    </div>
                </Reveal>

                <Reveal delay={70}>
                    <div className="marquee-container relative overflow-hidden rounded-[18px] border-[1.5px] border-white/10 bg-white/[0.04]">
                        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#12100e] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#12100e] to-transparent z-10 pointer-events-none" />
                        <div className="flex gap-4 py-4 px-4 animate-marquee">
                            {[...tools, ...tools].map((tool, i) => (
                                <div key={`${tool.name}-${i}`} className="flex-shrink-0 bg-[#fdf8f0] border-[2px] border-[#12100e] rounded-2xl px-5 py-4 min-w-[220px] flex items-center gap-3.5 shadow-[4px_4px_0_0_rgba(255,255,255,0.12)]">
                                    <div className="w-11 h-11 rounded-xl border-[1.5px] border-[#12100e] flex items-center justify-center text-white font-display font-extrabold text-[18px] leading-none shadow-[2px_2px_0_0_#12100e]" style={{ background: tool.bg, color: tool.bg === '#d4a017' ? '#12100e' : '#fff' }}>
                                        {tool.letter}
                                    </div>
                                    <div>
                                        <div className="text-[14px] font-extrabold tracking-[-0.02em] text-[#12100e] leading-none">{tool.name}</div>
                                        <div className="text-[11px] font-medium text-[#6e6259] mt-1 leading-none">{tool.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <div className="mt-6 flex flex-wrap gap-2 text-[11px] font-mono text-white/45">
                    <span>We pick the right tool per job — not per hype cycle.</span>
                    <span className="hidden sm:inline opacity-30">•</span>
                    <span className="hidden sm:inline">Ask us why we chose each one.</span>
                </div>
            </div>
        </section>
    );
}
