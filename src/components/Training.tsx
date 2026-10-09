import { useState } from 'react';
import { MessageSquare, FileCode, Puzzle, Users, Bot, GraduationCap, Plus, Minus, Check, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';

type Module = { icon: LucideIcon; label: string; description: string; topics: string[]; color: string };

const trainingModules: Module[] = [
    { icon: MessageSquare, label: 'Prompts', description: 'Prompt engineering for real outputs.', topics: ['Structured prompt design patterns', 'Few-shot & chain-of-thought', 'Prompt testing & evaluation', 'Cost-optimized prompting'], color: '#e85d2f' },
    { icon: FileCode, label: 'Artifacts', description: 'Reusable AI-generated artifacts.', topics: ['Artifact versioning & lifecycle', 'Templating for repeatable outputs', 'Quality control pipelines', 'Integration with content systems'], color: '#12100e' },
    { icon: Puzzle, label: 'Skills', description: 'Specialized skills for your domain.', topics: ['Domain-specific skill architecture', 'Tool-use & function calling', 'Skill composition & chaining', 'Evaluation & continuous improvement'], color: '#0f766e' },
    { icon: Users, label: 'Collaborative Projects', description: 'Team AI workflows that actually stick.', topics: ['AI-assisted pair programming', 'Code review with agents', 'Team workflow orchestration', 'Knowledge sharing & docs'], color: '#6d28d9' },
    { icon: Bot, label: 'Agents', description: 'Design, build, deploy autonomous agents.', topics: ['Agent architecture & state', 'Multi-agent coordination', 'Guardrails & human-in-the-loop', 'Deploy, monitor, observe'], color: '#d4a017' },
    { icon: GraduationCap, label: 'Reskilling', description: 'Workforce programs for the AI era.', topics: ['Role-specific competency frameworks', 'Hands-on labs & projects', 'Change management & adoption', 'Measuring ROI & progression'], color: '#be185d' },
];

export default function Training() {
    const [expanded, setExpanded] = useState<number>(0);
    const toggle = (idx: number) => setExpanded(expanded === idx ? -1 : idx);

    return (
        <section id="training" className="relative section-pad px-6 bg-[#fdf8f0] border-t-[2.5px] border-[#12100e]">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-[0.95fr_1.15fr] gap-10 items-start">
                    <div className="lg:sticky lg:top-[84px]">
                        <Reveal>
                            <span className="pill bg-white text-[#12100e]">Training</span>
                            <h2 className="mt-4 font-display font-extrabold text-display-lg leading-[0.95] text-[#12100e]">
                                Equip your team with <span className="font-serif italic font-normal text-[#0f766e]">practical</span> AI.
                            </h2>
                            <p className="mt-3 text-[15px] leading-relaxed text-[#3d332b] max-w-[52ch]">
                                Hands-on programs — from fundamentals to production. Each module expands to the real curriculum.
                            </p>
                        </Reveal>

                        <Reveal delay={80}>
                            <div className="mt-6 grid grid-cols-3 gap-3 max-w-[420px]">
                                {[
                                    { v: '6', l: 'Modules' },
                                    { v: '100%', l: 'Hands-on' },
                                    { v: 'Custom', l: 'Curriculum' },
                                ].map((s) => (
                                    <div key={s.l} className="bg-[#12100e] text-[#fdf8f0] rounded-2xl px-3 py-3 border-[1.5px] border-[#12100e] text-center">
                                        <div className="font-display font-extrabold text-[20px] leading-none">{s.v}</div>
                                        <div className="text-[11px] font-bold tracking-[0.08em] uppercase opacity-70 mt-1">{s.l}</div>
                                    </div>
                                ))}
                            </div>
                        </Reveal>

                        <Reveal delay={140}>
                            <div className="mt-6 hidden lg:block bg-white border-[2.5px] border-[#12100e] rounded-[18px] overflow-hidden shadow-[6px_6px_0_0_#12100e] rotate-[-0.6deg]">
                                <img src="https://images.pexels.com/photos/30895543/pexels-photo-30895543.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Abstract" className="w-full h-40 object-cover border-b-[2.5px] border-[#12100e]" loading="lazy" width={600} height={160} />
                                <div className="p-4">
                                    <div className="text-[11px] font-extrabold tracking-[0.12em] uppercase text-[#6e6259]">Learning path</div>
                                    <div className="mt-3 grid grid-cols-4 gap-2">
                                        {['Understand', 'Build', 'Deploy', 'Measure'].map((step, idx) => (
                                            <div key={step} className="text-center">
                                                <div className="w-8 h-8 rounded-full bg-[#12100e] text-white text-[11px] font-bold flex items-center justify-center mx-auto border border-[#12100e]">{idx + 1}</div>
                                                <div className="text-[11px] font-bold text-[#12100e] mt-1 leading-tight">{step}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Reveal>
                    </div>

                    <div className="space-y-3">
                        {trainingModules.map((module, i) => {
                            const isOpen = expanded === i;
                            return (
                                <Reveal key={module.label} delay={i * 60}>
                                    <div className={`bg-white border-[2.5px] border-[#12100e] rounded-[18px] overflow-hidden shadow-[4px_4px_0_0_#12100e] transition-transform duration-200 ${isOpen ? 'rotate-[-0.2deg] shadow-[6px_6px_0_0_#12100e]' : 'hover:rotate-[-0.2deg]'}`}>
                                        <button onClick={() => toggle(i)} aria-expanded={isOpen} className="w-full flex items-center gap-3 p-4 text-left">
                                            <span className="w-11 h-11 rounded-xl border-[1.5px] border-[#12100e] flex items-center justify-center flex-shrink-0 shadow-[2px_2px_0_0_#12100e]" style={{ background: module.color, color: module.color === '#d4a017' ? '#12100e' : '#fff' }}>
                                                <module.icon size={18} strokeWidth={1.9} />
                                            </span>
                                            <span className="flex-1 min-w-0">
                                                <span className="block text-[15px] font-extrabold tracking-[-0.02em] text-[#12100e] leading-none">{module.label}</span>
                                                <span className="block text-[12px] text-[#6e6259] mt-1 truncate">{module.description}</span>
                                            </span>
                                            <span className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border-[1.5px] transition-colors ${isOpen ? 'bg-[#12100e] text-white border-[#12100e]' : 'bg-white text-[#12100e] border-[#12100e]'}`}>
                                                {isOpen ? <Minus size={13} strokeWidth={2.5} /> : <Plus size={13} strokeWidth={2.5} />}
                                            </span>
                                        </button>
                                        {isOpen && (
                                            <div className="px-4 pb-4 animate-expand">
                                                <div className="ml-[56px] border-l-[2px] border-dashed border-[#12100e]/15 pl-4 space-y-2.5 pt-1">
                                                    {module.topics.map((topic) => (
                                                        <div key={topic} className="flex items-start gap-2.5">
                                                            <span className="mt-0.5 w-5 h-5 rounded-full bg-[#12100e] text-white flex items-center justify-center flex-shrink-0">
                                                                <Check size={10} strokeWidth={2.7} />
                                                            </span>
                                                            <span className="text-[13px] leading-snug text-[#3d332b]">{topic}</span>
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
