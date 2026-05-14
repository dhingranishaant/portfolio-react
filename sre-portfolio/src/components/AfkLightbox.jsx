import React, { useEffect, useMemo, useRef } from "react";
import {
    X,
    ChevronLeft,
    ChevronRight,
    ExternalLink,
    MapPin,
    Calendar,
} from "lucide-react";

const AfkLightbox = ({ tiles, index, onClose, onPrev, onNext }) => {
    const tile = tiles[index];
    const dialogRef = useRef(null);

    useEffect(() => {
        const prev = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            document.body.style.overflow = prev;
        };
    }, []);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape") onClose();
            else if (e.key === "ArrowRight") onNext();
            else if (e.key === "ArrowLeft") onPrev();
        };

        window.addEventListener("keydown", onKey);

        return () => window.removeEventListener("keydown", onKey);
    }, [onClose, onNext, onPrev]);

    useEffect(() => {
        const preload = (i) => {
            const t = tiles[i];
            if (!t) return;

            const img = new Image();
            img.src = t.image;
        };

        preload((index + 1) % tiles.length);
        preload((index - 1 + tiles.length) % tiles.length);
    }, [index, tiles]);

    const counter = useMemo(
        () => `${index + 1} / ${tiles.length}`,
        [index, tiles.length]
    );

    if (!tile) return null;

    return (
        <div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-label={tile.title}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-6"
        >
            <button
                aria-label="Close"
                onClick={onClose}
                className="absolute inset-0 bg-black/70 backdrop-blur-md cursor-zoom-out"
            />

            <div className="relative w-full max-w-6xl bg-[#0d0d0f] border border-[#1f1f23] rounded-xl overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 md:px-5 py-3 border-b border-[#1f1f23]">
                    <div className="mono text-[11px] text-zinc-500">
                        <span className="text-teal-400">$</span> open afk/
                        <span className="text-zinc-300">{tile.id}</span>
                    </div>

                    <div className="flex items-center gap-2">
                        <span className="mono text-[11px] text-zinc-500 tabular-nums">
                            {counter}
                        </span>

                        <button
                            onClick={onClose}
                            aria-label="Close"
                            className="w-8 h-8 rounded-md border border-[#1f1f23] bg-[#111113] flex items-center justify-center text-zinc-400 hover:text-teal-300 hover:border-teal-500/60 transition-colors"
                        >
                            <X className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                <div className="grid md:grid-cols-5">
                    <div className="relative md:col-span-3 bg-[#0a0a0b] aspect-[4/3] md:aspect-auto md:min-h-[520px] overflow-hidden">
                        <img
                            key={tile.id}
                            src={tile.image}
                            alt={tile.title}
                            className="absolute inset-0 w-full h-full object-cover lightbox-img"
                            loading="eager"
                        />

                        <button
                            aria-label="Previous"
                            onClick={onPrev}
                            className="hidden md:flex absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#1f1f23] bg-[#0d0d0f]/80 backdrop-blur items-center justify-center text-zinc-200 hover:text-teal-300 hover:border-teal-500/60 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            aria-label="Next"
                            onClick={onNext}
                            className="hidden md:flex absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full border border-[#1f1f23] bg-[#0d0d0f]/80 backdrop-blur items-center justify-center text-zinc-200 hover:text-teal-300 hover:border-teal-500/60 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>

                        <span className="absolute left-4 bottom-4 mono text-xs px-2.5 py-1 rounded-full border border-teal-500/40 bg-[#0d0d0f]/80 backdrop-blur text-teal-300">
                            #{tile.tag}
                        </span>
                    </div>

                    <div className="md:col-span-2 p-6 md:p-8 flex flex-col">
                        <div className="mono text-[11px] text-zinc-500 mb-2">
                            // notes
                        </div>

                        <h2 className="heading-font text-2xl md:text-3xl text-zinc-50 leading-tight">
                            {tile.title}
                        </h2>

                        <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 mono text-[11px] text-zinc-500">
                            {tile.date && (
                                <span className="inline-flex items-center gap-1.5">
                                    <Calendar className="w-3 h-3" />
                                    {tile.date}
                                </span>
                            )}

                            {tile.location && (
                                <span className="inline-flex items-center gap-1.5">
                                    <MapPin className="w-3 h-3" />
                                    {tile.location}
                                </span>
                            )}
                        </div>

                        <p className="mt-5 text-zinc-300 leading-relaxed text-sm md:text-base">
                            {tile.description}
                        </p>

                        <div className="mt-auto pt-6 flex items-center justify-between gap-3">
                            {tile.link && tile.link !== "#" ? (
                                <a
                                    href={tile.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-500 text-zinc-950 font-medium hover:bg-teal-400 teal-glow transition-colors text-sm"
                                >
                                    open link
                                    <ExternalLink className="w-3.5 h-3.5" />
                                </a>
                            ) : (
                                <span className="mono text-[11px] text-zinc-600">
                                    no link
                                </span>
                            )}

                            <div className="flex md:hidden items-center gap-2">
                                <button
                                    aria-label="Previous"
                                    onClick={onPrev}
                                    className="w-9 h-9 rounded-md border border-[#1f1f23] bg-[#111113] flex items-center justify-center text-zinc-300 hover:text-teal-300"
                                >
                                    <ChevronLeft className="w-4 h-4" />
                                </button>

                                <button
                                    aria-label="Next"
                                    onClick={onNext}
                                    className="w-9 h-9 rounded-md border border-[#1f1f23] bg-[#111113] flex items-center justify-center text-zinc-300 hover:text-teal-300"
                                >
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>

                            <div className="hidden md:flex items-center gap-2 mono text-[10px] text-zinc-600">
                                <span className="kbd">←</span>
                                <span className="kbd">→</span>
                                <span>navigate</span>
                                <span className="kbd">esc</span>
                                <span>close</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AfkLightbox;