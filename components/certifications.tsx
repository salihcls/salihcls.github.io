import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Award, BookOpen, CheckCircle2, Clock } from 'lucide-react'

const certs = [
  {
    name: 'ICRIRET 2026 Katılım ve Sözlü Sunum Sertifikası',
    issuer: 'ICRIRET',
    status: 'Completed',
    done: true,
    note: 'Yerel LLM ve OCR destekli kriptografi projesi üzerine akademik sözlü sunum.',
  },
  {
    name: 'Siber Güvenlik için Linux İşletim Sistemi',
    issuer: 'BTK Akademi',
    status: 'Completed',
    done: true,
    note: 'Siber güvenlik operasyonları ve komut satırı yönetimi için temel Linux yetkinlikleri.',
  },
  {
    name: 'Temel Kriptografi',
    issuer: 'BTK Akademi',
    status: 'Completed',
    done: true,
    note: 'Şifreleme algoritmaları, veri güvenliği ve kriptografik analiz temelleri.',
  },
  {
    name: 'Siber Vatan Katılım Sertifikası',
    issuer: 'Siber Vatan',
    status: 'Completed',
    done: true,
    note: 'Siber güvenlik ekosistemi ve defansif güvenlik temelleri eğitimi.',
  },
]

function StatusBadge({ status, done }: { status: string; done: boolean }) {
  const planned = status === 'Planned'
  const Icon = done ? CheckCircle2 : planned ? BookOpen : Clock
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 font-mono text-[11px] ${
        done
          ? 'border border-accent/40 bg-accent/10 text-accent'
          : 'border border-primary/40 bg-primary/10 text-primary'
      }`}
    >
      <Icon className="size-3" /> {status}
    </span>
  )
}

export function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6">
      <SectionHeading
        index="05"
        title="Certifications"
        subtitle="A learning path focused on defensive security — completed, in progress, and planned."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {certs.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 70}>
            <div className="flex h-full items-start gap-4 rounded-xl border border-border bg-card/60 p-5 transition-colors hover:border-primary/40">
              <span className="inline-flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Award className="size-5" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                  <h3 className="font-medium">{cert.name}</h3>
                  <StatusBadge status={cert.status} done={cert.done} />
                </div>
                <p className="mt-0.5 font-mono text-xs text-muted-foreground">{cert.issuer}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cert.note}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
