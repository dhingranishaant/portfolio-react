import React, { useEffect, useState } from "react";
import { Keyboard, X } from "lucide-react";
import { navItems } from "../data/mock";

const KeyboardHints = () => {
    const [open, setOpen] = useState(false);
    const [hidden, setHidden] = useState(false);

    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "?" || (e.shiftKey && e.key === "/")) {
                e.preventDefault();
                setOpen((o) => !o);
            }
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, []);

    if (hidden) return null;

    return (
        <>
            <button onClick={() => setOpen(true)} aria-label="keyboard shortcuts"
                    className="fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 px-3 py-2 rounded-full border border-[#1f1f23] bg-[#0d0d0f]/90 backdrop-blur-sm text-zinc-400 hover:text-teal-300 hover:border-teal-500/50 transition-colors mono text-xs">
                <Keyboard className="w-3.5 h-3.5" /> press <span className="kbd">?</span>
            </button>

            {open && (
                <div className="fixed inset-0 z-50 flex items-center justify-center px-4" role="dialog" aria-modal="true">
                    <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={() => setOpen(false)} />
                    <div className="relative w-full max-w-md p-6 rounded-lg bg-[#0d0d0f] border border-[#1f1f23] teal-glow-soft">
                        <div className="flex items-center justify-between">
                            <div className="mono text-xs text-zinc-500"><span className="text-teal-400">$</span> man shortcuts</div>
                            <button onClick={() => setOpen(false)} className="text-zinc-500 hover:text-zinc-200 transition-colors" aria-label="close">
                                <X className="w-4 h-4" />
                            </button>
                        </div>
                        <h3 className="heading-font text-xl text-zinc-100 mt-2">Keyboard shortcuts</h3>
                        <p className="mt-1 text-sm text-zinc-400">Navigate this site without leaving the keyboard.</p>
                        <div className="mt-5 space-y-2">
                            {navItems.map((n) => (
                                <div key={n.id} className="flex items-center justify-between text-sm py-2 border-b border-[#1f1f23] last:border-b-0">
                                    <span className="text-zinc-300">{n.label}</span>
                                    <span className="kbd">{n.key}</span>
                                </div>
                            ))}
                            <div className="flex items-center justify-between text-sm py-2 border-b border-[#1f1f23]">
                                <span className="text-zinc-300">Back to top</span>
                                <span className="flex items-center gap-1"><span className="kbd">g</span><span className="kbd">t</span></span>
                            </div>
                            <div className="flex items-center justify-between text-sm py-2 border-b border-[#1f1f23]">
                                <span className="text-zinc-300">Jump to bottom</span>
                                <span className="flex items-center gap-1"><span className="kbd">g</span><span className="kbd">b</span></span>
                            </div>
                            <div className="flex items-center justify-between text-sm py-2">
                                <span className="text-zinc-300">Toggle this dialog</span>
                                <span className="kbd">?</span>
                            </div>
                        </div>
                        <div className="mt-5 flex items-center justify-end">
                            <button onClick={() => { setHidden(true); setOpen(false); }}
                                    className="mono text-[11px] text-zinc-500 hover:text-zinc-300 transition-colors">
                                hide hint button
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default KeyboardHints;