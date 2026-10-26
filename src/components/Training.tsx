import { useState } from 'react';
import {
    MessageSquare,
    FileCode,
    Puzzle,
    Users,
    Bot,
    GraduationCap,
    Plus,
    Minus,
    Check,
    ArrowUpRight,
    type LucideIcon,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { CALENDLY_URL } from '@/config';

type Module = {
    icon: LucideIcon;
    label: string;
    description: string;
    topics: string[];
    tag: string;
};

const trainingModules: Module[] = [
    {
        icon: MessageSquare,
        label: 'Prompts & Chains',
        description: 'Advanced reasoning architectures, contextual framing, and multi-turn chain design.',
        topics: ['System prompt topology & boundary defense', 'Chain-of-thought, self-consistency & tree-of-thought', 'Automated prompt evaluation with benchmark datasets', 'Token optimization & latency pruning'],
        tag: 'Core',
    },
    {
        icon: FileCode,
        label: 'Artifacts & Schema',
        description: 'Generating reliable, production-ready code, schemas, and structured JSON.',
        topics: ['Constrained decoding with Pydantic and JSON Schema', 'Code generation with automated lint and test loops', 'Deterministic output pipelines for enterprise software', 'Version-controlled prompt & artifact registries'],
        tag: 'Engineering',
    },
    {
        icon: Puzzle,
        label: 'Skills & Tool Use',
        description: 'Building custom agent capabilities and secure Model Context Protocol servers.',
        topics: ['Tool definition contracts and error recovery', 'MCP (Model Context Protocol) server construction', 'Safe database querying and API synthesis', 'Sandboxed code execution environments'],
        tag: 'Integration',
    },
    {
        icon: Users,
        label: 'Collaborative AI Workflows',
        description: 'Practical human-in-the-loop pairing that multiplies developer velocity.',
        topics: ['AI-assisted pairing & architecture exploration', 'Automated PR reviews and inline code suggestions', 'Continuous team documentation synthesis', 'Adoption frameworks for senior engineering staff'],
        tag: 'Culture',
    },
    {
        icon: Bot,
        label: 'Autonomous Agents',
        description: 'State-machine orchestration, memory stores, and self-correcting loops.',
        topics: ['Graph-based agent state machines (LangGraph)', 'Persistent episodic & semantic memory (pgvector)', 'Multi-agent supervisor routing & validation', 'Production observability, traces & telemetry'],
        tag: 'Swarm',
    },
    {
        icon: GraduationCap,
        label: 'Team Reskilling',
        description: 'Transforming traditional software teams into AI-native builders.',
        topics: ['Role-specific competency maps (Front, Back, Data, Ops)', 'Hands-on hackathons with real production outcomes', 'Risk management, IP privacy & model compliance', 'Executive ROI frameworks and progression metrics'],
        tag: 'Enterprise',
    },
];

export default function Training() {
    const [expanded, setExpanded] = useState<number>(0);
    const toggle = (idx: number) => setExpanded(expanded === idx ? -1 : idx);

    return (
        <section id="training" className="relative py-20 lg:py-28 px-4 sm:px-6 bg-[#faf7f2] border-t border-[rgba(28,20,14,0.08)]">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
                    {/* Left Sticky Column */}
                    <div className="lg:sticky lg:top-28">
                        <Reveal>
                            <div className="eyebrow mb-3">
                                <span className="eyebrow-badge">04</span>
                                <span>Hands-on Academy</span>
                            </div>

                            <h2 className="text-[clamp(2.2rem,4.5vw,3.6rem)] font-extrabold tracking-[-0.04em] leading-[0.98] text-[#14110f]">
                                Equip your team with <span className="headline-accent">practical</span> AI.
                            </h2>

                            <p className="mt-4 text-[16px] text-[#3e3730] leading-relaxed max-w-lg">
                                Real engineering labs—not pre-recorded slide decks. We train your developers, data teams, and product managers to build production AI systems.
                            </p>
                        </Reveal>

                        <Reveal delay={80}>
                            {/* Stats */}
                            <div className="mt-7 grid grid-cols-3 gap-3 max-w-md">
                                {[
                                    { v: '6', l: 'Intensive Modules' },
                                    { v: '100%', l: 'Hands-on Labs' },
                                    { v: 'Custom', l: 'Client Syllabus' },
                                ].map((s) => (
                                    <div key={s.l} className="p-3.5 rounded-2xl bg-white border border-[rgba(28,20,14,0.08)] shadow-sm text-center">
                                        <div className="text-[22px] font-extrabold text-[#14110f]">{s.v}</div>
                                        <div className="text-[11px] font-mono uppercase text-[#70665d] tracking-wider mt-0.5">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={140}>
                            <div className="mt-7 p-6 rounded-2xl bg-[#f2ede4] border border-[rgba(28,20,14,0.08)] space-y-4 max-w-md">
                                <div className="text-[12px] font-mono font-semibold uppercase tracking-wider text-[#70665d]">
                                    Enterprise Adoption Cycle
                                </div>
                                <div className="grid grid-cols-4 gap-2 text-center text-[12px]">
                                    {['Discover', 'Build', 'Deploy', 'Sovereign'].map((step, idx) => (
                                        <div key={step} className="p-2 rounded-xl bg-white/90 border border-[rgba(28,20,14,0.06)]">
                                            <div className="font-mono text-[#e85d2f] font-bold text-[11px]">0{idx + 1}</div>
                                            <div className="font-semibold text-[#14110f] text-[11.5px] mt-0.5">{step}</div>
                                        </div>
                                    ))}
                                </div>
                                <a
                                    href={CALENDLY_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="link-arrow text-[13px] font-semibold pt-1"
                                >
                                    Book a training workshop consultation <ArrowUpRight size={14} />
                                </a>
                            </div>
                        </Reveal>
                    </div>

                    {/* Right Accordion List */}
                    <div className="space-y-3.5">
                        {trainingModules.map((module, i) => {
                            const isOpen = expanded === i;
                            return (
                                <Reveal key={module.label} delay={i * 50}>
                                    <div
                                        className={`rounded-2xl transition-all duration-300 border ${
                                            isOpen
                                                ? 'bg-white border-[rgba(28,20,14,0.12)] shadow-[0_8px_24px_-8px_rgba(20,17,15,0.12)]'
                                                : 'bg-white/80 border-[rgba(28,20,14,0.06)] hover:bg-white hover:border-[rgba(28,20,14,0.1)]'
                                        }`}
                                    >
                                        <button
                                            type="button"
                                            onClick={() => toggle(i)}
                                            className="w-full flex items-center justify-between gap-4 p-5 text-left"
                                        >
                                            <div className="flex items-center gap-3.5">
                                                <div className="w-10 h-10 rounded-xl bg-[#faf7f2] border border-[rgba(28,20,14,0.08)] flex items-center justify-center text-[#e85d2f] flex-shrink-0">
                                                    <module.icon size={19} />
                                                </div>
                                                <div>
                                                    <div className="flex items-center gap-2">
                                                        <span className="text-[16px] font-bold text-[#14110f]">{module.label}</span>
                                                        <span className="text-[10.5px] font-mono font-medium text-[#70665d] bg-[#faf7f2] px-2 py-0.5 rounded-full border border-[rgba(28,20,14,0.06)]">
                                                            {module.tag}
                                                        </span>
                                                    </div>
                                                    <p className="text-[13px] text-[#70665d] mt-0.5 line-clamp-1">{module.description}</p>
                                                </div>
                                            </div>

                                            <div className="w-7 h-7 rounded-full bg-[#faf7f2] border border-[rgba(28,20,14,0.08)] flex items-center justify-center text-[#70665d] flex-shrink-0">
                                                {isOpen ? <Minus size={13} strokeWidth={2.5} /> : <Plus size={13} strokeWidth={2.5} />}
                                            </div>
                                        </button>

                                        {isOpen && (
                                            <div className="px-5 pb-5 pt-1 border-t border-[rgba(28,20,14,0.06)] animate-fade-in">
                                                <div className="mt-3 grid sm:grid-cols-2 gap-2.5">
                                                    {module.topics.map((t) => (
                                                        <div key={t} className="flex items-start gap-2 text-[12.5px] text-[#3e3730]">
                                                            <Check size={13} className="text-[#e85d2f] flex-shrink-0 mt-0.5" />
                                                            <span>{t}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </Reveal>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
