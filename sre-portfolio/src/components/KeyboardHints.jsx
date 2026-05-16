import React, { useEffect, useState } from "react";
import { Keyboard, X, Eye, EyeOff } from "lucide-react";
import { navItems } from "../data/mock";

const KeyboardHints = () => {
    const [open, setOpen] = useState(false);

    // visible | hover
    const [mode, setMode] = useState("visible");

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "?" || (e.shiftKey && e.key === "/")) {
                e.preventDefault();
                setOpen((o) => !o);
            }

            if (e.key === "Escape") setOpen(false);

            if (e.key.toLowerCase() === "h") {
                window.scrollTo({ top: 0, behavior: "smooth" });
            }
        };

        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    const isHoverMode = mode === "hover";

    return (
        <>
            {/* Trigger */}
            <div className="fixed bottom-5 right-5 z-30 group">
                <button
                    onClick={() => setOpen(true)}
                    className={`
                        inline-flex items-center gap-2 px-3 py-2 rounded-full
                        border border-[#1f1f23] bg-[#0d0d0f]/90 backdrop-blur-sm
                        text-zinc-400 hover:text-teal-300 hover:border-teal-500/50
                        mono text-xs transition-opacity
                        ${isHoverMode ? "opacity-0 group-hover:opacity-100" : "opacity-100"}
                    `}
                >
                    <Keyboard className="w-3.5 h-3.5" />
                    press <span className="kbd">?</span>
                </button>
            </div>

            {/* Modal */}
            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
                    <div
                        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
                        onClick={() => setOpen(false)}
                    />

                    <div className="relative w-full max-w-md p-6 rounded-lg bg-[#0d0d0f] border border-[#1f1f23] teal-glow-soft">
                        {/* Header */}
                        <div className="flex items-center justify-between">
                            <div className="mono text-xs text-zinc-500">
                                <span className="text-teal-400">$</span> man shortcuts
                            </div>

                            <button
                                onClick={() => setOpen(false)}
                                className="text-zinc-500 hover:text-zinc-200 transition-colors"
                            >
                                <X className="w-4 h-4" />
                            </button>
                        </div>

                        <h3 className="heading-font text-xl text-zinc-100 mt-2">
                            Keyboard shortcuts
                        </h3>

                        <p className="mt-1 text-sm text-zinc-400">
                            Navigate this site without leaving the keyboard.
                        </p>

                        {/* Shortcuts */}
                        <div className="mt-5 space-y-2">
                            {navItems.map((n) => (
                                <div
                                    key={n.id}
                                    className="flex items-center justify-between text-sm py-2 border-b border-[#1f1f23]"
                                >
                                    <span className="text-zinc-300">{n.label}</span>
                                    <span className="kbd">{n.key}</span>
                                </div>
                            ))}

                            <div className="flex items-center justify-between text-sm py-2 border-b border-[#1f1f23]">
                                <span className="text-zinc-300">Back to top</span>
                                <span className="flex items-center gap-1">
                                    <span className="kbd">g</span>
                                    <span className="kbd">t</span>
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-sm py-2 border-b border-[#1f1f23]">
                                <span className="text-zinc-300">Jump to bottom</span>
                                <span className="flex items-center gap-1">
                                    <span className="kbd">g</span>
                                    <span className="kbd">b</span>
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-sm py-2 border-b border-[#1f1f23]">
                                <span className="text-zinc-300">Home</span>
                                <span className="kbd">H</span>
                            </div>

                            <div className="flex items-center justify-between text-sm py-2">
                                <span className="text-zinc-300">Toggle dialog</span>
                                <span className="kbd">?</span>
                            </div>
                        </div>

                        {/* Eye toggle */}
                        <div className="mt-5 flex items-center justify-end">
                            <button
                                onClick={() =>
                                    setMode((m) => (m === "hover" ? "visible" : "hover"))
                                }
                                className="flex items-center gap-2 mono text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors"
                            >
                                <span className="relative w-10 h-5 rounded-full border border-[#1f1f23] bg-[#111113] flex items-center px-0.5">
                                    <span
                                        className={`w-4 h-4 rounded-full transition-transform duration-200 ${
                                            mode === "hover"
                                                ? "translate-x-5 bg-zinc-400"
                                                : "translate-x-0 bg-teal-400"
                                        }`}
                                    />
                                </span>

                                {mode === "hover" ? (
                                    <>
                                        <EyeOff className="w-3.5 h-3.5" />
                                        show hint
                                    </>
                                ) : (
                                    <>
                                        <Eye className="w-3.5 h-3.5" />
                                        hide hint
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default KeyboardHints;