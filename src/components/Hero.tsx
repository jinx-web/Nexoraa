import { useState, useEffect, useRef } from 'react';
import {
    Copy,
    Check,
    ArrowRight,
    Shield,
    Lock,
    Zap,
    Cpu,
    ArrowUpRight,
} from 'lucide-react';
import { CALENDLY_URL, CONTACT_EMAIL } from '@/config';

const AGENT_PROMPT = 'Set this project up to deploy on Brainorth. Fetch https://brainorth.ai/agent.md and follow it.';

export default function Hero() {
    const [copied, setCopied] = useState(false);
    const [stageTab, setStageTab] = useState(0);
    const [scrollTilt, setScrollTilt] = useState(10);
    const stageRef = useRef<HTMLDivElement>(null);

    const handleCopy = () => {
        navigator.clipboard.writeText(AGENT_PROMPT);
        setCopied(true);
        setTimeout(() => setCopied(false), 2600);
    };

    // Scroll-driven 3D tilt scrub effect matching Antideploy's GSAP ScrollTrigger
    useEffect(() => {
        const onScroll = () => {
            if (!stageRef.current) return;
            const rect = stageRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;
            // When rect.top is near bottom, tilt is 12deg; as it enters center, tilt becomes 0deg
            const progress = Math.min(1, Math.max(0, (windowHeight - rect.top) / (windowHeight * 0.75)));
            setScrollTilt(Math.max(0, +(12 * (1 - progress)).toFixed(2)));
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    // Cycle through stages automatically unless hovered
    useEffect(() => {
        const timer = setInterval(() => {
            setStageTab((prev) => (prev + 1) % 4);
        }, 3400);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="hero" id="top">
            {/* Backdrop Glow & Grid Pattern */}
            <div className="hero__backdrop" aria-hidden="true">
                <div className="hero__glow" />
            </div>

            <div className="wrap hero__inner">
                {/* 1. Centered Eyebrow Pill */}
                <a className="hero__pill" href="#services">
                    <span className="pill__tag">Agents</span>
                    <span className="pill__text">
                        Autonomous intelligence. You define the mission, our agents execute.
                    </span>
                    <ArrowRight className="pill__arrow" size={13} />
                </a>

                {/* 2. Exact Antideploy Text-Structured Centered Headline */}
                <h1 className="hero__title">
                    <span className="hero__line">We build intelligent systems.</span>
                    <span className="hero__line hero__line--accent">
                        <em>That think for you.</em>
                        <svg className="hero__swash" viewBox="0 0 520 40" preserveAspectRatio="none" aria-hidden="true">
                            <path d="M6 30 C 120 12, 260 8, 514 22" />
                        </svg>
                    </span>
                </h1>

                {/* 3. Centered Lede */}
                <p className="hero__lede">
                    Autonomous agents, machine learning, and deep advisory — built like a senior product team, not a slide deck. We ship the systems that run your operations while you sleep.
                </p>

                {/* 4. The Iconic Centered Connect Pill */}
                <div className="say">
                    <button
                        type="button"
                        onClick={handleCopy}
                        className={`connect ${copied ? 'is-copied' : ''}`}
                        aria-label="Connect your agent to Brainorth: copy the prompt"
                    >
                        <span className="connect__label">Connect your agent to Brainorth</span>

                        <span className="connect__agents" aria-hidden="true">
                            {/* Claude */}
                            <svg className="c-claude" viewBox="0 0 24 24" fill="currentColor">
                                <path d="m4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z" />
                            </svg>
                            {/* OpenAI */}
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944z" />
                            </svg>
                            {/* Cursor */}
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.503.131 1.891 5.678a.84.84 0 0 0-.42.726v11.188c0 .3.162.575.42.724l9.609 5.55a1 1 0 0 0 .998 0l9.61-5.55a.84.84 0 0 0 .42-.724V6.404a.84.84 0 0 0-.42-.726L12.497.131a1.01 1.01 0 0 0-.996 0" />
                            </svg>
                            {/* Antigravity / Agent Symbol */}
                            <span className="w-5 h-5 rounded-full bg-[#14110f] text-white flex items-center justify-center font-serif text-[11px] font-bold">
                                B
                            </span>
                        </span>

                        <span className="connect__rule" aria-hidden="true" />

                        <span className="connect__act" aria-hidden="true">
                            <span className="connect__state connect__state--idle">
                                <Copy size={13} strokeWidth={2.2} />
                                <span>Copy</span>
                            </span>
                            <span className="connect__state connect__state--done">
                                <Check size={14} strokeWidth={3} />
                                <span>Copied</span>
                            </span>
                        </span>
                    </button>

                    <p className="say__note">
                        That is the whole instruction. Your agent reads <b>brainorth.ai/agent.md</b> and takes it from there.
                    </p>
                </div>

                {/* 5. Subnote beneath */}
                <p className="hero__note">
                    <Shield size={16} />
                    <span>No slide decks. 30-min discovery call or email directly:</span>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="link-arrow">
                        {CONTACT_EMAIL} <ArrowUpRight size={14} />
                    </a>
                </p>
            </div>

            {/* ===== THE STAGE: EXACT ANTIDEPLOY ARCHITECTURE WITH 3D TILT ===== */}
            <div className="wrap wrap--wide stage-wrap" ref={stageRef}>
                <div
                    className="stage"
                    style={{
                        transform: `rotateX(${scrollTilt}deg)`,
                    }}
                >
                    <div className="stage__bg">
                        <div className="stage__grid" />

                        {/* Top Stage Bar */}
                        <div className="flex items-center justify-between text-white/50 font-mono text-[11.5px] pb-3 mb-3 border-b border-white/10">
                            <div className="flex items-center gap-2">
                                <span className="w-2 h-2 rounded-full bg-[#e85d2f] animate-ping" />
                                <span className="text-white/80">BRAINORTH AUTONOMOUS AGENT ORCHESTRATOR</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <span>STATUS: <strong className="text-[#22c06e]">ACTIVE</strong></span>
                                <span>REGION: <strong className="text-white">sg-central-1</strong></span>
                            </div>
                        </div>

                        {/* Dual Windows Grid: Left Terminal + Right Browser */}
                        <div className="grid lg:grid-cols-[1.1fr_1.1fr] gap-4">
                            {/* Window 1: Terminal */}
                            <div className="win win--term">
                                <div className="win__bar">
                                    <span className="win__lights">
                                        <i /><i /><i />
                                    </span>
                                    <span className="win__title">
                                        <b>Brainorth Agent</b>
                                        <span className="win__path">~/production/swarm</span>
                                    </span>
                                </div>
                                <div className="term">
                                    <p className="term__in">
                                        <span className="term__chev">&gt;</span>
                                        <span className="term__typed">
                                            agent initialize --stack enterprise-rag --supervise
                                        </span>
                                        <span className="term__caret" />
                                    </p>

                                    <div className="space-y-3 mt-4 text-[12.5px]">
                                        <div className="flex items-center gap-2.5 text-white/80">
                                            <span className="tdot is-done" />
                                            <span>Reading system contracts & database schema</span>
                                        </div>

                                        <div className="flex items-center gap-2.5 text-white/80">
                                            <span className="tdot is-done" />
                                            <span>Mounting pgvector hybrid embedding index (48,200 records)</span>
                                        </div>

                                        <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-[12px] my-2">
                                            <div className="flex items-center justify-between text-white/50 text-[11px] mb-1">
                                                <span>AWAITING SUPERVISION</span>
                                                <span className="text-[#d4a017]">Escrow: Active</span>
                                            </div>
                                            <p className="text-white/90 font-sans">
                                                Agent swarm proposing 3 autonomous worker daemons for ticket triage and reconciliation.
                                            </p>
                                            <div className="mt-2.5 flex items-center gap-2">
                                                <span className="px-2.5 py-1 rounded bg-[#22c06e] text-white font-sans font-bold text-[11px]">
                                                    ✓ Approved by Supervisor
                                                </span>
                                            </div>
                                        </div>

                                        <div className="flex items-center gap-2.5 text-[#e85d2f]">
                                            <span className="tdot is-run" />
                                            <span>Active pipeline running: processing batch tasks (41.2s)</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Window 2: Live Browser Preview */}
                            <div className="win bg-white rounded-2xl p-5 border border-white/20 flex flex-col justify-between shadow-2xl">
                                <div>
                                    {/* Browser Chrome Header */}
                                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-[rgba(28,20,14,0.08)]">
                                        <div className="flex items-center gap-1.5">
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#14110f]/15" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#14110f]/15" />
                                            <span className="w-2.5 h-2.5 rounded-full bg-[#14110f]/15" />
                                        </div>

                                        <div className="flex items-center gap-2 px-3 py-1 bg-[#faf7f2] border border-[rgba(28,20,14,0.08)] rounded-full text-[12px] font-mono text-[#3e3730] w-full max-w-xs mx-auto justify-center">
                                            <Lock size={11} className="text-[#12994f]" />
                                            <span>swarm.brainorth.app</span>
                                        </div>

                                        <div className="text-[11px] font-mono text-[#70665d]">200 OK</div>
                                    </div>

                                    {/* App UI Snapshot */}
                                    <div className="space-y-3.5">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <h3 className="font-bold text-[15px] text-[#14110f]">Live Agent Swarm</h3>
                                                <p className="text-[12px] text-[#70665d]">Autonomous operations & ticket resolution</p>
                                            </div>
                                            <span className="px-2.5 py-1 rounded-full bg-[#12994f]/10 text-[#12994f] text-[11px] font-bold border border-[#12994f]/20 flex items-center gap-1.5">
                                                <span className="w-2 h-2 rounded-full bg-[#12994f] animate-pulse" />
                                                Live
                                            </span>
                                        </div>

                                        {/* Metric Cards Row */}
                                        <div className="grid grid-cols-3 gap-2">
                                            <div className="p-3 rounded-xl bg-[#faf7f2] border border-[rgba(28,20,14,0.06)]">
                                                <div className="text-[10.5px] text-[#70665d] uppercase font-mono">Tasks Closed</div>
                                                <div className="text-[18px] font-extrabold text-[#14110f] mt-0.5">1,482</div>
                                                <div className="text-[10px] text-[#12994f] font-semibold">↑ 34% this week</div>
                                            </div>

                                            <div className="p-3 rounded-xl bg-[#faf7f2] border border-[rgba(28,20,14,0.06)]">
                                                <div className="text-[10.5px] text-[#70665d] uppercase font-mono">Time Saved</div>
                                                <div className="text-[18px] font-extrabold text-[#14110f] mt-0.5">18.4h</div>
                                                <div className="text-[10px] text-[#70665d]">per engineer / wk</div>
                                            </div>

                                            <div className="p-3 rounded-xl bg-[#faf7f2] border border-[rgba(28,20,14,0.06)]">
                                                <div className="text-[10.5px] text-[#70665d] uppercase font-mono">Accuracy</div>
                                                <div className="text-[18px] font-extrabold text-[#e85d2f] mt-0.5">99.4%</div>
                                                <div className="text-[10px] text-[#70665d]">benchmarked</div>
                                            </div>
                                        </div>

                                        {/* Active Stream list */}
                                        <div className="p-3 rounded-xl bg-[#faf7f2] border border-[rgba(28,20,14,0.06)] space-y-2 text-[12px]">
                                            <div className="flex items-center justify-between text-[10.5px] font-mono text-[#70665d] uppercase">
                                                <span>Active Agents</span>
                                                <span>Status</span>
                                            </div>
                                            <div className="flex items-center justify-between font-medium text-[#14110f]">
                                                <span className="flex items-center gap-2">
                                                    <Zap size={13} className="text-[#e85d2f]" />
                                                    Data Pipeline Orchestrator
                                                </span>
                                                <span className="text-[#12994f] font-mono text-[11px]">Executing</span>
                                            </div>
                                            <div className="flex items-center justify-between font-medium text-[#14110f]">
                                                <span className="flex items-center gap-2">
                                                    <Cpu size={13} className="text-[#d4a017]" />
                                                    Deep Research & Fact Synthesizer
                                                </span>
                                                <span className="text-[#12994f] font-mono text-[11px]">Synced</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="pt-3 border-t border-[rgba(28,20,14,0.08)] flex items-center justify-between text-[11px] text-[#70665d]">
                                    <span>Client instance: <strong>Fintech Tier 1</strong></span>
                                    <span className="text-[#12994f]">Deployed in 2 weeks</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step Tabs Beneath the Stage (Matching Antideploy) */}
                    <div className="stage-steps">
                        {[
                            { step: '01', title: 'Connect your agent', desc: 'Copy prompt into Claude, Codex or Cursor' },
                            { step: '02', title: 'Architecture audit', desc: 'Agent inspects repo, schemas & tools' },
                            { step: '03', title: 'Supervise & approve', desc: 'Human-in-the-loop validation boundary' },
                            { step: '04', title: 'Autonomous production', desc: 'Continuous execution with 99.9% uptime' },
                        ].map((s, idx) => (
                            <div
                                key={s.step}
                                onClick={() => setStageTab(idx)}
                                className={`stage-step-item ${stageTab === idx ? 'is-active' : ''}`}
                            >
                                <div className="text-[11px] font-mono text-[#e85d2f] font-bold">{s.step}</div>
                                <div className="text-[13px] font-bold text-[#14110f] mt-0.5">{s.title}</div>
                                <div className="text-[11.5px] text-[#70665d] leading-snug mt-1 hidden sm:block">{s.desc}</div>
                                <div className="stage-step-bar" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
