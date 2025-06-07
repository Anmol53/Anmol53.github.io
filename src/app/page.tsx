"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Copyright } from "@/components/Copyright";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Skills />
        <Experience />
        <Projects />
        <Contact />
        <Copyright appName=""/>
      </main>
    </>
  );
}
