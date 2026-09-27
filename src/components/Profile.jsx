import { site } from '../data/config'
import { Reveal, Heading } from '../lib/ui'

export default function Profile() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-28">
      <div className="grid items-center gap-12 rounded-[32px] border border-neutral-200 bg-neutral-50 p-6 shadow-[0_22px_60px_rgba(15,23,42,0.06)] md:grid-cols-2 md:p-10">
        <Reveal>
          <div className="relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white p-3 shadow-xl">
            <img loading="lazy" src={site.photo} alt={site.name} className="aspect-square w-full rounded-[22px] object-cover object-top" />
            <div className="absolute bottom-7 left-7 rounded-full bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-sm">{site.role}</div>
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-toyota">About the consultant</p>
          </Reveal>
          <Heading title={`Why buy your Toyota with ${site.name.split(' ')[0]}`} sub={site.message} />

          <Reveal className="mb-8 mt-10 grid grid-cols-3 gap-4">
            {site.stats.map((s) => (
              <div key={s.l} className="rounded-2xl border border-neutral-200 bg-white p-4 shadow-sm">
                <p className="font-display text-2xl font-bold text-toyota md:text-3xl">{s.v}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-black/60">{s.l}</p>
              </div>
            ))}
          </Reveal>

          <Reveal className="flex flex-wrap gap-3">
            {site.badges.map((b) => (
              <span key={b} className="rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-black/75">✓ {b}</span>
            ))}
          </Reveal>

          <Reveal className="mt-8 rounded-2xl border border-neutral-200 bg-white p-4 text-sm text-black/65 shadow-sm">
            <span className="font-semibold text-black">{site.company}</span> · {site.address}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
