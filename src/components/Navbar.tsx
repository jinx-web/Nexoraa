import { useEffect, useState } from 'react';
import {
    Menu,
    X,
    ChevronDown,
    Bot,
    Brain,
    Compass,
    MessageSquare,
    FileCode,
    Puzzle,
    Users,
    GraduationCap,
    ArrowUpRight,
    Github,
    type LucideIcon,
} from 'lucide-react';
import { CALENDLY_URL } from '@/config';

type DropdownItem = {
    icon: LucideIcon;
    label: string;
    description: string;
    href: string;
};

type DropdownMenu = {
    label: string;
    items: DropdownItem[];
};

const menus: DropdownMenu[] = [
    {
        label: 'Services',
        items: [
            { icon: Bot, label: 'Autonomous Agents', description: 'Autonomous agent swarms & workflow automation', href: '#services' },
            { icon: Brain, label: 'AI & ML Systems', description: 'Production-ready ML pipelines and fine-tuning', href: '#services' },
            { icon: Compass, label: 'Deep Advisory', description: 'Strategic technical guidance and architecture audits', href: '#services' },
        ],
    },
    {
        label: 'Training',
        items: [
            { icon: MessageSquare, label: 'Prompts & Chains', description: 'Master contextual prompting and multi-turn workflows', href: '#training' },
            { icon: FileCode, label: 'Artifacts & Schema', description: 'Versioned prompts, evaluation benches and state trees', href: '#training' },
            { icon: Puzzle, label: 'Skills & Tools', description: 'Custom agent tools, MCP servers and API synthesis', href: '#training' },
            { icon: Users, label: 'Collaborative AI', description: 'Human-in-the-loop pairing and team acceleration', href: '#training' },
            { icon: Bot, label: 'Autonomous Agents', description: 'State-machine agents with tool use and self-correction', href: '#training' },
            { icon: GraduationCap, label: 'Reskilling', description: 'Transform traditional engineering teams into AI natives', href: '#training' },
        ],
    },
];

