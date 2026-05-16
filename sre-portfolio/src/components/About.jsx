import React from "react";
import { profile, stack } from "../data/mock";
import { Cpu } from "lucide-react";
import { Link } from "react-router-dom";

const SectionHeader = ({ index, title, caption, theme }) => (
    <div className="mb-10 reveal is-visible">
        <div className="mono text-xs text-zinc-500 mb-2">
            <span className="text-teal-400">$</span> cat sections/{title.toLowerCase()}.md
        </div>
        <div className="flex items-end justify-between gap-6">
            <h2 className="heading-font text-3xl md:text-4xl font-semibold text-zinc-50">
                <span className="text-zinc-600 mono text-2xl mr-3">0{index}.</span>{title}
            </h2>
            {caption ? <span className="hidden md:block mono text-xs text-zinc-500">{caption}</span> : null}
        </div>
        <div className="mt-4 h-px w-full" style={{ background: theme === "dark" ? "linear-gradient(90deg, transparent, rgba(20,184,166,0.5), transparent)" : "linear-gradient(90deg, transparent, rgba(249,115,22,0.5), transparent)" }} />
    </div>
);

const About = ({theme}) => {
    return (
        <section id="about" className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
            <SectionHeader index={1} title="About" caption="// the human behind the systems" theme={theme}/>
            <div className="grid md:grid-cols-3 gap-10">
                <div className="md:col-span-2 reveal">
                    <p className="text-zinc-300 text-lg leading-relaxed">{profile.longBio}</p>
                    <p className="mt-5 text-zinc-400 leading-relaxed">
                        I like building systems that are <span className="text-teal-300">easy to operate</span> and <span className="text-teal-300">hard to break</span>. A lot of my work is around improving monitoring, cleaning up alerts, and automating the boring parts of running services.
                        When things do break, I care more about getting to a clear <span className="text-teal-300">root cause</span> than adding process around it.
                    </p>
                    <p className="mt-4 mono text-sm">

                    {/* enable this when pics are ready */}
                    {/* <Link
                        to="/afk"
                        className={`border-b border-dashed transition-colors className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-transparent text-zinc-200 border border-[#2a2a31] hover:border-teal-500/60 hover:text-teal-300 transition-colors"${
                            theme === "dark"
                                ? "text-teal-400/80 hover:text-teal-400 border-teal-400/30 hover:border-teal-400"
                                : "text-orange-500 hover:text-orange-600 border-orange-400/40 hover:border-orange-500"
                        }`}
                    >
                        $ cd ~/afk →
                    </Link>
                    <span className={`ml-2 ${theme === "dark" ? "text-white/40" : "text-black/40"}`}>who I am outside work</span> */}
                    </p>
                    <div className="mt-8 grid sm:grid-cols-2 gap-3 mono text-sm">
                        {[
                            { k: "focus", v: "reliability · observability · systems" },
                            { k: "approach", v: "keep it simple · data-driven · root cause fixes" },
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