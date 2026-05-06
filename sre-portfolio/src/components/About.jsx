import React from "react";
import { profile, stack } from "../data/mock";
import { Cpu } from "lucide-react";

const SectionHeader = ({ index, title, caption }) => (
    <div className="mb-10 reveal">
        <div className="mono text-xs text-zinc-500 mb-2">
            <span className="text-teal-400">$</span> cat sections/{title.toLowerCase()}.md
        </div>
        <div className="flex items-end justify-between gap-6">
            <h2 className="heading-font text-3xl md:text-4xl font-semibold text-zinc-50">
                <span className="text-zinc-600 mono text-2xl mr-3">0{index}.</span>{title}
            </h2>
            {caption ? <span className="hidden md:block mono text-xs text-zinc-500">{caption}</span> : null}
        </div>
        <div className="mt-4 h-px w-full" style={{ background: "linear-gradient(90deg, rgba(20,184,166,0.4), rgba(31,31,35,0.6) 30%, transparent)" }} />
    </div>
);

const About = () => {
    return (
        <section id="about" className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
            <SectionHeader index={1} title="About" caption="// the human behind the pager" />
            <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 reveal">
                    <p className="text-zinc-300 text-lg leading-relaxed">{profile.longBio}</p>
                    <p className="mt-5 text-zinc-400 leading-relaxed">
                        I care about <span className="text-teal-300">paved roads</span>,
                        <span className="text-teal-300"> SLOs that mean something</span>, and the kind of automation that quietly removes whole categories of failure.
                        When I&apos;m not in a Grafana tab, I&apos;m probably reading a postmortem, sketching a runbook, or arguing about the right number of nines.
                    </p>
                    <div className="mt-8 grid sm:grid-cols-2 gap-3 mono text-sm">
                        {[
                            { k: "focus", v: "reliability · observability · platform" },
                            { k: "approach", v: "blameless · data-driven · boring tech" },
                            { k: "ops", v: "on-call · incident command · postmortems" },
                            { k: "writing", v: "runbooks · RFCs · design docs" },
                        ].map((item) => (
                            <div key={item.k} className="flex items-start gap-3 p-3 rounded-md bg-[#0d0d0f] border border-[#1f1f23]">
                                <span className="text-teal-400">»</span>
                                <div>
                                    <div className="text-zinc-500">{item.k}</div>
                                    <div className="text-zinc-200">{item.v}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="reveal">
                    <div className="p-5 rounded-lg bg-[#0d0d0f] border border-[#1f1f23]">
                        <div className="flex items-center gap-2 mono text-xs text-zinc-500">
                            <Cpu className="w-3.5 h-3.5 text-teal-400" /> stack.json
                        </div>
                        <div className="mt-4 space-y-5">
                            {stack.map((g) => (
                                <div key={g.group}>
                                    <div className="mono text-[11px] uppercase tracking-wider text-zinc-500 mb-2">{g.group}</div>
                                    <div className="flex flex-wrap gap-1.5">
                                        {g.items.map((it) => (
                                            <span key={it} className="mono text-[11px] px-2 py-1 rounded border border-[#1f1f23] bg-[#111113] text-zinc-300 hover:border-teal-500/50 hover:text-teal-300 transition-colors">
                                                {it}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
export { SectionHeader };