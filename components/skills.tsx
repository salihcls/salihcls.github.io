import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Activity, Network, Search, ShieldAlert, TerminalSquare } from 'lucide-react'

const groups = [
  {
    icon: ShieldAlert,
    title: 'SIEM & Monitoring',
    skills: ['Wazuh', 'Elastic Stack', 'Splunk (basics)', 'Sysmon', 'Log correlation'],
  },
  {
    icon: Search,
    title: 'Threat Detection & DFIR',
    skills: ['MITRE ATT&CK', 'Windows Event Analysis', 'Email header analysis', 'IOC triage'],
  },
  {
    icon: Network,
    title: 'Networking & Protocols',
    skills: ['TCP/IP', 'DNS', 'HTTP(S)', 'Wireshark', 'Firewall rules'],
  },
  {
    icon: TerminalSquare,
    title: 'Systems & Scripting',
    skills: ['Linux', 'Windows Server', 'PowerShell', 'Bash', 'Python'],
  },
  {
    icon: Activity,
    title: 'Tools',
    skills: ['VirtualBox', 'pfSense', 'Nmap', 'CyberChef', 'Git'],
  },
]

export function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 border-y border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          index="02"
          title="Skills"
          subtitle="A defensive-security toolkit, weighted toward detection, analysis, and response."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal key={group.title} delay={i * 70}>
              <div className="group h-full rounded-xl border border-border bg-card/60 p-6 transition-colors hover:border-primary/40">
                <div className="mb-4 flex items-center gap-3">
                  <span className="inline-flex size-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <group.icon className="size-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-medium">{group.title}</h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <li
                      key={skill}
                      className="rounded-md border border-border bg-background/60 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:text-foreground"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
