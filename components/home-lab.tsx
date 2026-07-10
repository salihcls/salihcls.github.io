import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import {
  Cloud,
  Database,
  MonitorSmartphone,
  Router,
  Server,
  ShieldCheck,
} from 'lucide-react'

const layers = [
  {
    label: 'Endpoints',
    accent: false,
    nodes: [
      { icon: MonitorSmartphone, name: 'Windows 10/11', meta: 'Sysmon + Wazuh agent' },
      { icon: Server, name: 'Windows Server', meta: 'AD DC · DNS · GPO' },
      { icon: Server, name: 'Ubuntu Server', meta: 'auditd + Wazuh agent' },
    ],
  },
  {
    label: 'Network Edge',
    accent: false,
    nodes: [{ icon: Router, name: 'pfSense Firewall', meta: 'Segmentation · logging · IDS' }],
  },
  {
    label: 'Detection & Analysis',
    accent: true,
    nodes: [
      { icon: ShieldCheck, name: 'Wazuh Manager', meta: 'Rules · decoders · alerts' },
      { icon: Database, name: 'Indexer', meta: 'Log storage & search' },
      { icon: Cloud, name: 'Wazuh Dashboard', meta: 'Triage · hunting · reports' },
    ],
  },
]

const stats = [
  { value: '5+', label: 'Virtual machines' },
  { value: '3', label: 'OS platforms monitored' },
  { value: '100%', label: 'Isolated / air-gapped' },
]

export function HomeLab() {
  return (
    <section id="homelab" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeading
        index="03"
        title="Home Lab Architecture"
        subtitle="A segmented virtual environment where telemetry flows from endpoints, through the network edge, into a centralized SIEM for detection and investigation."
      />

      <Reveal className="rounded-2xl border border-border bg-card/40 p-6 sm:p-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {layers.map((layer) => (
            <div key={layer.label} className="relative">
              <div className="mb-4 flex items-center gap-2">
                <span
                  className={`size-2 rounded-full ${layer.accent ? 'bg-primary' : 'bg-accent'}`}
                />
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                  {layer.label}
                </p>
              </div>

              <div className="space-y-3">
                {layer.nodes.map((node) => (
                  <div
                    key={node.name}
                    className={`flex items-center gap-3 rounded-lg border p-4 transition-colors ${
                      layer.accent
                        ? 'border-primary/40 bg-primary/5'
                        : 'border-border bg-background/50 hover:border-primary/30'
                    }`}
                  >
                    <node.icon
                      className={`size-5 shrink-0 ${layer.accent ? 'text-primary' : 'text-accent'}`}
                      aria-hidden="true"
                    />
                    <div className="min-w-0">
                      <p className="truncate text-sm font-medium">{node.name}</p>
                      <p className="truncate font-mono text-[11px] text-muted-foreground">
                        {node.meta}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-2 font-mono text-[11px] text-muted-foreground">
          <span className="h-px w-8 bg-gradient-to-r from-transparent to-primary/60" />
          logs &amp; events forwarded to Wazuh Manager over encrypted agent channels
          <span className="h-px w-8 bg-gradient-to-l from-transparent to-primary/60" />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-4 border-t border-border pt-6">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-2xl font-bold text-primary sm:text-3xl">{stat.value}</p>
              <p className="mt-1 text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
