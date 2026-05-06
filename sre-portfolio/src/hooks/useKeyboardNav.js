import { useEffect } from "react";

const useKeyboardNav = (navItems = []) => {
    useEffect(() => {
        let gPressed = false;
        let gTimer = null;

        const isTypingTarget = (el) => {
            if (!el) return false;
            const tag = el.tagName;
            return tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT" || el.isContentEditable;
        };

        const scrollToId = (id) => {
            const el = document.getElementById(id);
            if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
        };

        const onKey = (e) => {
            if (isTypingTarget(e.target)) return;
            if (e.metaKey || e.ctrlKey || e.altKey) return;

            if (e.key === "g") {
                gPressed = true;
                clearTimeout(gTimer);
                gTimer = setTimeout(() => (gPressed = false), 800);
                return;
            }
            if (gPressed && (e.key === "t" || e.key === "T")) {
                window.scrollTo({ top: 0, behavior: "smooth" });
                gPressed = false; return;
            }
            if (gPressed && (e.key === "b" || e.key === "B")) {
                window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
                gPressed = false; return;
            }
            if (e.key === "h" || e.key === "H") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            }
            const item = navItems.find((n) => n.key === e.key);
            if (item) {
                e.preventDefault();
                scrollToId(item.id);
            }
        };

        window.addEventListener("keydown", onKey);
        return () => {
            window.removeEventListener("keydown", onKey);
            clearTimeout(gTimer);
        };
    }, [navItems]);
};

export default useKeyboardNav;