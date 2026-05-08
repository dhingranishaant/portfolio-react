import { useEffect, useState } from "react";

const STORAGE_KEY = "sre_theme";

const getInitialTheme = () => {
    if (typeof window === "undefined") return "dark";
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "light" || saved === "dark") return saved;
    // First-visit: respect OS preference, default to dark.
    if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
        return "light";
    }
    return "dark";
};

const useTheme = () => {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;
        if (theme === "light") root.classList.add("light");
        else root.classList.remove("light");
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        } catch (_) { /* noop */ }
    }, [theme]);

    const toggle = () => setTheme((t) => (t === "dark" ? "light" : "dark"));
    return { theme, toggle };
};

export default useTheme;