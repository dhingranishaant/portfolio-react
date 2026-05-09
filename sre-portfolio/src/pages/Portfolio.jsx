import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Education from "../components/Education";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import KeyboardHints from "../components/KeyboardHints";
import useKeyboardNav from "../hooks/useKeyboardNav";
import { navItems } from "../data/mock";
import ScrollProgress from "../components/ScrollProgress";
import useTheme from "../hooks/useTheme";

const Portfolio = () => {
    useKeyboardNav(navItems);
    const { theme, toggle } = useTheme();

    useEffect(() => {
        const els = document.querySelectorAll(".reveal");
        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        io.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
    }, []);

    return (
        <div className="relative min-h-screen bg-[#0a0a0b] text-zinc-200">
            <Navbar theme={theme} toggle={toggle} />
            <ScrollProgress theme={theme} />
            <main>
                <Hero theme={theme} />
                <About theme={theme} />
                <Education theme={theme}/>
                <Experience theme={theme}/>
                <Projects theme={theme}/>
                <Contact theme={theme}/>
            </main>
            <Footer theme={theme}/>
            <KeyboardHints />
        </div>
    );
};

export default Portfolio;