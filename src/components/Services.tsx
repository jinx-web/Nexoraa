import { useState } from 'react';
import { Bot, Brain, Compass, ArrowUpRight, Plus, Minus, Check, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { CALENDLY_URL } from '@/config';

type Service = {
    icon: LucideIcon;
    title: string;
    tagline: string;
    description: string;
    features: { name: string; detail: string }[];
    image: string;
    imgWidth: number;
    imgHeight: number;
    badge?: string;
    accent: string; // tailwind bg
    tape: string;
};

const services: Service[] = [
    {
        icon: Bot,
        title: 'AI Agents',
        tagline: 'Autonomous Systems',
        description: 'Autonomous agents that run your workflows, make decisions, and do the boring stuff while your team does the real work.',
        features: [
            { name: 'Workflow Automation', detail: 'Agents that handle repetitive daily tasks — from data entry to report generation — freeing your team for higher-value work.' },
            { name: 'Multi-agent Orchestration', detail: 'Coordinated agent swarms where specialized agents collaborate, each handling a domain while a supervisor routes and validates.' },
            { name: 'Real-time Decisions', detail: 'Agents that ingest live data and make sub-second decisions with guardrails, logging, and human-in-the-loop fallbacks.' },
        ],
        image: 'https://images.pexels.com/photos/17483871/pexels-photo-17483871.png?auto=compress&cs=tinysrgb&w=800',
        imgWidth: 800,
        imgHeight: 533,
        accent: 'bg-[#e85d2f]',
        tape: 'Autonomous',
    },
    {
        icon: Brain,
        title: 'AI & ML',
        tagline: 'Machine Learning',
        description: 'Advisory on model selection, pipeline architecture, MLOps, and shipping — from notebook to production without the pain.',
        features: [
            { name: 'Model Advisory', detail: 'We help you choose the right models — from foundation models to fine-tuned custom architectures — based on your data, latency, and cost.' },
            { name: 'Pipeline Architecture', detail: 'End-to-end ML pipeline design: data ingestion, feature engineering, training, evaluation, and deployment with reproducibility baked in.' },
            { name: 'MLOps Strategy', detail: 'CI/CD for ML: versioned models, automated retraining, drift detection, and rollback — so production stays reliable.' },
        ],
        image: 'https://images.pexels.com/photos/17483868/pexels-photo-17483868.jpeg?auto=compress&cs=tinysrgb&w=800',
        imgWidth: 800,
        imgHeight: 450,
        badge: 'TBA',
        accent: 'bg-[#12100e]',
        tape: 'ML Ops',
    },
    {
        icon: Compass,
        title: 'Advisory',
        tagline: 'Deep Learning',
        description: 'Deep learning advisory — neural architecture, training at scale, and deployment that actually holds up under load.',
        features: [
            { name: 'Neural Architecture', detail: 'Custom networks tailored to your problem — transformers, diffusion, and domain-specific hybrids.' },
            { name: 'Training Optimization', detail: 'Distributed training, mixed-precision, and hyperparameter tuning to cut training time and cost dramatically.' },
            { name: 'Scale & Deploy', detail: 'Production deployment with auto-scaling, load balancing, and observability — reliable at any scale.' },
        ],
        image: 'https://images.pexels.com/photos/17485657/pexels-photo-17485657.png?auto=compress&cs=tinysrgb&w=800',
        imgWidth: 800,
        imgHeight: 450,
        accent: 'bg-[#0f766e]',
        tape: 'Strategy',
    },
];

export default function Services() {
    const [expanded, setExpanded] = useState<number>(0);
    const toggle = (idx: number) => setExpanded(expanded === idx ? -1 : idx);

    return (
        <section id="services" className="relative section-pad px-6 border-t-[2.5px] border-[#12100e] bg-[#f5ede0]">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="pill bg-[#d4a017] text-[#12100e]">Services</span>
                                <span className="hidden sm:inline text-[11px] font-mono text-[#6e6259]">— pick a lane, we ship the whole road</span>
                            </div>
                            <h2 className="font-display font-extrabold text-display-lg leading-[0.95] text-[#12100e]">
                                Three pillars, <span className="font-serif italic font-normal text-[#e85d2f]">one</span> way of working.
                            </h2>
                            <p className="mt-3 text-[15px] leading-relaxed text-[#3d332b] max-w-[60ch]">
                                From agents to deep learning — we cover the full stack. Tap any card to open the working draft inside.
                            </p>
                        </div>
                        <div className="hidden lg:flex items-center gap-2 text-[11px] font-mono text-[#6e6259] border border-[#12100e]/15 bg-white rounded-full px-3 py-1.5">
                            <span className="w-2 h-2 rounded-full bg-[#e85d2f]" /> 3 services • expand to see scope
                        </div>
                    </div>
                </Reveal>

                <div className="grid lg:grid-cols-3 gap-5">
                    {services.map((service, i) => {
                        const isOpen = expanded === i;
                        return (
                            <Reveal key={service.title} delay={i * 80}>
                                <div
                                    className={`bg-white border-[2.5px] border-[#12100e] rounded-[22px] overflow-hidden shadow-[6px_6px_0_0_#12100e] flex flex-col h-full transition-transform duration-300 ${
                                        isOpen ? 'rotate-[-0.3deg]' : i === 1 ? 'rotate-[0.5deg]' : 'rotate-[-0.4deg]'
                                    } hover:rotate-[0deg]`}
                                >
                                    <div className="relative h-48 overflow-hidden border-b-[2.5px] border-[#12100e] bg-[#fdf8f0]">
                                        <img src={service.image} alt={service.title} className="w-full h-full object-cover" loading="lazy" width={service.imgWidth} height={service.imgHeight} />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#12100e]/35 via-transparent to-transparent" />
                                        <div className="absolute top-3 left-3 flex items-center gap-2">
                                            <span className={`w-10 h-10 rounded-xl ${service.accent} border-[1.5px] border-[#12100e] flex items-center justify-center text-white shadow-[2px_2px_0_0_#12100e]`}>
                                                <service.icon size={18} strokeWidth={2} />
                                            </span>
                                            <span className="bg-white border border-[#12100e] rounded-full px-2.5 py-1 text-[11px] font-extrabold tracking-[0.08em] uppercase shadow-[2px_2px_0_0_#12100e] rotate-[-1deg]">
                                                {service.tape}
                                            </span>
                                        </div>
                                        {service.badge && (
                                            <span className="absolute top-3 right-3 bg-[#12100e] text-white text-[11px] font-bold tracking-[0.08em] uppercase px-2.5 py-1 rounded-full border border-white/20">
                                                {service.badge}
                                            </span>
                                        )}
                                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                                            <span className="text-[11px] font-mono font-semibold bg-white/95 border border-[#12100e]/10 rounded-full px-2.5 py-1">
                                                {service.tagline}
                                            </span>
                                            <span className="w-7 h-7 rounded-full bg-white border border-[#12100e] flex items-center justify-center">
                                                <ArrowUpRight size={14} />
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-5 flex flex-col flex-1">
                                        <h3 className="font-display font-extrabold text-[22px] tracking-[-0.03em] leading-none text-[#12100e]">
                                            {service.title}
                                        </h3>
                                        <p className="mt-2 text-[13px] leading-relaxed text-[#3d332b]">
                                            {service.description}
                                        </p>

                                        <button
                                            onClick={() => toggle(i)}
                                            aria-expanded={isOpen}
                                            className={`mt-4 w-full flex items-center justify-between gap-3 rounded-full border-[2px] px-4 py-2.5 text-[13px] font-bold transition-colors ${
                                                isOpen ? 'bg-[#12100e] text-white border-[#12100e]' : 'bg-[#fdf8f0] text-[#12100e] border-[#12100e] hover:bg-white'
                                            }`}
                                        >
                                            <span>{isOpen ? 'Hide details' : 'View details'}</span>
                                            <span className={`w-7 h-7 rounded-full flex items-center justify-center border ${isOpen ? 'bg-white text-[#12100e] border-white' : 'bg-[#12100e] text-white border-[#12100e]'}`}>
                                                {isOpen ? <Minus size={13} strokeWidth={2.5} /> : <Plus size={13} strokeWidth={2.5} />}
                                            </span>
                                        </button>

                                        {isOpen && (
                                            <div className="mt-4 space-y-3 animate-expand border-t-[1.5px] border-dashed border-[#12100e]/20 pt-4">
                                                {service.features.map((f) => (
                                                    <div key={f.name} className="flex gap-2.5">
                                                        <span className={`mt-0.5 w-6 h-6 rounded-full ${service.accent} flex items-center justify-center text-white flex-shrink-0 border border-[#12100e]`}>
                                                            <Check size={12} strokeWidth={2.5} />
                                                        </span>
                                                        <div>
                                                            <div className="text-[13px] font-bold text-[#12100e] leading-tight">{f.name}</div>
                                                            <div className="text-[12px] leading-relaxed text-[#3d332b] mt-1">{f.detail}</div>
                                                        </div>
                                                    </div>
                                                ))}
                                                <a href={CALENDLY_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#e85d2f] hover:text-[#c23a12] transition-colors">
                                                    Talk to us <ArrowUpRight size={13} />
                                                </a>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
