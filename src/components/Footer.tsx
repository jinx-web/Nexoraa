import { Github, Linkedin, Twitter, Mail, ArrowUpRight } from 'lucide-react';
import { CONTACT_EMAIL, SITE_URL } from '@/config';

const footerNav = {
    Services: [
        { label: 'Autonomous Agents', href: '#services' },
        { label: 'Machine Learning Systems', href: '#services' },
        { label: 'Deep Advisory & Audits', href: '#services' },
        { label: 'Sovereign VPC Inference', href: '#services' },
    ],
    Academy: [
        { label: 'Prompts & Chains', href: '#training' },
        { label: 'Artifacts & Schema', href: '#training' },
        { label: 'Skills & Tool Use', href: '#training' },
        { label: 'Agent State Machines', href: '#training' },
        { label: 'Team Reskilling', href: '#training' },
    ],
    Resources: [
        { label: 'Battle-Tested Stack', href: '#tools' },
        { label: 'Engineering Philosophy', href: '#about' },
        { label: 'Agent Contract (agent.md)', href: `${SITE_URL}/agent.md` },
        { label: 'Instructions (llms.txt)', href: `${SITE_URL}/llms.txt` },
    ],
    Company: [
        { label: 'About Us', href: '#about' },
        { label: 'Client Advisory', href: '#contact' },
        { label: 'Direct Email', href: `mailto:${CONTACT_EMAIL}` },
    ],
};

const socials = [
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter / X' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${CONTACT_EMAIL}`, label: 'Email' },
];

export default function Footer() {
    return (
        <footer className="relative bg-[#0d0c0a] text-[#faf7f2] border-t border-white/10 pt-16 pb-12 px-4 sm:px-6 overflow-hidden">
            <div className="relative max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] gap-10 mb-16">
                    {/* Brand Column */}
                    <div>
                        <a href="#hero" className="flex items-center gap-2.5 mb-4 group">
                            <div className="w-8 h-8 rounded-lg bg-white text-[#12100e] flex items-center justify-center font-serif text-[18px] italic font-semibold">
                                B
                            </div>
                            <span className="text-[17px] font-bold tracking-tight text-white">
                                Brainorth<span className="font-serif italic font-normal text-[#e85d2f]">.ai</span>
                            </span>
                        </a>

                        <p className="text-[13.5px] text-white/60 leading-relaxed max-w-xs mb-5">
                            Autonomous agent swarms, continuous ML pipelines, and deep technical advisory for forward-thinking organizations.
                        </p>

                        {/* Live status badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[12px] font-mono text-white/70">
                            <span className="live-dot" />
                            <span>All agent swarms operational</span>
                        </div>

                        {/* Social Links */}
                        <div className="flex items-center gap-2.5 mt-6">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    aria-label={s.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
                                >
                                    <s.icon size={15} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Columns */}
                    {Object.entries(footerNav).map(([category, links]) => (
                        <div key={category}>
                            <h4 className="text-[11px] font-mono uppercase tracking-wider text-white/40 mb-3.5 font-semibold">
                                {category}
                            </h4>
                            <ul className="space-y-2.5">
                                {links.map((link) => (
                                    <li key={link.label}>
                                        <a
                                            href={link.href}
                                            className="text-[13px] text-white/70 hover:text-white transition-colors"
                                        >
                                            {link.label}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Massive Watermark Word (Antideploy signature touch) */}
                <div
                    className="select-none pointer-events-none py-6 font-extrabold tracking-tighter text-white/[0.035] text-[clamp(4.5rem,14vw,12.5rem)] leading-none text-center font-sans overflow-hidden"
                    aria-hidden
                >
                    BRAINORTH
                </div>

                {/* Bottom Base Bar */}
                <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-white/50">
                    <div>
                        © {new Date().getFullYear()} Brainorth AI. All rights reserved. Built with precision.
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#hero" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#hero" className="hover:text-white transition-colors">Terms of Service</a>
                        <a href="#hero" className="hover:text-white transition-colors">Security & Audit</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
