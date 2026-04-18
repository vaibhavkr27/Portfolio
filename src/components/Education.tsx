import { motion } from "framer-motion";
import { Section } from "./Section";
import { GraduationCap, Award } from "lucide-react";

const education = [
  {
    school: "Presidency University, Bangalore",
    degree: "Bachelor of Computer Applications (BCA)",
    period: "Aug 2023 – Present",
    detail: "CGPA: 8.5 / 10",
  },
  {
    school: "Lyceum International School, Bihar",
    degree: "CBSE — Class XII (PCM)",
    period: "2021 – 2023",
    detail: "",
  },
];

const certs = [
  {
    name: "Artificial Intelligence Fundamentals",
    issuer: "IBM",
    year: "2025",
  },
  {
    name: "Fundamentals of Web Apps",
    issuer: "IBM SkillsBuild",
    year: "Aug 2025",
  },
];

export function Education() {
  return (
    <Section
      id="education"
      eyebrow="Education & Credentials"
      title="Learning never stops."
    >
      <div className="grid lg:grid-cols-2 gap-6">
        <div className="space-y-5">
          <div className="flex items-center gap-2 mb-2">
            <GraduationCap className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">Education</h3>
          </div>
          {education.map((e, i) => (
            <motion.div
              key={e.school}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant transition-smooth"
            >
              <div className="flex items-start justify-between gap-4 mb-2">
                <h4 className="font-semibold">{e.school}</h4>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {e.period}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{e.degree}</p>
              {e.detail && (
                <p className="text-sm text-primary font-medium mt-2">{e.detail}</p>
              )}
            </motion.div>
          ))}
        </div>

        <div className="space-y-5">
          <div className="flex items-center gap-2 mb-2">
            <Award className="h-5 w-5 text-primary" />
            <h3 className="font-semibold text-lg">Certifications</h3>
          </div>
          {certs.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-6 rounded-2xl bg-card border border-border shadow-soft hover:shadow-elegant transition-smooth"
            >
              <div className="flex items-start justify-between gap-4 mb-1">
                <h4 className="font-semibold">{c.name}</h4>
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {c.year}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">{c.issuer}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
