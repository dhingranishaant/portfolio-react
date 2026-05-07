import React, { useEffect, useState } from "react";
import { ArrowRight, Activity, MapPin, Mail } from "lucide-react";
import { profile } from "../data/mock";
import Magnetic from "./Magnetic";

const Hero = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const tick = () => {
            const d = new Date();
            setTime(d.toLocaleTimeString("en-US", { hour12: false, hour: "2-digit", minute: "2-digit", second: "2-digit" }));
        };
        tick();
        const id = setInterval(tick, 1000);
        return () => clearInterval(id);
    }, []);

    const scrollTo = (id) => () => {
        const el = document.getElementById(id);
        if (el) el.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section id="top" className="relative overflow-hidden">
            <div className="absolute inset-0 dot-grid opacity-70" />
            <div className="absolute inset-0 hero-radial" />
            <div className="absolute inset-x-0 top-0 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(20,184,166,0.5), transparent)" }} />

            <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 md:pt-32 md:pb-36">
                <div className="flex flex-wrap items-center gap-3 mono text-[11px] text-zinc-500">
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-[#1f1f23] bg-[#111113]">
                        <span className="relative flex w-2 h-2">
                            <span className="absolute inset-0 rounded-full bg-teal-400 pulse-dot" />
                            <span className="absolute inset-0 rounded-full pulse-ring" />
                        </span>
                        <span className="text-teal-300">systems operational</span>
                    </span>
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-[#1f1f23] bg-[#111113]">
                        <MapPin className="w-3 h-3" />
                        {profile.location}
                    </span>
                    <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full border border-[#1f1f23] bg-[#111113]">
                        <span className="text-zinc-600">est</span>{time}
                    </span>
                </div>

                <div className="mt-10 mono text-sm text-zinc-500"><span className="text-teal-400">$</span> whoami</div>

                <h1 className="heading-font mt-3 text-5xl md:text-7xl font-semibold text-zinc-50 leading-[1.02] tracking-tight">
                    {profile.name}<span className="text-teal-400 cursor-blink">_</span>
                </h1>

                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 mono text-sm">
                    <span className="text-zinc-500">role:</span>
                    <span className="text-zinc-700">•</span>
                    <span className="text-zinc-100">{profile.role}</span>
                    {/* <span className="text-zinc-700">•</span>
                    <span className="text-zinc-500">status:</span>
                    <span className="text-teal-300">{profile.metrics[1].value}</span> */}
                </div>

                <p className="mt-8 max-w-2xl text-lg text-zinc-400 leading-relaxed">{profile.shortBio}</p>

                <div className="mt-10 flex flex-wrap items-center gap-3">
                    <Magnetic>
                        <button onClick={scrollTo("projects")} className="group inline-flex items-center gap-2 px-5 py-3 rounded-md bg-teal-500 text-zinc-950 font-medium hover:bg-teal-400 teal-glow transition-colors">
                            view projects <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                        </button>
                    </Magnetic>
                    <button onClick={scrollTo("contact")} className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-transparent text-zinc-200 border border-[#2a2a31] hover:border-teal-500/60 hover:text-teal-300 transition-colors">
                        <Mail className="w-4 h-4" /> get in touch
                    </button>
                    <span className="hidden md:inline-flex items-center gap-2 mono text-[11px] text-zinc-500 pl-3">
                        or press <span className="kbd">4</span> for projects
                    </span>
                </div>

                <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[#1f1f23] border border-[#1f1f23] rounded-lg overflow-hidden">
                    {[
                        { l: "focus", v: "reliability engineering" },
                        { l: "work", v: "monitoring · alerting · automation" },
                        { l: "style", v: "pragmatic · systems-first" },
                        { l: "reach", v: "email / LinkedIn" },
                    ].map((s) => (
                        <div key={s.l} className="bg-[#0d0d0f] px-5 py-4">
                            <div className="mono text-[11px] uppercase tracking-wider text-zinc-500">{s.l}</div>
                            <div className="mt-1 heading-font text-xl text-zinc-100">{s.v}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Hero;