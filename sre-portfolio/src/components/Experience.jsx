import React, { useEffect, useState } from "react";
import { SectionHeader } from "./About";
import { experience } from "../data/mock";
import { Briefcase, MapPin } from "lucide-react";

const Experience = ({ theme }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const isDark = theme === "dark";
  const accent = isDark ? "#14b8a6" : "#c2410c";

  useEffect(() => {
    const onScroll = () => {
      const cards = document.querySelectorAll(".experience-card");

      let closestIndex = 0;
      let closestDistance = Infinity;

      const viewportCenter = window.innerHeight / 2;

      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const cardCenter = rect.top + rect.height / 2;

        const distance = Math.abs(cardCenter - viewportCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = Number(card.dataset.index);
        }
      });

      setActiveIndex(closestIndex);
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
    <section
      id="experience"
      className="relative max-w-6xl mx-auto px-6 py-20 md:py-28"
    >
      <SectionHeader
        index={3}
        title="Experience"
        caption="// latest work first"
        theme={theme}
      />

      <ol className="space-y-8">
        {experience.map((exp, idx) => {
          const active = idx === activeIndex;

          return (
            <li
              key={exp.company}
              data-index={idx}
              className="experience-card transition-all duration-500"
            >
              <article
                className="p-5 md:p-6 rounded-lg bg-[#0d0d0f] border transition-all duration-500"
                style={{
                  border: active
                    ? `1px solid ${accent}80`
                    : "1px solid rgba(120,120,120,0.25)",

                  boxShadow: active
                    ? `0 0 0 1px ${accent}33, 0 0 30px -6px ${accent}66`
                    : "none",

                  transform: active ? "translateY(-2px)" : "none",
                  opacity: active ? 1 : 0.5,
                }}
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="heading-font text-xl text-zinc-100 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-teal-400" />
                      {exp.role}
                    </h3>

                    <div className="mono text-sm mt-1" style={{ color: accent }}>
                      @ {exp.company}
                    </div>
                  </div>

                  <div className="text-right">
                    <div className="mono text-[11px] text-zinc-400">
                      {exp.period}
                    </div>

                    <div className="mono text-[11px] text-zinc-500 inline-flex items-center gap-1 mt-1">
                      <MapPin className="w-3 h-3" />
                      {exp.location}
                    </div>
                  </div>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-zinc-400 leading-relaxed"
                    >
                      <span style={{ color: accent }}>›</span>
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
    </section>
  );
};

export default Experience;