import React from "react";
import { SectionHeader } from "./About";
import { projects } from "../data/mock";
import { ExternalLink, GitBranch } from "lucide-react";

const statusColor = (status) => {
    switch (status) {
        case "personal": return "text-teal-300 border-teal-500/40 bg-teal-500/5";
        case "professional": return "text-sky-300 border-sky-500/30 bg-sky-500/5";
        case "experimental": return "text-amber-300 border-amber-500/30 bg-amber-500/5";
        case "academic": return "text-zinc-300 border-zinc-600/40 bg-zinc-700/10";
        default: return "text-zinc-300 border-zinc-700 bg-zinc-800/40";
    }
};

const Projects = () => {
    return (
        <section id="projects" className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
            <SectionHeader index={4} title="Projects" caption="// shipped & shipping" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {projects.map((p, idx) => (
                    <a key={p.title} href={p.link}
                       className="project-card reveal group relative p-5 rounded-lg bg-[#0d0d0f] border border-[#1f1f23] flex flex-col"
                       style={{ transitionDelay: `${idx * 60}ms` }}>
                        <div className="flex items-start justify-between gap-3">
                            <div className="flex items-center gap-2">
                                <GitBranch className="w-4 h-4 text-teal-400" />
                                <span className="mono text-sm text-zinc-100">{p.title}</span>
                            </div>
                            <span className={`mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${statusColor(p.status)}`}>
                                {p.status}
                            </span>
                        </div>
                        <p className="mt-3 text-sm text-zinc-400 leading-relaxed flex-1">{p.summary}</p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                            {p.stack.map((s) => (
                                <span key={s} className="mono text-[11px] px-2 py-0.5 rounded border border-[#1f1f23] bg-[#111113] text-zinc-400 group-hover:text-zinc-300">{s}</span>
                            ))}
                        </div>
                        <div className="mt-5 pt-4 border-t border-[#1f1f23] flex items-center justify-between">
                            <span className="inline-flex items-center gap-1.5 mono text-[11px] text-zinc-400 group-hover:text-teal-300 transition-colors">
                                view <ExternalLink className="w-3.5 h-3.5" />
                            </span>
                        </div>
                    </a>
                ))}
            </div>
        </section>
    );
};

export default Projects;