import { Github, Linkedin, Twitter, Mail } from 'lucide-react';
import { CONTACT_EMAIL } from '@/config';

type FooterLinkItem = {
    label: string;
    href: string;
};

const footerLinks: Record<string, FooterLinkItem[]> = {
    Services: [
        { label: 'AI Agents', href: '#services' },
        { label: 'AI & ML', href: '#services' },
        { label: 'Advisory', href: '#services' },
    ],
    Training: [
        { label: 'Prompts', href: '#training' },
        { label: 'Artifacts', href: '#training' },
        { label: 'Skills', href: '#training' },
        { label: 'Agents', href: '#training' },
        { label: 'Reskilling', href: '#training' },
    ],
    Company: [
        { label: 'About', href: '#about' },
        { label: 'Tools', href: '#tools' },
        { label: 'Contact', href: '#contact' },
    ],
};

const socials = [
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: 'Email' },
];

export default function Footer() {
    return (
        <footer className="relative border-t border-[rgba(28,24,20,0.08)] px-6 pt-16 pb-10 overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] rounded-full bg-amber-200/8 blur-[100px] pointer-events-none" />

            <div className="relative max-w-7xl mx-auto">
                <div className="grid md:grid-cols-[1.5fr_1fr_1fr_1fr] gap-12 mb-12">
                    {/* Brand */}
                    <div>
                        <a href="#hero" className="flex items-center gap-2.5 mb-5">
                            <div className="w-9 h-9 rounded-lg border border-amber-700/25 flex items-center justify-center bg-gradient-to-br from-amber-50 to-[#f0ebe1] shadow-md shadow-amber-700/10">
                                <span className="font-display text-amber-800 text-xl italic leading-none">N</span>
                            </div>
                            <span className="text-[15px] font-medium tracking-tight text-[#1a1612]">
                                Nexora<span className="text-amber-700/60"> AI</span>
                            </span>
                        </a>
                        <p className="text-sm text-[#4a4239] leading-relaxed max-w-xs">
                            AI & Automation consulting. We build autonomous agents, machine learning systems,
                            and deep learning advisory for forward-thinking organizations.
                        </p>
                        <div className="flex items-center gap-3 mt-6">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    aria-label={social.label}
                                    target={social.href.startsWith('http') ? '_blank' : undefined}
                                    rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                    className="w-9 h-9 rounded-lg glass-cream flex items-center justify-center text-[#4a4239] hover:text-amber-800 hover:bg-[#f0ebe1]/60 transition-all duration-300"
                                >
                                    <social.icon size={16} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Link columns */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-xs font-medium text-[#6b6052] uppercase tracking-wider mb-4">
                                {category}
                            </h4>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-sm text-[#4a4239] hover:text-[#1a1612] transition-colors duration-300"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-[rgba(28,24,20,0.08)]">
                    <p className="text-xs text-[#6b6052]">
                        © 2026 Nexora AI. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6">
                        <a href="#hero" className="text-xs text-[#6b6052] hover:text-[#4a4239] transition-colors">
                            Privacy
                        </a>
                        <a href="#hero" className="text-xs text-[#6b6052] hover:text-[#4a4239] transition-colors">
                            Terms
                        </a>
                        <a href="#hero" className="text-xs text-[#6b6052] hover:text-[#4a4239] transition-colors">
                            Security
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
