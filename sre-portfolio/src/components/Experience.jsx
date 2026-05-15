import React, { useEffect, useRef, useState } from "react";
import { SectionHeader } from "./About";
import { experience } from "../data/mock";
import { Briefcase, MapPin } from "lucide-react";

const Experience = ({ theme }) => {
  const timelineRef = useRef(null);
  const dotRefs = useRef([]);
  const [fillHeight, setFillHeight] = useState(0);
  const [activeDots, setActiveDots] = useState(new Set());

  // theme-aware colors
  const isDark = theme === "dark";
  const accent = isDark ? "#14b8a6" : "#f97316";        // teal vs orange
  const accentSoft = isDark ? "#2dd4bf" : "#fb923c";
  const glowRgb = isDark ? "20, 184, 166" : "249, 115, 22";

  useEffect(() => {
    const onScroll = () => {
      const tl = timelineRef.current;
      if (!tl) return;
      const rect = tl.getBoundingClientRect();
      const triggerY = window.innerHeight * 0.55;
      const filled = Math.max(0, Math.min(rect.height, triggerY - rect.top));
      setFillHeight(filled);

      const newActive = new Set();
      dotRefs.current.forEach((dot, i) => {
        if (!dot) return;
        const d = dot.getBoundingClientRect();
        if (d.top + d.height / 2 <= triggerY) newActive.add(i);
      });
      setActiveDots(newActive);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="experience" className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
      <SectionHeader index={3} title="Experience" caption="// latest work first" theme={theme} />

      <div ref={timelineRef} className="relative">
        {/* faint base track */}
        <div
          aria-hidden
          className="absolute left-4 md:left-5 top-2 bottom-2 w-px"
          style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.08)" }}
        />
        {/* animated fill */}
        <div
          aria-hidden
          className="absolute left-4 md:left-5 top-2 w-px transition-[height] duration-150 ease-out"
          style={{
            height: `${Math.max(0, fillHeight - 8)}px`,
            background: `linear-gradient(to bottom, ${accent}, ${accentSoft})`,
            boxShadow: `0 0 8px rgba(${glowRgb}, 0.6)`
          }}
        />

        <ol className="space-y-8">
          {experience.map((exp, idx) => {
            const lit = activeDots.has(idx);
            return (
              <li
                key={exp.company}
                className="relative pl-12 md:pl-14 reveal is-visible"
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <span
                  ref={(el) => (dotRefs.current[idx] = el)}
                  className="absolute left-2 md:left-3.5 top-2 w-4 h-4 rounded-full flex items-center justify-center transition-all duration-500"
                  style={{
                    background: isDark ? "#0a0a0b" : "#ffffff",
                    borderWidth: "1px",
                    borderStyle: "solid",
                    borderColor: lit ? accent : `rgba(${glowRgb}, 0.4)`,
                    boxShadow: lit
                      ? `0 0 0 4px rgba(${glowRgb}, 0.18), 0 0 12px rgba(${glowRgb}, 0.75)`
                      : "none",
                    transform: lit ? "scale(1.15)" : "scale(1)"
                  }}
                >
                  <span
                    className="rounded-full transition-all duration-500"
                    style={{
                      width: lit ? 8 : 6,
                      height: lit ? 8 : 6,
                      background: accent,
                      opacity: lit ? 1 : 0.55
                    }}
                  />
                </span>

                <article className="p-5 md:p-6 rounded-lg bg-[#0d0d0f] border border-[#1f1f23] hover:border-teal-500/40 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <h3 className="heading-font text-xl text-zinc-100 flex items-center gap-2">
                        <Briefcase className="w-4 h-4 text-teal-400" />
                        {exp.role}
                      </h3>
                      <div className="mono text-sm text-teal-300 mt-1">@ {exp.company}</div>
                    </div>
                    <div className="text-right">
                      <div className="mono text-[11px] text-zinc-400">{exp.period}</div>
                      <div className="mono text-[11px] text-zinc-500 inline-flex items-center gap-1 mt-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
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
                      <span
                        key={t}
                        className="mono text-[11px] px-2 py-0.5 rounded border border-[#1f1f23] bg-[#111113] text-zinc-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

export default Experience;