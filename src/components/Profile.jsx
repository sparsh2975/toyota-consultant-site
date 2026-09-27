import { site } from '../data/config'
import { Reveal, Heading } from '../lib/ui'

export default function Profile() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-10 md:px-5 md:py-28">
      <div className="grid items-center gap-6 rounded-3xl border border-neutral-200 bg-neutral-50 p-4 shadow-[0_22px_60px_rgba(15,23,42,0.06)] md:grid-cols-2 md:gap-12 md:rounded-[32px] md:p-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-2 shadow-xl md:rounded-[28px] md:p-3">
            <img loading="lazy" src={site.photo} alt={site.name} className="aspect-square w-full rounded-xl object-cover object-top md:rounded-[22px]" />
            <div className="absolute bottom-5 left-5 rounded-full bg-black/60 px-3 py-1.5 text-xs text-white backdrop-blur-sm md:bottom-7 md:left-7 md:px-4 md:py-2 md:text-sm">{site.role}</div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-toyota">About the consultant</p>
          </Reveal>
          <Heading title={`Why buy your Toyota with ${site.name.split(' ')[0]}`} sub={site.message} />

          <Reveal className="mb-6 mt-6 grid grid-cols-3 gap-2 sm:gap-4 md:mb-8 md:mt-10">
            {site.stats.map((s) => (
              <div key={s.l} className="min-w-0 rounded-xl border border-neutral-200 bg-white p-2.5 shadow-sm sm:p-4 md:rounded-2xl">
                <p className="font-display text-xl font-bold text-toyota md:text-3xl">{s.v}</p>
                <p className="mt-1 text-[10px] leading-relaxed text-black/60 sm:text-[11px]">{s.l}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="flex flex-wrap gap-2 md:gap-3">
            {site.badges.map((b) => (
              <span key={b} className="rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-xs font-medium text-black/75 md:px-4 md:py-2 md:text-sm">✓ {b}</span>
            ))}
          </Reveal>

          <Reveal className="mt-5 rounded-xl border border-neutral-200 bg-white p-3 text-xs leading-5 text-black/65 shadow-sm md:mt-8 md:rounded-2xl md:p-4 md:text-sm">
            <span className="font-semibold text-black">{site.company}</span> · {site.address}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
