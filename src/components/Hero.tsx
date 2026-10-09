import { ArrowUpRight, ArrowDown } from 'lucide-react';
import { CALENDLY_URL } from '@/config';

export default function Hero() {
    return (
        <section id="hero" className="relative overflow-hidden">
            {/* paper bg with faint dots */}
            <div className="absolute inset-0 bg-[#fdf8f0]" />
            <div className="absolute inset-0 dots-bg opacity-[0.06] pointer-events-none" />

            {/* big hand-drawn scribble bg shape */}
            <div className="pointer-events-none absolute -top-10 right-[-8%] w-[58%] h-[72%] hidden lg:block opacity-90" aria-hidden>
                <svg viewBox="0 0 640 420" className="w-full h-full" fill="none">
                    <path d="M 40 120 C 90 20, 420 10, 600 95 C 620 210, 540 360, 360 390 C 160 410, 20 320, 40 120 Z" stroke="#12100e" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" opacity="0.10" />
                    <path d="M 80 145 C 130 60, 400 40, 560 118" stroke="#12100e" strokeWidth="1.2" strokeLinecap="round" opacity="0.07" />
                </svg>
            </div>

            {/* mustard paint blot */}
            <div className="pointer-events-none absolute top-[18%] right-[14%] w-[340px] h-[340px] rounded-[42%_58%_46%_54%/48%_42%_58%_52%] bg-[#d4a017] opacity-[0.11] blur-[1px] hidden lg:block" />

            <div className="relative max-w-7xl mx-auto px-6 pt-[88px] pb-10 lg:pt-[104px] lg:pb-16">
                {/* top eyebrow bar */}
                <div className="flex flex-wrap items-center gap-3 animate-fade-in">
                    <span className="pill bg-white text-[#12100e] !py-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#e85d2f] animate-pulse" />
                        Taking new projects — Q1 2026
                    </span>
                    <span className="hidden sm:inline-flex items-center gap-2 text-[12px] font-semibold tracking-[0.08em] uppercase text-[#6e6259]">
                        <span className="w-8 h-px bg-[#12100e]/20" />
                        AI & Automation Studio
                    </span>
                </div>

                <div className="mt-6 grid lg:grid-cols-[1.15fr_0.85fr] gap-10 lg:gap-8 items-start">
                    {/* headline */}
                    <div>
                        <h1 className="font-display font-extrabold text-[#12100e] text-display-xl leading-[0.88] animate-fade-up" style={{ animationDelay: '60ms' }}>
                            <span className="inline-block rotate-[-0.6deg]">We build</span>{' '}
                            <span className="relative inline-block">
                                <span className="relative z-10 font-serif italic font-normal text-[#e85d2f]">intelligent</span>
                                <span className="absolute left-[-2%] right-[-2%] bottom-[0.06em] h-[0.38em] bg-[#d4a017] -rotate-[1deg] rounded-[3px]" aria-hidden />
                            </span>
                            <br />
                            <span className="inline-block">systems that</span>{' '}
                            <span className="inline-flex items-baseline gap-2">
                                <span className="font-serif italic font-normal">think</span>
                                <span className="hidden sm:inline-flex -translate-y-1 items-center justify-center w-9 h-9 rounded-full bg-[#12100e] text-white text-[18px] leading-none">↗</span>
                            </span>{' '}
                            <span className="inline-block">for you</span>
                            <span className="inline-block text-[#e85d2f] ml-1">*</span>
                        </h1>

                        <p className="mt-5 max-w-[52ch] text-[17px] md:text-[18px] leading-[1.55] text-[#3d332b] animate-fade-up" style={{ animationDelay: '140ms' }}>
                            Autonomous agents, machine learning, and deep advisory — built like a
                            product team, not a slide deck. We ship the thing that runs your ops
                            while you sleep.
                        </p>

                        <div className="mt-7 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: '200ms' }}>
                            <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">
                                Start a Project <ArrowUpRight size={16} strokeWidth={2.5} />
                            </a>
                            <a href="#services" className="btn-ghost">
                                See how we work
                            </a>
                            <span className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold text-[#6e6259]">
                                <span className="w-6 h-px bg-[#12100e]/20" /> No deck. Just outcomes.
                            </span>
                        </div>

                        {/* social proof strip — chunky */}
                        <div className="mt-8 grid grid-cols-3 gap-3 max-w-[520px] animate-fade-in" style={{ animationDelay: '260ms' }}>
                            {[
                                { v: '50+', k: 'agents live', sub: 'in production' },
                                { v: '15+', k: 'enterprise', sub: 'teams' },
                                { v: '99.9%', k: 'uptime', sub: 'SLA' },
                            ].map((s) => (
                                <div key={s.k} className="bg-white border-[2px] border-[#12100e] rounded-2xl px-3 py-3.5 shadow-[4px_4px_0_0_#12100e] rotate-[-0.4deg] odd:rotate-[0.5deg]">
                                    <div className="font-display font-extrabold text-[22px] leading-none tracking-[-0.03em] text-[#12100e]">{s.v}</div>
                                    <div className="text-[11px] font-extrabold tracking-[0.08em] uppercase text-[#12100e] mt-1">{s.k}</div>
                                    <div className="text-[11px] text-[#6e6259]">{s.sub}</div>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 flex items-center gap-2 text-[12px] font-mono text-[#6e6259] animate-fade-in" style={{ animationDelay: '320ms' }}>
                            <span className="w-2 h-2 rounded-full bg-emerald-500 border border-[#12100e]" />
                            Live agents running right now — monitoring 24/7
                        </div>
                    </div>

                    {/* right — editorial collage */}
                    <div className="relative hidden lg:block animate-fade-in" style={{ animationDelay: '180ms' }}>
                        <div className="relative">
                            {/* main photo card — tilted */}
                            <div className="relative bg-white border-[2.5px] border-[#12100e] rounded-[22px] overflow-hidden shadow-[8px_8px_0_0_#12100e] rotate-[-0.9deg]">
                                <img
                                    src="https://images.pexels.com/photos/30869729/pexels-photo-30869729.jpeg?auto=compress&cs=tinysrgb&w=900"
                                    alt="Abstract metallic composition"
                                    className="w-full h-[420px] object-cover"
                                    loading="eager"
                                    width={900}
                                    height={420}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#12100e]/45 via-transparent to-transparent" />
                                {/* sticker on photo */}
                                <div className="absolute top-4 left-4 bg-[#d4a017] text-[#12100e] border-[2px] border-[#12100e] rounded-full px-3 py-1 text-[11px] font-extrabold tracking-[0.08em] uppercase shadow-[3px_3px_0_0_#12100e] rotate-[-2deg]">
                                    ✦ Production-grade
                                </div>
                                {/* caption bar */}
                                <div className="absolute bottom-0 left-0 right-0 bg-[#fdf8f0] border-t-[2.5px] border-[#12100e] px-4 py-3 flex items-center gap-3">
                                    <div className="w-9 h-9 rounded-full bg-[#12100e] text-white flex items-center justify-center font-mono text-[11px] font-bold">01</div>
                                    <div>
                                        <div className="text-[13px] font-bold tracking-[-0.01em] text-[#12100e]">Neural Architecture</div>
                                        <div className="text-[11px] font-mono text-[#6e6259]">Built to run, not to demo</div>
                                    </div>
                                    <span className="ml-auto text-[11px] font-bold border border-[#12100e] rounded-full px-2.5 py-1 bg-white">★ 4.9/5</span>
                                </div>
                            </div>

                            {/* floating notecard */}
                            <div className="absolute -top-6 -right-4 bg-white border-[2.5px] border-[#12100e] rounded-2xl px-4 py-3 shadow-[6px_6px_0_0_#12100e] rotate-[1.2deg] w-[190px]">
                                <div className="text-[11px] font-extrabold tracking-[0.1em] uppercase text-[#e85d2f]">Now building</div>
                                <div className="text-[13px] font-bold leading-tight text-[#12100e] mt-1">Agent swarm for ops — 3 teams, 1 supervisor</div>
                                <div className="mt-2 h-1.5 rounded-full bg-[#12100e]/10 overflow-hidden">
                                    <div className="h-full w-[72%] bg-[#e85d2f] rounded-full" />
                                </div>
                                <div className="text-[11px] font-mono text-[#6e6259] mt-1">72% shipped</div>
                            </div>

                            {/* floating metric */}
                            <div className="absolute -bottom-5 -left-4 bg-[#12100e] text-[#fdf8f0] border-[2.5px] border-[#12100e] rounded-2xl px-4 py-3 shadow-[6px_6px_0_0_#12100e] rotate-[-1deg] flex items-center gap-3">
                                <div className="w-10 h-10 rounded-xl bg-[#d4a017] border border-white/20 flex items-center justify-center text-[#12100e] font-black text-[14px]">↻</div>
                                <div>
                                    <div className="font-display font-extrabold text-[20px] leading-none">15h/wk</div>
                                    <div className="text-[11px] tracking-[0.08em] uppercase opacity-80 font-semibold">Avg. time saved</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-8 flex items-center gap-2 text-[11px] font-mono text-[#6e6259]">
                            <span className="w-8 h-px bg-[#12100e]/20" />
                            Hand-built in 2026 — ships in weeks, not quarters
                        </div>
                    </div>
                </div>

                {/* bottom ticker-like line */}
                <div className="mt-8 lg:mt-10 border-t-[2.5px] border-[#12100e] bg-white -mx-6 px-6 py-3 flex flex-wrap items-center gap-3 text-[11px] font-bold tracking-[0.08em] uppercase">
                    <span className="bg-[#12100e] text-white px-2.5 py-1 rounded-full text-[10px]">Trusted stack</span>
                    <span className="text-[#12100e]">Claude</span><span className="opacity-20">•</span>
                    <span className="text-[#12100e]">ChatGPT</span><span className="opacity-20">•</span>
                    <span className="text-[#12100e]">LangGraph</span><span className="opacity-20">•</span>
                    <span className="text-[#12100e]">LangChain</span><span className="opacity-20">•</span>
                    <span className="text-[#12100e]">ADK</span><span className="opacity-20">•</span>
                    <span className="text-[#12100e]">n8n</span>
                    <span className="ml-auto hidden sm:inline-flex items-center gap-2 normal-case tracking-normal font-mono text-[#6e6259]">
                        Scroll <ArrowDown size={12} />
                    </span>
                </div>
            </div>
        </section>
    );
}
