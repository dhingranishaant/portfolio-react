import React from "react";
import { SectionHeader } from "./About";
import { experience } from "../data/mock";
import { Briefcase, MapPin } from "lucide-react";

const Experience = ({theme}) => {
    return (
        <section id="experience" className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
            <SectionHeader index={3} title="Experience" caption="// latest work first" theme={theme}/>
            <div className="relative">
                <div aria-hidden className="absolute left-4 md:left-5 top-2 bottom-2 w-px"
                     style={{ background:
                        theme === "dark"
                          ? "linear-gradient(90deg, transparent, rgba(20,184,166,0.5), transparent)"
                          : "linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)"}} />
                <ol className="space-y-8">
                    {experience.map((exp, idx) => (
                        <li key={exp.company} className="relative pl-12 md:pl-14 reveal" style={{ transitionDelay: `${idx * 80}ms` }}>
                            <span className="absolute left-2.5 md:left-3.5 top-2 w-4 h-4 rounded-full bg-[#0a0a0b] border border-teal-500/60 flex items-center justify-center">
                                <span className="w-1.5 h-1.5 rounded-full bg-teal-400" />
                            </span>
                            <article className="p-5 md:p-6 rounded-lg bg-[#0d0d0f] border border-[#1f1f23] hover:border-teal-500/40 transition-colors">
                                <div className="flex flex-wrap items-start justify-between gap-3">
                                    <div>
                                        <h3 className="heading-font text-xl text-zinc-100 flex items-center gap-2">
                                            <Briefcase className="w-4 h-4 text-teal-400" />{exp.role}
                                        </h3>
                                        <div className="mono text-sm text-teal-300 mt-1">@ {exp.company}</div>
                                    </div>
                                    <div className="text-right">
                                        <div className="mono text-[11px] text-zinc-400">{exp.period}</div>
                                        <div className="mono text-[11px] text-zinc-500 inline-flex items-center gap-1 mt-1">
                                            <MapPin className="w-3 h-3" />{exp.location}
                                        </div>
                                    </div>
                                </div>
                                <ul className="mt-4 space-y-2">
                                    {exp.bullets.map((b, i) => (
                                        <li key={i} className="flex gap-3 text-sm text-zinc-400 leading-relaxed">
                                            <span className="mono text-teal-500 mt-0.5">›</span>
                                            <span>{b}</span>
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 flex flex-wrap gap-1.5">
                                    {exp.tags.map((t) => (
                                        <span key={t} className="mono text-[11px] px-2 py-0.5 rounded border border-[#1f1f23] bg-[#111113] text-zinc-400">{t}</span>
                                    ))}
                                </div>
                            </article>
                        </li>
                    ))}
                </ol>
            </div>
        </section>
    );
};

export default Experience;