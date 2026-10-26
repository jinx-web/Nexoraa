import { useState } from 'react';
import { ArrowUpRight, Send, Check, Mail, Calendar, Clock, Copy, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { CALENDLY_URL, CONTACT_EMAIL } from '@/config';

type FormState = {
    name: string;
    email: string;
    company: string;
    message: string;
};

const AGENT_PROMPT = 'Design and deploy an autonomous AI agent swarm with Brainorth. Read https://brainorth.ai and initialize advisory.';

export default function CTA() {
    const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');
    const [promptCopied, setPromptCopied] = useState(false);

    const handleChange = (field: keyof FormState, value: string) => {
        setForm((prev: FormState) => ({ ...prev, [field]: value }));
    };

    const handleCopyPrompt = () => {
        navigator.clipboard.writeText(AGENT_PROMPT);
        setPromptCopied(true);
        setTimeout(() => setPromptCopied(false), 2400);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setError('Please complete all required fields.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setError('Please enter a valid work email address.');
            return;
        }
        setError('');
        setSubmitted(true);
    };

    return (
        <section id="contact" className="relative py-24 lg:py-32 px-4 sm:px-6 bg-[#12100e] text-[#faf7f2] overflow-hidden border-t border-white/10">
            {/* Ambient warm radial glow */}
            <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[750px] h-[450px] rounded-full bg-[#e85d2f]/12 blur-[140px] pointer-events-none" />

            <div className="relative max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-16 items-start">
                    {/* Left Column: Heading, connect button, links */}
                    <Reveal>
                        <div>
                            <div className="eyebrow !text-white/60 mb-3">
                                <span className="eyebrow-badge !bg-white/10 !text-white !border-white/20">07</span>
                                <span>Get In Touch</span>
                            </div>

                            <h2 className="text-[clamp(2.4rem,5vw,4.2rem)] font-extrabold tracking-[-0.04em] leading-[0.98] text-white">
                                Stop learning a cloud <br />
                                <span className="headline-accent !text-[#ff8a5c]">to ship one agent.</span>
                            </h2>

                            <p className="mt-5 text-[16px] text-white/75 leading-relaxed max-w-lg">
                                Copy the prompt into your coding agent, or schedule a 30-minute intro call directly with our engineering team. We respond within 1 business day.
                            </p>

                            {/* Antideploy style Connect Pill on dark */}
                            <div className="mt-8 p-4 rounded-2xl bg-white/[0.04] border border-white/10 max-w-lg">
                                <div className="text-[11.5px] font-mono text-white/50 uppercase tracking-wider mb-2">
                                    Instant Agent Handshake
                                </div>
                                <button
                                    type="button"
                                    onClick={handleCopyPrompt}
                                    className="w-full flex items-center justify-between gap-3 p-3 rounded-xl bg-[#191614] border border-white/15 hover:border-white/30 transition-all text-left group"
                                >
                                    <div className="flex items-center gap-2.5 truncate">
                                        <div className="flex items-center -space-x-1 flex-shrink-0">
                                            <span className="w-5 h-5 rounded-full bg-white text-[#12100e] flex items-center justify-center text-[10px] font-bold">C</span>
                                            <span className="w-5 h-5 rounded-full bg-[#10a37f] text-white flex items-center justify-center text-[9px] font-bold">AI</span>
                                            <span className="w-5 h-5 rounded-full bg-[#e85d2f] text-white flex items-center justify-center text-[9px] font-bold">B</span>
                                        </div>
                                        <span className="text-[13px] font-medium text-white truncate">
                                            Connect your agent to Brainorth
                                        </span>
                                    </div>

                                    <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-[12px] font-bold uppercase tracking-wider bg-[#e85d2f] text-white flex-shrink-0 shadow-sm">
                                        {promptCopied ? (
                                            <>
                                                <Check size={13} strokeWidth={3} />
                                                <span>Copied</span>
                                            </>
                                        ) : (
                                            <>
                                                <Copy size={13} strokeWidth={2.2} />
                                                <span>Copy Prompt</span>
                                            </>
                                        )}
                                    </span>
                                </button>
                                <div className="mt-2 text-[11.5px] text-white/45">
                                    Prompt instructs Claude Code, Codex, or Cursor to consult <span className="text-white/70">brainorth.ai</span>
                                </div>
                            </div>

                            {/* Direct Contact Links */}
                            <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 text-[13.5px]">
                                <a
                                    href={CALENDLY_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn-primary !h-[42px] !px-5"
                                >
                                    <span>Book 30-Min Intro Call</span>
                                    <ArrowUpRight size={14} />
                                </a>

                                <a
                                    href={`mailto:${CONTACT_EMAIL}`}
                                    className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors"
                                >
                                    <Mail size={15} className="text-[#e85d2f]" />
                                    <span>{CONTACT_EMAIL}</span>
                                </a>
                            </div>
                        </div>
                    </Reveal>

                    {/* Right Column: Contact Form */}
                    <Reveal delay={80}>
                        <div className="p-7 sm:p-8 rounded-3xl bg-[#191614] border border-white/10 shadow-2xl">
                            <h3 className="text-[20px] font-bold text-white mb-1">Send a Project Brief</h3>
                            <p className="text-[13px] text-white/60 mb-6">Direct line to our systems architecture partners.</p>

                            {submitted ? (
                                <div className="p-6 rounded-2xl bg-[#12994f]/10 border border-[#12994f]/25 text-center space-y-2">
                                    <div className="w-10 h-10 rounded-full bg-[#12994f] text-white flex items-center justify-center mx-auto text-[18px]">
                                        ✓
                                    </div>
                                    <h4 className="text-[16px] font-bold text-white">Message Received</h4>
                                    <p className="text-[13px] text-white/70">
                                        Thank you, {form.name}. One of our partners will review your notes and respond within 1 business day.
                                    </p>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-4">
                                    {error && (
                                        <div className="p-3 rounded-xl bg-[#dc3f45]/15 border border-[#dc3f45]/30 text-[#ff8085] text-[12.5px]">
                                            {error}
                                        </div>
                                    )}

                                    <div>
                                        <label htmlFor="cta-name" className="block text-[12px] font-mono uppercase text-white/60 mb-1.5">
                                            Your Name *
                                        </label>
                                        <input
                                            id="cta-name"
                                            type="text"
                                            value={form.name}
                                            onChange={(e) => handleChange('name', e.target.value)}
                                            placeholder="Sarah Lin"
                                            className="w-full h-11 px-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-[13.5px] focus:outline-none focus:border-[#e85d2f] focus:ring-1 focus:ring-[#e85d2f] transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="cta-email" className="block text-[12px] font-mono uppercase text-white/60 mb-1.5">
                                            Work Email *
                                        </label>
                                        <input
                                            id="cta-email"
                                            type="email"
                                            value={form.email}
                                            onChange={(e) => handleChange('email', e.target.value)}
                                            placeholder="sarah@company.com"
                                            className="w-full h-11 px-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-[13.5px] focus:outline-none focus:border-[#e85d2f] focus:ring-1 focus:ring-[#e85d2f] transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="cta-company" className="block text-[12px] font-mono uppercase text-white/60 mb-1.5">
                                            Organization / Team
                                        </label>
                                        <input
                                            id="cta-company"
                                            type="text"
                                            value={form.company}
                                            onChange={(e) => handleChange('company', e.target.value)}
                                            placeholder="Acme Corp / Stealth Startup"
                                            className="w-full h-11 px-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-[13.5px] focus:outline-none focus:border-[#e85d2f] focus:ring-1 focus:ring-[#e85d2f] transition-all"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="cta-message" className="block text-[12px] font-mono uppercase text-white/60 mb-1.5">
                                            Project Goals & Scope *
                                        </label>
                                        <textarea
                                            id="cta-message"
                                            rows={3}
                                            value={form.message}
                                            onChange={(e) => handleChange('message', e.target.value)}
                                            placeholder="We are looking to automate our financial analysis workflow using an autonomous agent swarm..."
                                            className="w-full p-3.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-[13.5px] focus:outline-none focus:border-[#e85d2f] focus:ring-1 focus:ring-[#e85d2f] transition-all resize-none"
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn-primary !w-full !h-[44px] justify-center mt-2"
                                    >
                                        <span>Submit Brief</span>
                                        <Send size={14} />
                                    </button>
                                </form>
                            )}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
