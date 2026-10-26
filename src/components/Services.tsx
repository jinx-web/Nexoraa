import { useState } from 'react';
import {
    Bot,
    Brain,
    Compass,
    ArrowUpRight,
    Plus,
    Minus,
    Check,
    Cpu,
    Database,
    ShieldAlert,
    Network,
    Terminal,
    Workflow,
    type LucideIcon,
} from 'lucide-react';
import Reveal from '@/components/Reveal';
import { CALENDLY_URL } from '@/config';

type Service = {
    icon: LucideIcon;
    title: string;
    tagline: string;
    description: string;
    features: { name: string; detail: string }[];
    badge?: string;
    tag: string;
};

const mainServices: Service[] = [
    {
        icon: Bot,
        title: 'Autonomous AI Agents',
        tagline: 'Self-Directed Swarms',
        description: 'Multi-agent systems that autonomously execute multi-step operations, resolve complex tickets, and run business workflows with human supervisory gates.',
        features: [
            { name: 'Self-Healing Workflows', detail: 'Agents that detect API failures or invalid responses, automatically retry, and fall back to alternate deterministic strategies.' },
            { name: 'Multi-Agent Orchestration', detail: 'Hierarchical swarms where dedicated specialist agents collaborate under an overarching planning supervisor.' },
            { name: 'Real-Time Human-in-the-Loop', detail: 'Safety boundaries that hold high-stakes actions in escrow until confirmed via Slack, email, or webhook.' },
        ],
        tag: 'Autonomous',
    },
    {
        icon: Brain,
        title: 'Machine Learning Systems',
        tagline: 'End-to-End MLOps',
        description: 'High-throughput ML architectures, fine-tuned domain models, embeddings vector indexes, and continuous evaluation pipelines built for real volume.',
        features: [
            { name: 'Model Optimization & Distillation', detail: 'Quantization, LoRA fine-tuning, and model pruning to reduce latency and token inference costs by up to 70%.' },
            { name: 'Vector Memory & Hybrid Search', detail: 'Scalable retrieval-augmented generation (RAG) with hybrid lexical and semantic embeddings for zero hallucination.' },
            { name: 'CI/CD & Drift Monitoring', detail: 'Automated evaluation benches that benchmark model accuracy, latency, and distribution shift on every release.' },
        ],
        badge: 'Enterprise',
        tag: 'ML Architecture',
    },
    {
        icon: Compass,
        title: 'Deep Advisory & Audits',
        tagline: 'Senior Engineering Advisory',
        description: 'Strategic technical guidance, security audits for agentic systems, infrastructure scaling, and technical due diligence for executive teams.',
        features: [
            { name: 'Architectural Audits', detail: 'Comprehensive code and infra reviews identifying latency bottlenecks, prompt injections, and token waste.' },
            { name: 'Sovereign On-Premise AI', detail: 'Deployment on private VPCs, air-gapped hardware, or local LLM inference clusters for full regulatory compliance.' },
            { name: 'Build vs. Buy Advisory', detail: 'Unbiased recommendations on which foundation models and vendor APIs to utilize vs. what to own in-house.' },
        ],
        tag: 'Advisory',
    },
];

const capabilityGrid = [
    { icon: Workflow, title: 'Multi-Agent State Machines', desc: 'Graph-based execution with LangGraph, AutoGen, and custom state machines.' },
    { icon: Database, title: 'Postgres & Vector Store Mesh', desc: 'Hybrid pgvector, Qdrant, and Pinecone clusters tuned for millisecond retrieval.' },
    { icon: ShieldAlert, title: 'Deterministic Guardrails', desc: 'Pydantic validation, regex assertions, and jailbreak detection on every output.' },
    { icon: Network, title: 'MCP & Custom Agent Tools', desc: 'Model Context Protocol servers that give your agents secure access to your internal databases.' },
    { icon: Terminal, title: 'Continuous Benchmarking', desc: 'Synthetic test generation and automated regression testing across model versions.' },
    { icon: Cpu, title: 'Local & Edge Inference', desc: 'vLLM, Ollama, and TensorRT-LLM deployments for sub-50ms local response times.' },
];

