import React, { useEffect, useState } from "react";

const LoadingScreen = ({ theme, onFinish }) => {
    const [fade, setFade] = useState(false);

    const isDark = theme === "dark";

    const bg = isDark ? "#0a0a0b" : "#faf6ef";
    const dotOpacity = isDark ? 0.7 : 0.25;
    const glow = isDark
        ? "rgba(20,184,166,0.35)"
        : "rgba(234,88,12,0.25)";

        useEffect(() => {
            const t1 = setTimeout(() => setFade(true), 1950); // allow animation to finish
            const t2 = setTimeout(() => onFinish?.(), 2500);  // small buffer after fade starts
        
            return () => {
                clearTimeout(t1);
                clearTimeout(t2);
            };
        }, [onFinish]);

    return (
        <div
            className={`fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-700 ${
                fade ? "opacity-0" : "opacity-100"
            }`}
            style={{ backgroundColor: bg }}
        >
            {/* dotted background */}
            <div
                className="absolute inset-0 dot-grid"
                style={{ opacity: dotOpacity }}
            />

            {/* soft glow */}
            <div
                className="absolute inset-0"
                style={{
                    background: `radial-gradient(circle at center, ${glow}, transparent 60%)`,
                }}
            />

            {/* N animation */}
            <svg width="140" height="140" viewBox="0 0 100 100" className="relative">
                <defs>
                    <linearGradient id="nGlow" x1="0" y1="1" x2="1" y2="0">
                        <stop offset="0%" stopColor={isDark ? "#14b8a6" : "#f97316"} />
                        <stop offset="100%" stopColor={isDark ? "#2dd4bf" : "#fb923c"} />
                    </linearGradient>
                </defs>

                <path
                    d="M25 80 V20 L75 80 V20"
                    fill="none"
                    stroke="url(#nGlow)"
                    strokeWidth="8"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                    strokeDasharray="200"
                    strokeDashoffset="200"
                    className="animate-[dash_2.0s_ease-out_forwards]"
                />
            </svg>

            <style>{`
                @keyframes dash {
                    to { stroke-dashoffset: 0; }
                }
            `}</style>
        </div>
    );
};

export default LoadingScreen;