import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Filter, Hash } from "lucide-react";
import { afkTiles, afkTags } from "../data/afk";
import AfkLightbox from "../components/AfkLightbox";
import useTheme from "../hooks/useTheme";
import { Sun, Moon } from "lucide-react";

const Afk = () => {
  const [filter, setFilter] = useState("all");
  const [openIndex, setOpenIndex] = useState(null);
  const [lastViewedId, setLastViewedId] = useState(null);
  const { theme, toggle } = useTheme();

  const gridRef = useRef(null);

  const counts = useMemo(() => {
    const map = { all: afkTiles.length };

    afkTiles.forEach((t) => {
      map[t.tag] = (map[t.tag] || 0) + 1;
    });

    return map;
  }, []);

  const visible = useMemo(() => {
    return filter === "all"
      ? afkTiles
      : afkTiles.filter((t) => t.tag === filter);
  }, [filter]);

  useEffect(() => {
    if (openIndex !== null && openIndex >= visible.length) {
      setOpenIndex(null);
    }
  }, [visible, openIndex]);

  useEffect(() => {
    const onDown = (e) => {
      if (!gridRef.current) return;

      const wrapper = gridRef.current.closest("section");

      if (!wrapper || !wrapper.contains(e.target)) return;

      if (e.target.closest("[data-afk-tile]")) return;

      setLastViewedId(null);
    };

    document.addEventListener("mousedown", onDown);

    return () => document.removeEventListener("mousedown", onDown);
  }, []);

  const openAt = (idx) => setOpenIndex(idx);

  const close = () => {
    if (openIndex !== null && visible[openIndex]) {
      setLastViewedId(visible[openIndex].id);
    }

    setOpenIndex(null);
  };

  const prev = () => {
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + visible.length) % visible.length
    );
  };

  const next = () => {
    setOpenIndex((i) => (i === null ? null : (i + 1) % visible.length));
  };

  return (
    <div className="relative min-h-screen bg-[#0a0a0b] text-zinc-200">
      <header className="sticky top-0 z-30 bg-[#0a0a0b]/80 backdrop-blur-md border-b border-[#1f1f23]">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link
            to="/"
            className="inline-flex items-center gap-2 mono text-sm text-zinc-300 hover:text-teal-300 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>
              <span className="text-teal-400">~/</span>
              back to portfolio
            </span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="mono text-[11px] text-zinc-500">
              <span className="text-teal-400">$</span> pwd ~/afk
            </span>

            <button
              onClick={toggle}
              aria-label={
                theme === "dark"
                  ? "Switch to light theme"
                  : "Switch to dark theme"
              }
              className="w-9 h-9 rounded-md border border-[#1f1f23] bg-[#111113] flex items-center justify-center text-zinc-400 hover:text-teal-300 hover:border-teal-500/60 transition-colors"
            >
              {theme === "dark" ? (
                <Moon className="w-4 h-4" />
              ) : (
                <Sun className="w-4 h-4" />
              )}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-14 md:py-20">
        <div className="mb-10">
          <div className="mono text-xs text-zinc-500 mb-2">
            <span className="text-teal-400">$</span> ls -la ~/afk
          </div>

          <h1 className="heading-font text-4xl md:text-6xl font-semibold text-zinc-50 leading-[1.05] tracking-tight">
            away from keyboard
            <span className="text-teal-400 cursor-blink">_</span>
          </h1>

          <p className="mt-4 max-w-2xl text-zinc-400 leading-relaxed">
            A small, mostly-honest collection of things I do when I’m not paging
            on someone’s production. Click a tile, arrow through, escape to
            leave.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap items-center gap-2">
          <span className="inline-flex items-center gap-1.5 mono text-[11px] text-zinc-500 mr-1">
            <Filter className="w-3.5 h-3.5 text-teal-400" />
            <span className="text-teal-400">$</span>
            <span>filter --tag</span>
          </span>

          {afkTags.map((t) => {
            const isActive = filter === t;
            const count = counts[t] || 0;

            return (
              <button
                key={t}
                type="button"
                onClick={() => setFilter(t)}
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full border mono text-[11px] transition-colors ${
                  isActive
                    ? "border-teal-500/60 bg-teal-500/10 text-teal-300"
                    : "border-[#1f1f23] bg-[#111113] text-zinc-400 hover:text-zinc-200 hover:border-zinc-700"
                }`}
                aria-pressed={isActive}
              >
                {t === "all" ? "all" : `#${t}`}

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

        {visible.length === 0 ? (
          <div className="p-10 rounded-lg border border-dashed border-[#1f1f23] bg-[#0d0d0f] text-center mono text-sm text-zinc-500">
            <span className="text-teal-400">$</span> no entries match{" "}
            <span className="text-zinc-300">--tag={filter}</span>
          </div>
        ) : (
          <div
            ref={gridRef}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {visible.map((tile, idx) => {
              const isLastViewed = lastViewedId === tile.id;

              return (
                <button
                  key={tile.id}
                  type="button"
                  data-afk-tile
                  onClick={() => openAt(idx)}
                  style={{
                    animationDelay: `${idx * 40}ms`,
                  }}
                  className={`afk-tile group relative aspect-square overflow-hidden rounded-lg border bg-[#0d0d0f] transition-all duration-300 ${
                    isLastViewed
                      ? theme === "dark"
                        ? "border-teal-500/70 ring-2 ring-teal-500/30 last-viewed"
                        : "border-orange-500/70 ring-2 ring-orange-500/30 last-viewed"
                      : theme === "dark"
                        ? "border-[#1f1f23] hover:border-teal-700/40"
                        : "border-[#d6d3d1] hover:border-orange-700/60"
                  }`}
                >
                  <img
                    src={tile.image}
                    alt={tile.title}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                  />

                  <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/85 via-black/35 to-transparent pointer-events-none" />

                  <div className="absolute inset-x-0 bottom-0 p-3 flex items-end justify-between gap-2">
                    <span className="mono text-[11px] text-teal-300 inline-flex items-center gap-1">
                      <Hash className="w-3 h-3" />
                      {tile.tag}
                    </span>

                    <span className="mono text-[10px] text-zinc-300/80 opacity-0 group-hover:opacity-100 transition-opacity">
                      open ↗
                    </span>
                  </div>

                  <div className="absolute inset-x-0 top-0 p-3 flex items-start">
                    <span className="mono text-[10px] text-zinc-300/80 line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity">
                      {tile.title}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-1 mono text-[11px] text-zinc-500">
          <span className="inline-flex items-center gap-1.5">
            <span className="kbd">click</span> open tile
          </span>

          <span className="inline-flex items-center gap-1.5">
            <span className="kbd">←</span>
            <span className="kbd">→</span>
            navigate
          </span>

          <span className="inline-flex items-center gap-1.5">
            <span className="kbd">esc</span>
            close
          </span>
        </div>
      </main>

      {openIndex !== null && (
        <AfkLightbox
          tiles={visible}
          index={openIndex}
          onClose={close}
          onPrev={prev}
          onNext={next}
        />
      )}
    </div>
  );
};

export default Afk;
