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

const Portfolio = () => {
    useKeyboardNav(navItems);

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
            <Navbar />
            <ScrollProgress />
            <main>
                <Hero />
                <About />
                <Education />
                <Experience />
                <Projects />
                <Contact />
            </main>
            <Footer />
            <KeyboardHints />
        </div>
    );
};

export default Portfolio;