import Reveal from '@/components/Reveal';

const tools = [
    { name: 'Claude Sonnet 3.7', description: 'Agentic reasoning & code synthesis', letter: 'C', bg: '#d97757' },
    { name: 'OpenAI GPT-4o', description: 'Multimodal vision & function calls', letter: 'O', bg: '#10a37f' },
    { name: 'LangGraph', description: 'State-machine swarm orchestrator', letter: 'L', bg: '#e85d2f' },
    { name: 'pgvector / Postgres', description: 'Persistent memory & hybrid search', letter: 'P', bg: '#336791' },
    { name: 'Model Context Protocol', description: 'Secure tool contracts & servers', letter: 'M', bg: '#d4a017' },
    { name: 'vLLM / TensorRT', description: 'Sub-50ms local inference runtime', letter: 'V', bg: '#7c3aed' },
    { name: 'LlamaIndex', description: 'Structured enterprise RAG indexes', letter: 'L', bg: '#0284c7' },
    { name: 'Pydantic Guardrails', description: 'Strict deterministic schema bounds', letter: 'G', bg: '#e11d48' },
];

export default function Tools() {
    return (
        <section id="tools" className="relative py-20 lg:py-28 px-4 sm:px-6 overflow-hidden bg-[#12100e] text-[#faf7f2] border-t border-white/10">
            {/* Subtle warm amber glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[300px] rounded-full bg-[#e85d2f]/10 blur-[140px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                <Reveal>
                    <div className="flex flex-wrap items-end justify-between gap-6 mb-10">
                        <div>
                            <div className="eyebrow !text-white/60 mb-3">
                                <span className="eyebrow-badge !bg-white/10 !text-white !border-white/20">05</span>
                                <span>Battle-Tested Tech Stack</span>
                            </div>
                            <h2 className="text-[clamp(2.2rem,4.8vw,3.8rem)] font-extrabold tracking-[-0.04em] leading-[0.98] text-white">
                                The tools we <span className="headline-accent !text-[#ff8a5c]">actually</span> ship to production.
                            </h2>
                            <p className="mt-3 text-[16px] text-white/70 max-w-xl">
                                Zero vaporware. We curate, benchmark, and deploy using the fastest and most reliable foundation models and agent frameworks.
                            </p>
                        </div>
                        <span className="hidden sm:inline-flex text-[11.5px] font-mono text-white/40 border border-white/10 rounded-full px-3 py-1.5">
                            continuous stream • hover to pause
                        </span>
                    </div>
                </Reveal>

                <Reveal delay={70}>
                    <div className="marquee-container relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
                        <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#12100e] to-transparent z-10 pointer-events-none" />
                        <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#12100e] to-transparent z-10 pointer-events-none" />
                        <div className="flex gap-4 py-4 px-4 animate-marquee">
                            {[...tools, ...tools].map((tool, i) => (
                                <div
                                    key={`${tool.name}-${i}`}
                                    className="flex-shrink-0 bg-[#191614] border border-white/10 rounded-2xl px-5 py-4 min-w-[240px] flex items-center gap-3.5 shadow-lg hover:border-white/25 transition-all"
                                >
                                    <div
                                        className="w-10 h-10 rounded-xl flex items-center justify-center text-white font-mono font-bold text-[16px] flex-shrink-0 shadow-sm"
                                        style={{ background: tool.bg }}
                                    >
                                        {tool.letter}
                                    </div>
                                    <div>
                                        <div className="text-[14px] font-bold text-white leading-tight">{tool.name}</div>
                                        <div className="text-[11.5px] text-white/60 mt-1 leading-tight">{tool.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Reveal>

                <div className="mt-6 flex flex-wrap items-center justify-between text-[11.5px] font-mono text-white/40">
                    <span>Engineered for latency, safety, and strict cost containment.</span>
                    <span className="hidden sm:inline">Self-hosted VPC or enterprise cloud API routes.</span>
                </div>
            </div>
        </section>
    );
}
