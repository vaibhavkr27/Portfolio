import { motion } from "framer-motion";
import { Section } from "./Section";
import { Mail, Phone, Github, Linkedin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "vk27112006@gmail.com",
    href: "mailto:vk27112006@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 9155360886",
    href: "tel:+919155360886",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Vaibhav Kumar",
    href: "https://www.linkedin.com/in/vaibhav-kumar",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "vaibhavkr",
    href: "https://github.com/vaibhavkr",
  },
];

export function Contact() {
  return (
    <Section
      id="contact"
      eyebrow="Contact"
      title="Let's build something great."
      description="I'm open to internships, freelance work, and interesting collaborations. The fastest way to reach me is email."
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-6 mb-10"
      >
        {channels.map((c) => (
          <a
            key={c.label}
            href={c.href}
            target={c.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant hover:-translate-y-0.5 transition-smooth"
          >
            <div className="h-12 w-12 rounded-xl bg-accent flex items-center justify-center group-hover:bg-gradient-primary transition-smooth">
              <c.icon className="h-5 w-5 text-accent-foreground group-hover:text-primary-foreground transition-smooth" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted-foreground uppercase tracking-wider font-medium">
                {c.label}
              </p>
              <p className="font-medium truncate">{c.value}</p>
            </div>
            <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-smooth" />
          </a>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="relative p-10 sm:p-14 rounded-3xl bg-gradient-primary text-primary-foreground text-center shadow-elegant overflow-hidden"
      >
        <h3 className="text-3xl sm:text-4xl font-bold mb-3">Have a project in mind?</h3>
        <p className="opacity-90 mb-7 max-w-md mx-auto">
          Send me a quick email and I'll get back within a day.
        </p>
        <a href="mailto:vk27112006@gmail.com">
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full gap-2"
          >
            <Mail className="h-4 w-4" /> Say Hello
          </Button>
        </a>
      </motion.div>
    </Section>
  );
}