const simpleLinks = [
    { label: 'Tools', href: '#tools' },
    { label: 'About', href: '#about' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 20);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-3 pointer-events-none transition-all duration-300">
            {/* 3-Column Centered Nav Bar (Antideploy Architecture) */}
            <div
                className={`pointer-events-auto mx-auto grid grid-cols-2 md:grid-cols-[1fr_auto_1fr] items-center gap-3 px-4 sm:px-6 h-[58px] rounded-full transition-all duration-500 ${
                    scrolled
                        ? 'max-w-6xl bg-[#faf7f2]/88 backdrop-blur-xl border border-[rgba(28,20,14,0.08)] shadow-[0_1px_2px_rgba(20,17,15,0.05),0_14px_34px_-16px_rgba(20,17,15,0.18)]'
                        : 'max-w-7xl bg-transparent border border-transparent'
                }`}
                onMouseLeave={() => setOpenDropdown(null)}
            >
                {/* Column 1: Brand */}
                <div className="flex items-center justify-start">
                    <a href="#top" className="flex items-center gap-2.5 group text-decoration-none">
                        <div className="w-8 h-8 rounded-lg bg-[#14110f] flex items-center justify-center border border-[#14110f] shadow-sm group-hover:rotate-[-3deg] transition-transform duration-300">
                            <span className="font-serif text-[#faf7f2] text-[18px] italic leading-none font-medium">B</span>
                        </div>
                        <span className="text-[16px] font-bold tracking-tight text-[#14110f]">
                            Brainorth<span className="font-serif italic font-normal text-[#e85d2f]">.ai</span>
                        </span>
                    </a>
                </div>

                {/* Column 2: Centered Links */}
                <nav className="hidden md:flex items-center justify-center gap-1.5" aria-label="Main Navigation">
                    {menus.map((menu) => (
                        <div
                            key={menu.label}
                            className="relative"
                            onMouseEnter={() => setOpenDropdown(menu.label)}
                        >
                            <button
                                type="button"
                                onClick={() => setOpenDropdown(openDropdown === menu.label ? null : menu.label)}
                                className={`flex items-center gap-1 px-3.5 py-1.5 text-[13.5px] font-medium tracking-tight rounded-full transition-all duration-200 ${
                                    openDropdown === menu.label
                                        ? 'bg-[#14110f] text-[#faf7f2]'
                                        : 'text-[#3e3730] hover:text-[#14110f] hover:bg-[#14110f]/5'
                                }`}
                            >
                                {menu.label}
                                <ChevronDown
                                    size={12}
                                    className={`transition-transform duration-200 ${openDropdown === menu.label ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {/* Dropdown Menu Panel */}
                            {openDropdown === menu.label && (
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2.5 w-[360px] animate-fade-in">
                                    <div className="bg-white/95 backdrop-blur-xl border border-[rgba(28,20,14,0.08)] shadow-[0_16px_40px_-12px_rgba(20,17,15,0.18)] rounded-2xl p-2.5 space-y-1">
                                        {menu.items.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                onClick={() => setOpenDropdown(null)}
                                                className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#faf7f2] transition-colors group"
                                            >
                                                <div className="w-8 h-8 rounded-lg bg-[#faf7f2] border border-[rgba(28,20,14,0.06)] flex items-center justify-center text-[#70665d] group-hover:text-[#e85d2f] group-hover:bg-[#e85d2f]/10 transition-colors flex-shrink-0">
                                                    <item.icon size={16} />
                                                </div>
                                                <div>
                                                    <div className="text-[13px] font-semibold text-[#14110f] group-hover:text-[#e85d2f] transition-colors">
                                                        {item.label}
                                                    </div>
                                                    <div className="text-[11.5px] text-[#70665d] leading-snug mt-0.5">
                                                        {item.description}
                                                    </div>
                                                </div>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}

                    {simpleLinks.map((link) => (
                        <a
                            key={link.label}
                            href={link.href}
                            className="px-3.5 py-1.5 text-[13.5px] font-medium tracking-tight text-[#3e3730] hover:text-[#14110f] hover:bg-[#14110f]/5 rounded-full transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Column 3: Action Buttons (Antideploy Cluster) */}
                <div className="flex items-center justify-end gap-3">
                    <a
                        href="https://github.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="hidden lg:flex w-8 h-8 rounded-lg items-center justify-center text-[#70665d] hover:text-[#14110f] hover:bg-[#14110f]/5 transition-colors"
                    >
                        <Github size={17} />
                    </a>

                    <a
                        href="#contact"
                        className="hidden sm:inline-flex text-[13px] font-medium text-[#3e3730] hover:text-[#14110f] px-2 py-1 transition-colors"
                    >
                        Contact
                    </a>

                    <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn--primary btn--sm !text-[12.5px]"
                    >
                        <span>Start a project</span>
                        <ArrowUpRight size={13} strokeWidth={2.5} />
                    </a>

                    {/* Mobile Hamburger Button */}
                    <button
                        type="button"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label="Toggle navigation menu"
                        className="md:hidden w-9 h-9 rounded-full bg-white border border-[rgba(28,20,14,0.1)] flex items-center justify-center text-[#14110f]"
                    >
                        {menuOpen ? <X size={18} /> : <Menu size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            {menuOpen && (
                <div className="md:hidden pointer-events-auto mt-2 max-w-lg mx-auto bg-white/95 backdrop-blur-2xl border border-[rgba(28,20,14,0.1)] rounded-2xl p-5 shadow-2xl animate-fade-in">
                    <div className="space-y-4">
                        {menus.map((menu) => (
                            <div key={menu.label}>
                                <div className="text-[11px] font-mono uppercase tracking-wider text-[#70665d] mb-2 font-semibold">
                                    {menu.label}
                                </div>
                                <div className="space-y-1.5 pl-2">
                                    {menu.items.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setMenuOpen(false)}
                                            className="flex items-center gap-2.5 py-1.5 text-[13.5px] font-medium text-[#14110f]"
                                        >
                                            <item.icon size={15} className="text-[#e85d2f]" />
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}
                        <div className="pt-2 border-t border-[rgba(28,20,14,0.06)] flex flex-col gap-2">
                            {simpleLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    onClick={() => setMenuOpen(false)}
                                    className="py-1 text-[13.5px] font-medium text-[#14110f]"
                                >
                                    {link.label}
                                </a>
                            ))}
                            <a
                                href={CALENDLY_URL}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--primary justify-center mt-2"
                            >
                                Start a project <ArrowUpRight size={15} />
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
