import React from "react";
import { SectionHeader } from "./About";
import { education } from "../data/mock";
import { GraduationCap, Award } from "lucide-react";

const Education = () => {
    return (
        <section id="education" className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
            <SectionHeader index={2} title="Education" caption="// formal & continuous" />
            <div className="grid md:grid-cols-2 gap-5">
                {education.map((ed, idx) => (
                    <div key={ed.school}
                         className="reveal p-6 rounded-lg bg-[#0d0d0f] border border-[#1f1f23] hover:border-teal-500/40 transition-colors"
                         style={{ transitionDelay: `${idx * 60}ms` }}>
                        <div className="flex items-start gap-4">
                            <span className="flex items-center justify-center w-10 h-10 rounded-md bg-[#111113] border border-[#1f1f23]">
                                {idx === 0 ? <GraduationCap className="w-5 h-5 text-teal-400" /> : <Award className="w-5 h-5 text-teal-400" />}
                            </span>
                            <div className="flex-1">
                                <div className="flex items-start justify-between gap-3">
                                    <h3 className="heading-font text-xl text-zinc-100">{ed.school}</h3>
                                    <span className="mono text-[11px] text-zinc-500 whitespace-nowrap pt-1">{ed.period}</span>
                                </div>
                                <div className="mono text-sm text-teal-300 mt-1">{ed.degree}</div>
                                <p className="mt-3 text-sm text-zinc-400 leading-relaxed">{ed.details}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Education;