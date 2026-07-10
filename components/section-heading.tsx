import { Reveal } from '@/components/reveal'

interface SectionHeadingProps {
  index: string
  title: string
  subtitle?: string
}

export function SectionHeading({ index, title, subtitle }: SectionHeadingProps) {
  return (
    <Reveal className="mb-12">
      <p className="mb-2 font-mono text-xs text-primary">
        <span className="text-muted-foreground">{index}</span> // {title.toLowerCase()}
      </p>
      <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {subtitle}
        </p>
      )}
      <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/60 via-border to-transparent" />
    </Reveal>
  )
}
