import { useState } from 'react';
import { ArrowUpRight, Send, Check, Mail, Calendar, Clock, type LucideIcon } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { CALENDLY_URL, CONTACT_EMAIL } from '@/config';

type FormState = {
    name: string;
    email: string;
    company: string;
    message: string;
};

type ContactItem = {
    icon: LucideIcon;
    label: string;
    sub: string;
    href: string | null;
    external: boolean;
};

const contactInfo: ContactItem[] = [
    { icon: Calendar, label: 'Book a call', sub: '30-min intro conversation', href: CALENDLY_URL, external: true },
    { icon: Mail, label: 'Email us', sub: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}`, external: false },
    { icon: Clock, label: 'Response time', sub: 'Within 1 business day', href: null, external: false },
];

export default function CTA() {
    const [form, setForm] = useState<FormState>({ name: '', email: '', company: '', message: '' });
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState('');

    const handleChange = (field: keyof FormState, value: string) => {
        setForm((prev: FormState) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
            setError('Please fill in your name, email, and message.');
            return;
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(form.email)) {
            setError('Please enter a valid email address.');
            return;
        }
        setError('');
        setSubmitted(true);
    };

    return (
        <section id="contact" className="relative section-pad px-6 overflow-hidden">
            {/* Ambient glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-amber-200/18 blur-[140px] animate-pulse-glow" />
                <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-orange-200/12 blur-[100px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
            </div>

            <div className="relative max-w-5xl mx-auto">
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 items-stretch">
                    {/* Left: heading + contact info */}
                    <Reveal>
                        <div className="flex flex-col justify-center">
                            <div className="flex items-center gap-2 mb-4">
                                <span className="text-xs font-medium text-amber-800/70 uppercase tracking-[0.2em]">
                                    Contact
                                </span>
                                <div className="h-px w-12 bg-gradient-to-r from-amber-700/30 to-transparent" />
                            </div>
                            <h2 className="text-display-xl font-medium text-[#1a1612] text-balance mb-4">
                                Let's build something{' '}
                                <span className="font-display italic text-amber-800/85 font-normal">intelligent</span>{' '}
                                together.
                            </h2>
                            <p className="text-lg text-[#4a4239] leading-relaxed mb-8">
                                Tell us about your project. Book a call, or send a message — we reply within 1 business day.
                            </p>

                            <div className="space-y-3">
                                {contactInfo.map((item) => {
                                    const content = (
                                        <div className="flex items-center gap-3.5 p-4 rounded-2xl glass-cream card-3d-hover">
                                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-600 to-amber-800 flex items-center justify-center text-white flex-shrink-0 shadow-md shadow-amber-700/20">
                                                <item.icon size={18} />
                                            </div>
                                            <div>
                                                <div className="text-sm font-medium text-[#1a1612]">{item.label}</div>
                                                <div className="text-xs text-[#6b6052] mt-0.5">{item.sub}</div>
                                            </div>
                                        </div>
                                    );
                                    if (item.href) {
                                        return (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                                                className="block"
                                            >
                                                {content}
                                            </a>
                                        );
                                    }
                                    return <div key={item.label}>{content}</div>;
                                })}
                            </div>
                        </div>
                    </Reveal>

                    {/* Right: contact form */}
                    <Reveal delay={100}>
                        <div className="glass-cream-strong rounded-[28px] p-8 lg:p-10 card-3d">
                            {submitted ? (
                                <div className="h-full flex flex-col items-center justify-center text-center py-12 animate-scale-in">
                                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 flex items-center justify-center text-white shadow-lg shadow-emerald-700/20 mb-5">
                                        <Check size={28} strokeWidth={2.5} />
                                    </div>
                                    <h3 className="text-xl font-medium text-[#1a1612] mb-2">Message sent</h3>
                                    <p className="text-sm text-[#4a4239] leading-relaxed max-w-xs">
                                        Thank you, {form.name.split(' ')[0] || 'there'}. We'll be in touch within 1 business day.
                                    </p>
                                    <button
                                        onClick={() => {
                                            setSubmitted(false);
                                            setForm({ name: '', email: '', company: '', message: '' });
                                        }}
                                        className="mt-6 text-sm text-amber-800 hover:text-amber-900 transition-colors"
                                    >
                                        Send another message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-5">
                                    <div>
                                        <label htmlFor="name" className="block text-xs font-medium text-[#6b6052] uppercase tracking-wider mb-2">
                                            Name <span className="text-amber-700">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            required
                                            value={form.name}
                                            onChange={(e) => handleChange('name', e.target.value)}
                                            placeholder="Your name"
                                            className="form-input w-full px-4 py-3 text-sm text-[#1a1612] rounded-xl focus:outline-none placeholder:text-[#a89c8d]"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="email" className="block text-xs font-medium text-[#6b6052] uppercase tracking-wider mb-2">
                                            Email <span className="text-amber-700">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            required
                                            value={form.email}
                                            onChange={(e) => handleChange('email', e.target.value)}
                                            placeholder="you@company.com"
                                            className="form-input w-full px-4 py-3 text-sm text-[#1a1612] rounded-xl focus:outline-none placeholder:text-[#a89c8d]"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="company" className="block text-xs font-medium text-[#6b6052] uppercase tracking-wider mb-2">
                                            Company
                                        </label>
                                        <input
                                            id="company"
                                            type="text"
                                            value={form.company}
                                            onChange={(e) => handleChange('company', e.target.value)}
                                            placeholder="Company name (optional)"
                                            className="form-input w-full px-4 py-3 text-sm text-[#1a1612] rounded-xl focus:outline-none placeholder:text-[#a89c8d]"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="message" className="block text-xs font-medium text-[#6b6052] uppercase tracking-wider mb-2">
                                            Message <span className="text-amber-700">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            required
                                            rows={4}
                                            value={form.message}
                                            onChange={(e) => handleChange('message', e.target.value)}
                                            placeholder="Tell us about your project..."
                                            className="form-input w-full px-4 py-3 text-sm text-[#1a1612] rounded-xl focus:outline-none placeholder:text-[#a89c8d] resize-none"
                                        />
                                    </div>

                                    {error && (
                                        <div className="text-xs text-red-700 bg-red-50 border border-red-200 rounded-lg px-4 py-2.5 animate-fade-in">
                                            {error}
                                        </div>
                                    )}

                                    <button
                                        type="submit"
                                        className="btn-accent group w-full px-6 py-3.5 text-sm font-medium rounded-full flex items-center justify-center gap-2"
                                    >
                                        Send Message
                                        <Send size={16} className="group-hover:translate-x-[3px] group-hover:-translate-y-[2px] transition-transform duration-500" />
                                    </button>

                                    <div className="flex items-center justify-center gap-3 text-xs text-[#6b6052] pt-1">
                                        <span>No commitment required</span>
                                        <span className="w-1 h-1 rounded-full bg-[rgba(28,24,20,0.08)]" />
                                        <span>Custom proposals</span>
                                    </div>

                                    <div className="flex items-center justify-center pt-2">
                                        <a
                                            href={CALENDLY_URL}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-sm text-[#4a4239] hover:text-amber-800 transition-colors group"
                                        >
                                            Prefer to talk? Book a call
                                            <ArrowUpRight size={14} className="group-hover:translate-x-[3px] group-hover:-translate-y-[3px] transition-transform duration-500" />
                                        </a>
                                    </div>
                                </form>
                            )}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
