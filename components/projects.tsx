import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { ArrowUpRight, FileText } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'

const projects = [
  {
    title: 'Wazuh SIEM Home Lab',
    tag: 'SIEM / Detection Engineering',
    description:
      'Deployed a full Wazuh stack (manager, indexer, dashboard) and onboarded Windows and Linux agents. Built custom rules and decoders, tuned alerts, and validated detections with simulated attacks.',
    stack: ['Wazuh', 'Sysmon', 'Ubuntu', 'Custom rules'],
    highlights: ['End-to-end log pipeline', 'Custom detection rules', 'Alert tuning'],
  },
  {
    title: 'Windows Event ID Analysis',
    tag: 'Log Analysis',
    description:
      'Investigated key Windows Security Event IDs (4624, 4625, 4672, 4688, 7045) to distinguish normal activity from suspicious logons, privilege use, and service installs — documented as an analyst reference.',
    stack: ['Windows', 'Event Viewer', 'Sysmon', 'PowerShell'],
    highlights: ['Logon anomaly detection', 'Process creation review', 'Persistence hunting'],
  },
  {
    title: 'Email Header Investigation',
    tag: 'Phishing / DFIR',
    description:
      'Analyzed raw email headers to trace originating IPs, validate SPF/DKIM/DMARC, and identify spoofing indicators in a simulated phishing case, ending in a triage verdict and recommended actions.',
    stack: ['MXToolbox', 'CyberChef', 'SPF/DKIM/DMARC', 'OSINT'],
    highlights: ['Header parsing', 'Auth record validation', 'Spoofing verdict'],
  },
  {
    title: 'MITRE ATT&CK Mapping',
    tag: 'Threat-Informed Defense',
    description:
      'Mapped observed lab activity to MITRE ATT&CK tactics and techniques, then linked each technique to the data source and Wazuh detection that would surface it — closing visibility gaps.',
    stack: ['MITRE ATT&CK', 'ATT&CK Navigator', 'Wazuh', 'Detection mapping'],
    highlights: ['Technique-to-detection map', 'Coverage gap analysis', 'Navigator layer'],
  },
]

export function Projects() {
  return (
    <section id="projects" className="scroll-mt-24 border-y border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          index="04"
          title="Projects & Write-ups"
          subtitle="Hands-on Blue Team work, each documented as a repeatable write-up with detection logic and findings."
        />

        <div className="grid gap-5 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 80}>
              <article className="group flex h-full flex-col rounded-xl border border-border bg-card/60 p-6 transition-all hover:-translate-y-1 hover:border-primary/50">
                <div className="mb-3 flex items-start justify-between gap-4">
                  <span className="rounded-md border border-primary/30 bg-primary/10 px-2.5 py-1 font-mono text-[11px] text-primary">
                    {project.tag}
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-colors group-hover:text-primary" />
                </div>

                <h3 className="text-lg font-semibold tracking-tight">{project.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-border bg-background/60 px-2.5 py-0.5 text-[11px] text-muted-foreground"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <div className="flex flex-wrap gap-1.5">
                    {project.stack.map((s) => (
                      <span key={s} className="font-mono text-[11px] text-muted-foreground">
                        #{s.replace(/\s+/g, '')}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-3">
                    <a
                      href="https://github.com/salihcls"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} on GitHub`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <GithubIcon className="size-4" />
                    </a>
                    <a
                      href="#"
                      aria-label={`${project.title} write-up`}
                      className="text-muted-foreground transition-colors hover:text-primary"
                    >
                      <FileText className="size-4" />
                    </a>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
