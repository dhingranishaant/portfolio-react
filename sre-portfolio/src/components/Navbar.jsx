import React, { useEffect, useState } from "react";
import { Terminal, Command } from "lucide-react";
import { navItems, profile } from "../data/mock";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("about");

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 8);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const ids = navItems.map((n) => n.id);
        const computeActive = () => {
            const anchorY = window.scrollY + 120;
            let current = ids[0];
            for (const id of ids) {
                const el = document.getElementById(id);
                if (!el) continue;
                if (el.offsetTop <= anchorY) current = id;
                else break;
            }
            const nearBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
            if (nearBottom) current = ids[ids.length - 1];
            setActive(current);
        };
        computeActive();
        window.addEventListener("scroll", computeActive, { passive: true });
        window.addEventListener("resize", computeActive);
        return () => {
            window.removeEventListener("scroll", computeActive);
            window.removeEventListener("resize", computeActive);
        };
    }, []);

    const handleClick = (e, id) => {
        e.preventDefault();
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    return (
        <header className={`sticky top-0 z-40 transition-colors duration-300 ${scrolled ? "bg-[#0a0a0b]/80 backdrop-blur-md border-b border-[#1f1f23]" : "bg-transparent border-b border-transparent"}`}>
            <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
                <a href="#top" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="flex items-center gap-2 group">
                    <span className="flex items-center justify-center w-8 h-8 rounded-md bg-[#111113] border border-[#1f1f23] group-hover:border-teal-500/60 transition-colors">
                        <Terminal className="w-4 h-4 text-teal-400" />
                    </span>
                    <span className="mono text-sm text-zinc-300">
                        <span className="text-teal-400">~/</span>{profile.handle}
                    </span>
                </a>

                <nav className="hidden md:flex items-center gap-1">
                    {navItems.map((item) => {
                        const isActive = active === item.id;
                        return (
                            <a key={item.id} href={`#${item.id}`} onClick={(e) => handleClick(e, item.id)}
                               className={`group px-3 py-2 rounded-md text-sm flex items-center gap-2 transition-colors ${isActive ? "text-teal-300" : "text-zinc-400 hover:text-zinc-100"}`}>
                                <span className="mono text-[11px] text-zinc-500 group-hover:text-zinc-300">0{item.key}</span>
                                <span className="link-underline">{item.label}</span>
                            </a>
                        );
                    })}
                </nav>

                <div className="hidden md:flex items-center gap-2 mono text-[11px] text-zinc-500">
                    <span>press</span>
                    <span className="kbd">1</span><span>–</span><span className="kbd">5</span>
                </div>

                <nav className="md:hidden flex items-center gap-3 mono text-xs">
                    {navItems.map((item) => (
                        <a key={item.id} href={`#${item.id}`} onClick={(e) => handleClick(e, item.id)}
                           className={`${active === item.id ? "text-teal-300" : "text-zinc-400"}`} aria-label={item.label}>
                            {item.key}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Navbar;