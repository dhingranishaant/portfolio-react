import React, { useEffect, useState } from "react";
import useTheme from "../hooks/useTheme";

const ScrollProgress = ({ theme }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const update = () => {
      const scrolled = window.scrollY;
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (scrolled / total) * 100 : 0);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        height: "2px",
        width: `${progress}%`,
        background:
        theme === "dark"
          ? "linear-gradient(90deg, #14b8a6, #5eead4)"
          : "linear-gradient(90deg, #f97316, #fdba74)",
        boxShadow:
        theme === "dark"
          ? "0 0 10px rgba(20, 184, 166, 0.6)"
          : "0 0 10px rgba(249, 115, 22, 0.5)",
        zIndex: 100,
        transition: "width 80ms linear"
      }}
    />
  );
};

export default ScrollProgress;