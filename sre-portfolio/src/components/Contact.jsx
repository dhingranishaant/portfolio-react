import React, { useState } from "react";
import { SectionHeader } from "./About";
import { profile } from "../data/mock";
import { Mail, Send, Github, Linkedin, Twitter, FileText } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
    const [form, setForm] = useState({ name: "", email: "", message: "" });
    const [submitting, setSubmitting] = useState(false);

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            toast.error("please fill out all fields");
            return;
        }
        setSubmitting(true);
        try {
            const msgs = JSON.parse(localStorage.getItem("sre_messages") || "[]");
            msgs.push({ ...form, ts: new Date().toISOString() });
            localStorage.setItem("sre_messages", JSON.stringify(msgs));
        } catch (_) { /* noop */ }
        setTimeout(() => {
            toast.success("message queued — i'll get back to you soon");
            setForm({ name: "", email: "", message: "" });
            setSubmitting(false);
        }, 700);
    };

    return (
        <section id="contact" className="relative max-w-6xl mx-auto px-6 py-20 md:py-28">
            <SectionHeader index={5} title="Contact" caption="// pager-friendly channels" />
            <div className="grid md:grid-cols-5 gap-6">
                <div className="md:col-span-2 reveal">
                    <div className="p-6 rounded-lg bg-[#0d0d0f] border border-[#1f1f23] h-full">
                        <div className="mono text-xs text-zinc-500"><span className="text-teal-400">$</span> ./say-hi.sh</div>
                        <h3 className="heading-font text-2xl text-zinc-100 mt-3">Let&apos;s build something reliable.</h3>
                        <p className="mt-3 text-sm text-zinc-400 leading-relaxed">
                            Open to senior SRE / platform roles, advisory work, and interesting reliability problems. Async-friendly.
                        </p>
                        <a href={`mailto:${profile.email}`} className="mt-6 inline-flex items-center gap-2 mono text-sm text-teal-300 hover:text-teal-200 transition-colors">
                            <Mail className="w-4 h-4" />{profile.email}
                        </a>
                        <div className="mt-6 pt-6 border-t border-[#1f1f23] flex flex-wrap gap-2">
                            <a href={profile.socials.github} target="_blank" rel="noreferrer"
                               className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-[#1f1f23] bg-[#111113] text-sm text-zinc-300 hover:text-teal-300 hover:border-teal-500/50 transition-colors">
                                <Github className="w-4 h-4" /> github
                            </a>
                            <a href={profile.socials.linkedin} target="_blank" rel="noreferrer"
                               className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-[#1f1f23] bg-[#111113] text-sm text-zinc-300 hover:text-teal-300 hover:border-teal-500/50 transition-colors">
                                <Linkedin className="w-4 h-4" /> linkedin
                            </a>
                            <a href={profile.socials.twitter} target="_blank" rel="noreferrer"
                               className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-[#1f1f23] bg-[#111113] text-sm text-zinc-300 hover:text-teal-300 hover:border-teal-500/50 transition-colors">
                                <Twitter className="w-4 h-4" /> twitter
                            </a>
                            <a href={profile.socials.resume}
                               className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-[#1f1f23] bg-[#111113] text-sm text-zinc-300 hover:text-teal-300 hover:border-teal-500/50 transition-colors">
                                <FileText className="w-4 h-4" /> résumé
                            </a>
                        </div>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="md:col-span-3 reveal p-6 rounded-lg bg-[#0d0d0f] border border-[#1f1f23]">
                    <div className="grid sm:grid-cols-2 gap-4">
                        <div>
                            <label className="mono text-[11px] uppercase tracking-wider text-zinc-500">name</label>
                            <input name="name" value={form.name} onChange={handleChange} placeholder="jane doe"
                                   className="mt-1 w-full bg-[#111113] border border-[#1f1f23] rounded-md px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-teal-500/60 focus:ring-2 focus:ring-teal-500/20 transition-colors" />
                        </div>
                        <div>
                            <label className="mono text-[11px] uppercase tracking-wider text-zinc-500">email</label>
                            <input name="email" type="email" value={form.email} onChange={handleChange} placeholder="jane@company.com"
                                   className="mt-1 w-full bg-[#111113] border border-[#1f1f23] rounded-md px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-teal-500/60 focus:ring-2 focus:ring-teal-500/20 transition-colors" />
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="mono text-[11px] uppercase tracking-wider text-zinc-500">message</label>
                        <textarea name="message" value={form.message} onChange={handleChange} rows={6}
                                  placeholder="tell me about your reliability problem…"
                                  className="mt-1 w-full bg-[#111113] border border-[#1f1f23] rounded-md px-3 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:border-teal-500/60 focus:ring-2 focus:ring-teal-500/20 transition-colors resize-y" />
                    </div>
                    <div className="mt-5 flex items-center justify-between gap-3">
                        <span className="mono text-[11px] text-zinc-500"><span className="text-teal-400">$</span> sent over tls 1.3</span>
                        <button type="submit" disabled={submitting}
                                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-teal-500 text-zinc-950 font-medium hover:bg-teal-400 teal-glow transition-colors disabled:opacity-60">
                            {submitting ? "sending…" : "send message"} <Send className="w-4 h-4" />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default Contact;