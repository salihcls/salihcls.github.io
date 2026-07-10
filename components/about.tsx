import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Crosshair, GraduationCap, ShieldCheck, Terminal } from 'lucide-react'

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Blue Team Focus',
    text: 'Detection, monitoring, and response — I enjoy the defensive side of security most.',
  },
  {
    icon: Terminal,
    title: 'Hands-On Home Lab',
    text: 'A running SIEM lab where I generate, ingest, and hunt through real telemetry.',
  },
  {
    icon: Crosshair,
    title: 'Threat-Informed',
    text: 'I map activity to MITRE ATT&CK to understand adversary behaviour, not just alerts.',
  },
  {
    icon: GraduationCap,
    title: 'Always Learning',
    text: 'Actively studying for entry-level Blue Team certifications and CTF challenges.',
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeading
        index="01"
        title="About Me"
        subtitle="Turning curiosity about how attacks work into the skills to detect and stop them."
      />

      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr]">
        <Reveal className="space-y-5 leading-relaxed text-muted-foreground">
          <p>
            I&apos;m a Cyber Security student building toward a career as a{' '}
            <span className="text-foreground">SOC Analyst</span>. My interest started with a
            simple question — how do defenders actually <em>see</em> an attack? That question
            pulled me into logs, alerts, and the tooling that makes threats visible.
          </p>
          <p>
            Since then I&apos;ve been deliberately practical. Rather than only reading theory,
            I built a home lab that mirrors a small enterprise environment, wired it into a{' '}
            <span className="text-foreground">Wazuh SIEM</span>, and use it to practise log
            analysis, alert triage, and investigation write-ups the way an analyst would on
            shift.
          </p>
          <p>
            I care about clear documentation, repeatable detection logic, and communicating
            findings in a way both technical and non-technical people can act on.
          </p>
        </Reveal>

        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-1">
          {highlights.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="group flex h-full gap-4 rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-primary/40">
                <item.icon className="size-6 shrink-0 text-primary" aria-hidden="true" />
                <div>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
