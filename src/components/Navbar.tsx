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
            { icon: Bot, label: 'AI Agents', description: 'Autonomous systems & workflow automation', href: '#services' },
            { icon: Brain, label: 'AI & ML', description: 'Machine learning advisory services', href: '#services' },
            { icon: Compass, label: 'Advisory', description: 'Deep learning advisory & strategy', href: '#services' },
        ],
    },
    {
        label: 'Training',
        items: [
            { icon: MessageSquare, label: 'Prompts', description: 'Prompt engineering mastery', href: '#training' },
            { icon: FileCode, label: 'Artifacts', description: 'Reusable AI artifact management', href: '#training' },
            { icon: Puzzle, label: 'Skills', description: 'Domain-specific AI skill development', href: '#training' },
            { icon: Users, label: 'Collaborative Projects', description: 'Team-based AI workflows', href: '#training' },
            { icon: Bot, label: 'Agents', description: 'Design & deploy autonomous agents', href: '#training' },
            { icon: GraduationCap, label: 'Reskilling', description: 'Workforce AI reskilling programs', href: '#training' },
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
        const onScroll = () => setScrolled(window.scrollY > 18);
        onScroll();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? 'py-2.5 bg-[#fdf8f0]/95 border-b-[2.5px] border-[#12100e]'
                    : 'py-4 bg-[#fdf8f0] border-b border-[#12100e]/10'
            }`}
            onMouseLeave={() => setOpenDropdown(null)}
        >
            <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo — stamp style */}
                <a href="#" className="flex items-center gap-2.5 group">
                    <div className="w-9 h-9 rounded-[10px] bg-[#12100e] flex items-center justify-center border-[1.5px] border-[#12100e] group-hover:rotate-[-4deg] transition-transform duration-300">
                        <span className="font-display text-[#fdf8f0] text-[20px] font-bold leading-none tracking-tighter">N</span>
                    </div>
                    <span className="text-[16px] font-extrabold tracking-[-0.03em] text-[#12100e]">
                        Nexora<span className="font-medium text-[#e85d2f]">.ai</span>
                    </span>
                    <span className="hidden sm:inline-flex ml-1 text-[10px] font-bold tracking-[0.12em] uppercase bg-[#d4a017] text-[#12100e] px-2 py-0.5 rounded-full border border-[#12100e] rotate-[-1deg]">
                        est. 2026
                    </span>
                </a>

                {/* Desktop nav */}
                <div className="hidden md:flex items-center gap-1">
                    {menus.map((menu) => (
                        <div
                            key={menu.label}
                            className="relative"
                            onMouseEnter={() => setOpenDropdown(menu.label)}
                        >
                            <button
                                className={`flex items-center gap-1 px-3.5 py-2 text-[13px] font-bold tracking-[-0.01em] rounded-full border transition-all duration-200 ${
                                    openDropdown === menu.label
                                        ? 'bg-[#12100e] text-[#fdf8f0] border-[#12100e]'
                                        : 'text-[#12100e] border-transparent hover:border-[#12100e] hover:bg-white'
                                }`}
                            >
                                {menu.label}
                                <ChevronDown
                                    size={13}
                                    className={`transition-transform duration-200 ${openDropdown === menu.label ? 'rotate-180' : ''}`}
                                />
                            </button>

                            {openDropdown === menu.label && (
                                <div className="absolute top-full left-0 pt-3 w-[352px] animate-dropdown">
                                    <div className="bg-[#fffcf5] border-[2.5px] border-[#12100e] shadow-[6px_6px_0_0_#12100e] rounded-[18px] p-3">
                                        {menu.items.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                onClick={() => setOpenDropdown(null)}
                                                className="flex items-start gap-3 p-3 rounded-[14px] hover:bg-[#fdf8f0] border border-transparent hover:border-[#12100e]/10 transition-colors group"
                                            >
                                                <div className="w-10 h-10 rounded-xl bg-[#12100e] flex items-center justify-center text-white group-hover:bg-[#e85d2f] transition-colors flex-shrink-0">
                                                    <item.icon size={17} strokeWidth={1.7} />
                                                </div>
                                                <div className="min-w-0">
                                                    <div className="text-[13px] font-bold tracking-[-0.01em] text-[#12100e]">
                                                        {item.label}
                                                    </div>
                                                    <div className="text-[12px] text-[#6e6259] leading-snug mt-0.5">
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
                            key={link.href}
                            href={link.href}
                            className="px-3.5 py-2 text-[13px] font-bold tracking-[-0.01em] text-[#12100e] rounded-full border border-transparent hover:border-[#12100e] hover:bg-white transition-all duration-200"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                <div className="hidden md:flex items-center gap-3">
                    <a
                        href={CALENDLY_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary text-[13px] !py-2.5 !px-5"
                    >
                        Book a Call
                    </a>
                </div>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden w-10 h-10 rounded-full border-[2px] border-[#12100e] bg-white flex items-center justify-center text-[#12100e] shadow-[3px_3px_0_0_#12100e] active:translate-x-[2px] active:translate-y-[2px] active:shadow-[1px_1px_0_0_#12100e] transition-all"
                    aria-label="Toggle menu"
                    aria-expanded={menuOpen}
                >
                    {menuOpen ? <X size={16} strokeWidth={2.5} /> : <Menu size={16} strokeWidth={2.5} />}
                </button>
            </nav>

            {menuOpen && (
                <div className="md:hidden mt-3 mx-4 bg-[#fffcf5] border-[2.5px] border-[#12100e] shadow-[6px_6px_0_0_#12100e] rounded-[18px] p-4 animate-fade-in max-h-[78vh] overflow-y-auto">
                    <div className="flex flex-col gap-1">
                        {menus.map((menu) => (
                            <div key={menu.label} className="mb-1">
                                <div className="text-[11px] font-extrabold tracking-[0.14em] uppercase text-[#6e6259] px-3 py-2 flex items-center gap-2">
                                    <span className="w-6 h-px bg-[#12100e]/20" />
                                    {menu.label}
                                </div>
                                {menu.items.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        onClick={() => setMenuOpen(false)}
                                        className="flex items-center gap-3 px-3 py-2.5 text-[13px] font-semibold text-[#12100e] hover:bg-[#12100e] hover:text-white rounded-xl transition-colors"
                                    >
                                        <item.icon size={15} className="flex-shrink-0" />
                                        {item.label}
                                    </a>
                                ))}
                            </div>
                        ))}
                        {simpleLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={() => setMenuOpen(false)}
                                className="px-3 py-2.5 text-[13px] font-semibold text-[#12100e] hover:bg-[#12100e] hover:text-white rounded-xl transition-colors"
                            >
                                {link.label}
                            </a>
                        ))}
                        <a
                            href={CALENDLY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={() => setMenuOpen(false)}
                            className="mt-3 btn-primary w-full text-center"
                        >
                            Book a Call
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
