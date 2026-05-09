import React, { useMemo, useState } from "react";
import { SectionHeader } from "./About";
import { projects, projectStatuses } from "../data/mock";
import { ExternalLink, GitBranch, Filter } from "lucide-react";

const statusColor = (status) => {
    switch (status) {
        case "personal":
            return "text-teal-300 border-teal-500/40 bg-teal-500/5";
        case "professional":
            return "text-sky-300 border-sky-500/30 bg-sky-500/5";
        case "experimental":
            return "text-amber-300 border-amber-500/30 bg-amber-500/5";
        case "academic":
            return "text-violet-300 border-violet-500/30 bg-violet-500/5";
        default:
            return "text-zinc-300 border-zinc-700 bg-zinc-800/40";
    }
};

const Projects = ({theme}) => {
    const [filter, setFilter] = useState("all");

    const counts = useMemo(() => {
        const map = { all: projects.length };
        projects.forEach((p) => {
            map[p.status] = (map[p.status] || 0) + 1;
        });
        return map;
    }, []);

    const visible = useMemo(
        () => (filter === "all" ? projects : projects.filter((p) => p.status === filter)),
        [filter]
    );

    return (
        <section
            id="projects"
            className="relative max-w-6xl mx-auto px-6 py-20 md:py-28"
        >
            <SectionHeader index={4} title="Projects" caption="// spare-time builds" theme={theme}/>

            {/* Filter chips */}
            <div className="mb-8 flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 mono text-[11px] text-zinc-500 mr-1">
                    <Filter className="w-3.5 h-3.5 text-teal-400" />
                    <span className="text-teal-400">$</span>
                    <span>filter --status</span>
                </span>
                {projectStatuses.map((s) => {
                    const isActive = filter === s;
                    const count = counts[s] || 0;
                    return (
                        <button
                            key={s}
                            type="button"
                            onClick={() => setFilter(s)}
                            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border mono text-[11px] transition-colors ${
                                isActive
                                    ? "border-teal-500/60 bg-teal-500/10 text-teal-300"
                                    : "border-[#1f1f23] bg-[#111113] text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                            }`}
                            aria-pressed={isActive}
                        >
                            <span>{s}</span>
                            <span
                                className={`tabular-nums ${
                                    isActive ? "text-teal-400" : "text-zinc-600"
                                }`}
                            >
                                {count}
                            </span>
                        </button>
                    );
                })}
            </div>

            {/* Empty state */}
            {visible.length === 0 ? (
                <div className="p-10 rounded-lg border border-dashed border-[#1f1f23] bg-[#0d0d0f] text-center mono text-sm text-zinc-500">
                    <span className="text-teal-400">$</span> no projects match{" "}
                    <span className="text-zinc-300">--status={filter}</span>
                </div>
            ) : (
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {visible.map((p, idx) => (
                        <a
                            key={p.title}
                            href={p.link}
                            className="project-card group relative p-5 rounded-lg bg-[#0d0d0f] border border-[#1f1f23] flex flex-col"
                            style={{ transitionDelay: `${idx * 60}ms` }}
                        >
                            <div className="flex items-start justify-between gap-3">
                                <div className="flex items-center gap-2">
                                    <GitBranch className="w-4 h-4 text-teal-400" />
                                    <span className="mono text-sm text-zinc-100">
                                        {p.title}
                                    </span>
                                </div>
                                <span
                                    className={`mono text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full border ${statusColor(
                                        p.status
                                    )}`}
                                >
                                    {p.status}
                                </span>
                            </div>

                            <p className="mt-3 text-sm text-zinc-400 leading-relaxed flex-1">
                                {p.summary}
                            </p>

                            <div className="mt-4 flex flex-wrap gap-1.5">
                                {p.stack.map((s) => (
                                    <span
                                        key={s}
                                        className="mono text-[11px] px-2 py-0.5 rounded border border-[#1f1f23] bg-[#111113] text-zinc-400 group-hover:text-zinc-300"
                                    >
                                        {s}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-5 pt-4 border-t border-[#1f1f23] flex items-center justify-between">
                                <span className="inline-flex items-center gap-1.5 mono text-[11px] text-zinc-400 group-hover:text-teal-300 transition-colors">
                                    view
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Projects;