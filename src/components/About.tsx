import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Code2, Sparkles } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Education",
    text: "Pursuing BCA at Presidency University, Bangalore with a CGPA of 8.5/10.",
  },
  {
    icon: Code2,
    title: "Builder",
    text: "Comfortable across the stack — React, Node.js, and modern AI APIs.",
  },
  {
    icon: Sparkles,
    title: "Goal",
    text: "Crafting AI-driven products that genuinely simplify how developers work.",
  },
];

export function About() {
  return (
    <Section
      id="about"
      eyebrow="About"
      title="A developer driven by curiosity."
      description="I'm a Computer Applications student passionate about building products that combine clean engineering with AI. I enjoy turning vague problems into structured, shippable solutions — whether that's a multiplayer quiz platform or an AI planning tool."
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {highlights.map((h, i) => (
          <motion.div
            key={h.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-1 transition-smooth"
          >
            <div className="h-11 w-11 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
              <h.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{h.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{h.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
