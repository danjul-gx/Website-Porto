import Section from "@/components/layout/Section";
import FadeIn from "@/components/motion/FadeIn";
import Badge from "@/components/ui/Badge";

const skillGroups = [
  {
    title: "Programming Languages",
    description:
      "Building applications across web development, automation, game scripting, and software engineering.",
    skills: ["Python", "TypeScript", "Lua (Roblox)", "Next.js", "Java", "PHP"],
  },
  {
    title: "Database & Cloud Infrastructure",
    description:
      "Managing databases, authentication, deployment, and cloud services for scalable applications.",
    skills: ["MySQL", "Firebase", "Supabase", "Vercel"],
  },
  {
    title: "Tools & Design",
    description:
      "Utilizing development tools, version control, 3D design, and mobile development environments.",
    skills: ["GitHub", "Blender 3D", "Android Studio"],
  },
];

export default function SkillsSection() {
  return (
    <Section className="py-24">
      <FadeIn>
        <h2
          className="text-4xl sm:text-5xl font-bold text-white mb-16"
          style={{ fontFamily: "var(--font-plus-jakarta)" }}
        >
          Technical Skills
        </h2>
      </FadeIn>

      <div className="space-y-20">
        {skillGroups.map((group) => (
          <FadeIn key={group.title}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-5">
                {group.title}
              </h3>

              <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed mb-8">
                {group.description}
              </p>

              <div className="flex flex-wrap gap-3">
                {group.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="px-5 py-3 text-sm border-white/10 bg-white/[0.02] hover:bg-white/[0.05] transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}