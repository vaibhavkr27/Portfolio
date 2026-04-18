import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Education } from "@/components/Education";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Vaibhav Kumar — Software Developer & Problem Solver" },
      {
        name: "description",
        content:
          "Portfolio of Vaibhav Kumar — BCA student at Presidency University Bangalore, building AI-powered web products with React, Node.js, and Gemini API.",
      },
      { property: "og:title", content: "Vaibhav Kumar — Software Developer" },
      {
        property: "og:description",
        content:
          "AI-powered web projects, real-time multiplayer apps, and clean full-stack engineering.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
