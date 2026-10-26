import Reveal from '@/components/Reveal';
import { ArrowUpRight, ShieldCheck, Zap, Code2, Users2 } from 'lucide-react';
import { CALENDLY_URL } from '@/config';

const aboutTiles = [
    { label: '50+ Agents Built', sub: 'In production across 4 continents' },
    { label: '30+ ML Pipelines', sub: 'Sub-second real-time inference' },
    { label: '200+ Engineers Trained', sub: 'Hands-on practical AI mastery' },
    { label: '15h/wk Saved', sub: 'Per developer in client teams' },
];

export default function About() {
    return (
        <section id="about" className="relative py-20 lg:py-28 px-4 sm:px-6 bg-[#f2ede4]/40 border-t border-[rgba(28,20,14,0.08)]">
            <div className="relative max-w-7xl mx-auto">
                <Reveal>
                    <div className="card-refined overflow-hidden grid lg:grid-cols-[1.1fr_1.3fr] bg-white border border-[rgba(28,20,14,0.08)] shadow-[0_16px_36px_-12px_rgba(20,17,15,0.12)]">
                        {/* Left Visual Editorial Column */}
                        <div className="relative min-h-[300px] lg:min-h-full bg-[#12100e] text-white p-8 lg:p-10 flex flex-col justify-between overflow-hidden">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-[#e85d2f]/15 rounded-full blur-3xl pointer-events-none" />

                            <div className="relative z-10">
                                <div className="text-[11px] font-mono uppercase tracking-widest text-white/50 mb-2">
                                    Engineering Advisory
                                </div>
                                <h3 className="text-[28px] lg:text-[34px] font-extrabold leading-[1.05] tracking-tight text-white">
                                    Built by engineers <br />
                                    <span className="headline-accent !text-[#ff8a5c]">who ship code</span>, not slides.
                                </h3>
                            </div>

                            <div className="relative z-10 mt-8 space-y-3">
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white/80">
                                    <Code2 size={16} className="text-[#e85d2f]" />
                                    <span>Production codebases, direct PRs, zero boilerplate</span>
                                </div>
                                <div className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 text-[13px] text-white/80">
                                    <ShieldCheck size={16} className="text-[#22c06e]" />
                                    <span>Sovereign data isolation & zero model retention</span>
                                </div>
                            </div>

                            <div className="relative z-10 pt-6 mt-6 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-white/40">
                                <span>SINCE 2026</span>
                                <span>SINGAPORE • GLOBAL REMOTE</span>
                            </div>
                        </div>

                        {/* Right Content Column */}
                        <div className="p-8 lg:p-12 flex flex-col justify-between">
                            <div>
                                <div className="eyebrow mb-3">
                                    <span className="eyebrow-badge">06</span>
                                    <span>Our Philosophy</span>
                                </div>

                                <h2 className="text-[clamp(1.8rem,3.2vw,2.6rem)] font-extrabold tracking-tight leading-tight text-[#14110f]">
                                    A consultancy founded on <span className="headline-accent">high leverage</span> and measurable ROI.
                                </h2>

                                <p className="mt-4 text-[15px] leading-relaxed text-[#3e3730]">
                                    We are AI researchers, distributed systems engineers, and automation architects.
                                    Instead of leaving you with 80-page strategic slide decks, we write code, fine-tune models,
                                    and deploy working agent swarms directly into your infrastructure.
                                </p>

                                <div className="mt-8 grid sm:grid-cols-2 gap-3.5">
                                    {aboutTiles.map((tile) => (
                                        <div
                                            key={tile.label}
                                            className="p-4 rounded-xl bg-[#faf7f2] border border-[rgba(28,20,14,0.06)]"
                                        >
                                            <div className="text-[15px] font-bold text-[#14110f]">{tile.label}</div>
                                            <div className="text-[12px] text-[#70665d] mt-0.5">{tile.sub}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-[rgba(28,20,14,0.08)] flex flex-wrap items-center justify-between gap-4">
                                <span className="text-[12px] font-mono text-[#70665d]">
                                    Autonomous deployments with SLAs and continuous support.
                                </span>
                                <a
                                    href={CALENDLY_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-arrow text-[13.5px] font-bold"
                                >
                                    <span>Schedule intro call</span>
                                    <ArrowUpRight size={14} />
                                </a>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
