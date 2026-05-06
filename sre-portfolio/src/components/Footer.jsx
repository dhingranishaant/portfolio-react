import React from "react";
import { Github, Linkedin, ArrowUp } from "lucide-react";
import { profile } from "../data/mock";

const Footer = () => {
    return (
        <footer className="relative border-t border-[#1f1f23] bg-[#0a0a0b]">
            <div className="absolute inset-x-0 top-0 h-px"
                 style={{ background: "linear-gradient(90deg, transparent, rgba(20,184,166,0.4), transparent)" }} />
            <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="mono text-xs text-zinc-500 leading-6">
                    <div><span className="text-teal-400">$</span> echo "thanks for stopping by"</div>
                    <div className="text-zinc-600">© {new Date().getFullYear()} {profile.name}. built with care, deployed with intent.</div>
                </div>
                <div className="flex items-center gap-4">
                    <a href={profile.socials.github} target="_blank" rel="noreferrer"
                       className="w-9 h-9 rounded-md border border-[#1f1f23] bg-[#111113] flex items-center justify-center text-zinc-400 hover:text-teal-300 hover:border-teal-500/60 transition-colors" aria-label="GitHub">
                        <Github className="w-4 h-4" />
                    </a>
                    <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"
                       className="w-9 h-9 rounded-md border border-[#1f1f23] bg-[#111113] flex items-center justify-center text-zinc-400 hover:text-teal-300 hover:border-teal-500/60 transition-colors" aria-label="LinkedIn">
                        <Linkedin className="w-4 h-4" />
                    </a>
                    <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                            className="inline-flex items-center gap-2 mono text-xs text-zinc-400 hover:text-teal-300 transition-colors">
                        <span className="kbd">g</span><span className="kbd">t</span> back to top <ArrowUp className="w-3.5 h-3.5" />
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;