export default function Services() {
    const [expanded, setExpanded] = useState<number>(0);
    const toggle = (idx: number) => setExpanded(expanded === idx ? -1 : idx);

    return (
        <section id="services" className="relative py-20 lg:py-28 px-4 sm:px-6 bg-[#f2ede4]/50 border-t border-[rgba(28,20,14,0.08)]">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <Reveal>
                    <div className="flex flex-wrap items-end justify-between gap-6 mb-12">
                        <div className="max-w-2xl">
                            <div className="eyebrow mb-3">
                                <span className="eyebrow-badge">02</span>
                                <span>Platform Capabilities</span>
                            </div>
                            <h2 className="text-[clamp(2.2rem,4.8vw,3.8rem)] font-extrabold tracking-[-0.04em] leading-[0.98] text-[#14110f]">
                                Engineered for leverage, <span className="headline-accent">not slide decks.</span>
                            </h2>
                            <p className="mt-3.5 text-[16px] leading-relaxed text-[#3e3730]">
                                From autonomous agents to deep machine learning advisory, we design and ship resilient systems that handle critical company operations.
                            </p>
                        </div>

                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary !h-[42px] !px-5 !text-[13px]"
                        >
                            <span>Schedule Consultation</span>
                            <ArrowUpRight size={14} />
                        </a>
                    </div>
                </Reveal>

                {/* 3 Core Pillars */}
                <div className="grid lg:grid-cols-3 gap-6 mb-14">
                    {mainServices.map((service, i) => {
                        const isOpen = expanded === i;
                        return (
                            <Reveal key={service.title} delay={i * 70}>
                                <div className="card-refined p-6 sm:p-7 flex flex-col h-full bg-white">
                                    <div className="flex items-center justify-between mb-5">
                                        <div className="w-11 h-11 rounded-xl bg-[#faf7f2] border border-[rgba(28,20,14,0.08)] flex items-center justify-center text-[#e85d2f] shadow-sm">
                                            <service.icon size={22} strokeWidth={2.2} />
                                        </div>
                                        <div className="flex items-center gap-2">
                                            {service.badge && (
                                                <span className="text-[10.5px] font-mono font-semibold uppercase tracking-wider bg-[#14110f] text-white px-2 py-0.5 rounded-full">
                                                    {service.badge}
                                                </span>
                                            )}
                                            <span className="text-[11px] font-mono uppercase tracking-wider font-semibold text-[#70665d] bg-[#faf7f2] px-2.5 py-1 rounded-full border border-[rgba(28,20,14,0.08)]">
                                                {service.tag}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="flex-1">
                                        <div className="text-[11.5px] font-mono text-[#e85d2f] font-semibold uppercase tracking-wider mb-1">
                                            {service.tagline}
                                        </div>
                                        <h3 className="text-[22px] font-extrabold tracking-tight text-[#14110f] leading-snug">
                                            {service.title}
                                        </h3>
                                        <p className="mt-2.5 text-[14px] text-[#3e3730] leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="mt-6 pt-5 border-t border-[rgba(28,20,14,0.08)]">
                                        <button
                                            type="button"
                                            onClick={() => toggle(i)}
                                            className="w-full flex items-center justify-between text-[13px] font-semibold text-[#14110f] hover:text-[#e85d2f] transition-colors py-1"
                                        >
                                            <span>{isOpen ? 'Collapse breakdown' : 'View deliverables'}</span>
                                            <span className="w-6 h-6 rounded-full bg-[#faf7f2] border border-[rgba(28,20,14,0.08)] flex items-center justify-center">
                                                {isOpen ? <Minus size={12} strokeWidth={2.5} /> : <Plus size={12} strokeWidth={2.5} />}
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="mt-4 space-y-3 pt-3 border-t border-dashed border-[rgba(28,20,14,0.1)] animate-fade-in text-[13px]">
                                                {service.features.map((f) => (
                                                    <div key={f.name} className="flex gap-2.5">
                                                        <span className="w-4 h-4 rounded-full bg-[#e85d2f]/10 text-[#e85d2f] flex items-center justify-center text-[10px] font-bold flex-shrink-0 mt-0.5">
                                                            ✓
                                                        </span>
                                                        <div>
                                                            <div className="font-semibold text-[#14110f]">{f.name}</div>
                                                            <div className="text-[12px] text-[#70665d] leading-relaxed mt-0.5">{f.detail}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>

                {/* 6 Capability Features (Antideploy Grid style) */}
                <div className="pt-8 border-t border-[rgba(28,20,14,0.08)]">
                    <div className="eyebrow mb-6">
                        <span className="eyebrow-badge">03</span>
                        <span>Architectural Building Blocks</span>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {capabilityGrid.map((cap) => (
                            <div key={cap.title} className="p-4 sm:p-5 rounded-2xl bg-white/70 border border-[rgba(28,20,14,0.06)] hover:bg-white transition-all shadow-sm">
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-7 h-7 rounded-lg bg-[#faf7f2] border border-[rgba(28,20,14,0.08)] flex items-center justify-center text-[#e85d2f]">
                                        <cap.icon size={15} />
                                    </div>
                                    <h4 className="text-[14px] font-bold text-[#14110f]">{cap.title}</h4>
                                </div>
                                <p className="text-[12.5px] text-[#70665d] leading-relaxed pl-10">
                                    {cap.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
