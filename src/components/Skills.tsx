import { motion } from "framer-motion";
import { Section } from "./Section";
import { Code, Globe, Wrench, BookOpen } from "lucide-react";

const groups = [
  {
    icon: Code,
    label: "Languages",
    items: ["C", "Python", "Java", "SQL"],
  },
  {
    icon: Globe,
    label: "Web Development",
    items: ["HTML", "CSS", "JavaScript", "React.js", "Node.js"],
  },
  {
    icon: Wrench,
    label: "Tools & Platforms",
    items: ["Git", "GitHub", "VS Code", "Gemini API"],
  },
  {
    icon: BookOpen,
    label: "Currently Learning",
    items: ["Data Structures", "Algorithms (DSA)"],
  },
];

export function Skills() {
  return (
    <Section
      id="skills"
      eyebrow="Skills"
      title="Tools I work with."
      description="A focused stack — chosen to ship real products end-to-end."
    >
      <div className="grid sm:grid-cols-2 gap-5">
        {groups.map((g, i) => (
          <motion.div
            key={g.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant transition-smooth"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                <g.icon className="h-5 w-5 text-accent-foreground" />
              </div>
              <h3 className="font-semibold text-lg">{g.label}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.items.map((it) => (
                <span
                  key={it}
                  className="px-3 py-1.5 text-sm rounded-full bg-secondary text-secondary-foreground border border-border font-medium"
                >
                  {it}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
