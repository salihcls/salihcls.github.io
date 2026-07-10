import { ArrowDown, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from '@/components/brand-icons'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-24"
    >
      {/* Animated grid + glow backdrop */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-70" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -top-40 right-[-10%] size-[520px] rounded-full bg-primary/20 blur-[140px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background to-transparent"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid w-full max-w-6xl items-center gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1.3fr_1fr]">
        <div className="reveal is-visible">
          <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-accent" />
            </span>
            Available for SOC Analyst / Blue Team roles
          </p>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Hi, I&apos;m Salih CLS
          </h1>

          <p className="mt-4 font-mono text-sm text-primary sm:text-base cursor-blink">
            Cyber Security Student | SOC Analyst Candidate | Blue Team Enthusiast
          </p>

          <p className="mt-6 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            I defend systems by learning how they break. My focus is detection engineering,
            log analysis, and incident response — built hands-on in a self-managed home lab
            running Wazuh, Windows telemetry, and MITRE ATT&amp;CK-driven investigations.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="https://github.com/salihcls"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              <GithubIcon className="size-4" /> GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/muhammetsalihcalisici/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-border bg-card/60 px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
            >
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
          </div>

          <p className="mt-6 inline-flex items-center gap-2 font-mono text-xs text-muted-foreground">
            <MapPin className="size-3.5" /> Gaziantep, Türkiye
          </p>
        </div>

        {/* Portrait */}
        <div className="reveal is-visible relative mx-auto w-full max-w-xs md:max-w-none">
          <div className="animate-float relative">
            <div className="absolute -inset-3 rounded-2xl bg-gradient-to-br from-primary/40 to-transparent blur-2xl"></div>
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card">
              <img
                src="/images/salih-profil.jpeg"
                alt="Salih CLS Profil"
                className="h-auto w-full object-cover"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent"></div>
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between rounded-md border border-border bg-background/70 px-3 py-2 font-mono text-[11px] backdrop-blur">
                <span className="text-muted-foreground">status:</span>
                <span className="text-accent">monitoring_threats</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 font-mono text-xs text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
      >
        <ArrowDown className="size-4 animate-bounce" /> scroll
      </a>
    </section>
  )
}