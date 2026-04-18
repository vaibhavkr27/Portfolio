import { motion } from "framer-motion";
import { ArrowRight, Mail, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10">
        <img
          src={heroBg}
          alt=""
          width={1920}
          height={1280}
          className="w-full h-full object-cover opacity-[0.07] dark:opacity-[0.15]"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-medium tracking-wider uppercase rounded-full bg-accent text-accent-foreground border border-border">
            Available for opportunities
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-bold leading-[1.05] mb-6"
        >
          Vaibhav <span className="text-gradient">Kumar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg sm:text-xl text-muted-foreground font-medium mb-4"
        >
          Software Developer · Problem Solver · BCA Student
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          I build thoughtful web experiences and AI-powered tools that turn complex
          ideas into clear, usable products. Currently pursuing BCA at Presidency
          University, Bangalore.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-10"
        >
          <a href="#projects">
            <Button size="lg" className="rounded-full gap-2 shadow-elegant">
              View Projects <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
          <a href="#contact">
            <Button size="lg" variant="outline" className="rounded-full gap-2">
              <Mail className="h-4 w-4" /> Contact Me
            </Button>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="flex items-center justify-center gap-5 text-muted-foreground"
        >
          <a
            href="https://github.com/vaibhavkr"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="hover:text-primary transition-smooth"
          >
            <Github className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/vaibhav-kumar"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="hover:text-primary transition-smooth"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:vk27112006@gmail.com"
            aria-label="Email"
            className="hover:text-primary transition-smooth"
          >
            <Mail className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
