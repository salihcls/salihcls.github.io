import { Reveal } from '@/components/reveal'
import { SectionHeading } from '@/components/section-heading'
import { Mail, Shield } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function Contact() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border bg-card/20">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6">
        <SectionHeading
          index="06"
          title="Contact"
          subtitle="Open to SOC Analyst, Blue Team, and security internship opportunities — let's talk."
        />

        <Reveal className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-border bg-card/60 p-8">
            <p className="font-mono text-sm text-primary">$ whoami</p>
            <p className="mt-2 text-2xl font-bold">Salih CLS</p>
            <p className="mt-1 text-sm text-muted-foreground">
              Cyber Security Student · SOC Analyst Candidate
            </p>
            <p className="mt-6 leading-relaxed text-muted-foreground">
              Whether it&apos;s a role, a collaboration, or a security discussion, I&apos;d be
              glad to connect. I usually reply within a day.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="mailto:calisicisalih9@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
              >
                <Mail className="size-4" /> Email Me
              </a>
              <a
                href="https://github.com/salihcls"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
              >
                <GithubIcon className="size-4" /> GitHub
              </a>
              <a
                href="https://linkedin.com/in/muhammetsalihcalisici/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-background/60 px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
              >
                <LinkedinIcon className="size-4" /> LinkedIn
              </a>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-border bg-card/60 p-8">
            <div
              className="grid-bg pointer-events-none absolute inset-0 opacity-40"
              aria-hidden="true"
            />
            <div className="relative font-mono text-sm">
              <p className="text-muted-foreground">
                <span className="text-accent">salih@soc</span>:~$ cat contact.txt
              </p>
              <div className="mt-4 space-y-2">
                <p>
                  <span className="text-muted-foreground">email &nbsp;&nbsp;:</span>{' '}
                  salihcalisici9@gmail.com
                </p>
                <p>
                  <span className="text-muted-foreground">github :</span> /salihcls
                </p>
                <p>
                  <span className="text-muted-foreground">linked :</span> /in/salihcls
                </p>
                <p>
                  <span className="text-muted-foreground">status :</span>{' '}
                  <span className="text-accent">open_to_work</span>
                </p>
                <p>
                  <span className="text-muted-foreground">focus &nbsp;:</span> blue_team ·
                  detection · dfir
                </p>
              </div>
              <p className="mt-4 text-muted-foreground cursor-blink">
                <span className="text-accent">salih@soc</span>:~${' '}
              </p>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <Shield className="size-4 text-primary" /> Salih CLS — Blue Team Portfolio
          </p>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} · Built with Next.js
          </p>
        </Reveal>
      </div>
    </section>
  )
}
