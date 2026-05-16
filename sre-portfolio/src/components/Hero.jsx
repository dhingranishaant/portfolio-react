import React, { useEffect, useState } from "react";
import { ArrowRight, MapPin, Mail } from "lucide-react";
import { profile } from "../data/mock";

const Hero = ({ theme }) => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const tick = () => {
            const d = new Date();
            setTime(
                d.toLocaleTimeString("en-US", {
                    hour12: false,
                    hour: "2-digit",
                    minute: "2-digit",
                    second: "2-digit",
                })
            );
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
            <div className="absolute inset-0 dot-grid opacity-90" />
            <div className="absolute inset-0 hero-radial" />

            <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 md:pt-32 md:pb-36">

                {/* header chips */}
                <div className="flex flex-wrap gap-3 mono text-[11px] text-zinc-500">
                    <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#1f1f23] bg-[#111113]">
                        <span className="w-2 h-2 rounded-full bg-teal-400" />
                        systems operational
                    </span>

                    <span className="flex items-center gap-2 px-3 py-1 rounded-full border border-[#1f1f23] bg-[#111113]">
                        <MapPin className="w-3 h-3" />
                        {profile.location}
                    </span>

                    <span className="px-3 py-1 rounded-full border border-[#1f1f23] bg-[#111113]">
                        est {time}
                    </span>
                </div>

                {/* title */}
                <div className="mt-10 mono text-sm text-zinc-500">
                    <span className="text-teal-400">$</span> whoami
                </div>

                <h1 className="heading-font mt-3 text-5xl md:text-7xl font-semibold text-zinc-50">
                    {profile.name}
                </h1>

                <p className="mt-8 max-w-2xl text-lg text-zinc-400">
                    {profile.shortBio}
                </p>

                {/* buttons */}
                <div className="mt-10 flex flex-wrap gap-3">
                    <button
                        onClick={scrollTo("projects")}
                        className="px-5 py-3 rounded-md bg-teal-500 text-black font-medium"
                    >
                        view projects <ArrowRight className="inline w-4 h-4 ml-1" />
                    </button>

                    <button
                        onClick={scrollTo("contact")}
                        className="px-5 py-3 rounded-md border border-[#1f1f23] text-zinc-200"
                    >
                        <Mail className="inline w-4 h-4 mr-1" />
                        get in touch
                    </button>
                </div>

                {/* APPLE STYLE CARDS */}
                <div className="mt-16 flex flex-col md:flex-row rounded-xl overflow-hidden border border-[#1f1f23] bg-[#0d0d0f]">

                    {[
                        { l: "focus", v: "reliability engineering" },
                        { l: "work", v: "monitoring · alerting · automation" },
                        { l: "style", v: "pragmatic · systems-first" },
                        { l: "reach", v: "email / LinkedIn" },
                    ].map((s, idx) => (
                        <div
                            key={s.l}
                            className={`flex-1 p-6 ${
                                idx !== 3 ? "border-b md:border-b-0 md:border-r border-[#1f1f23]" : ""
                            }`}
                        >
                            <div className="mono text-xs uppercase text-zinc-500">
                                {s.l}
                            </div>
                            <div className="mt-2 heading-font text-lg text-zinc-100">
                                {s.v}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default Hero;