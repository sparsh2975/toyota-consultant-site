import { reviews, happyFamilies, site } from '../data/config'
import { Reveal, Heading, wa, HELLO } from '../lib/ui'

export function HappyFamilies() {
  const gallery = happyFamilies || []

  if (!gallery.length) return null

  return (
    <section id="happy-families" className="relative overflow-hidden bg-gradient-to-b from-white via-neutral-50 to-neutral-100 py-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.12),_transparent_70%)]" />
      <div className="mx-auto max-w-7xl px-5 relative">
        <Heading title="Happy families" sub="Moments from customers who chose their Toyota with us." />
        <div className="grid gap-7 md:grid-cols-3">
          {gallery.map((item, i) => (
            <Reveal key={item.title || i} d={i * 0.08}>
              <figure className="group relative overflow-hidden rounded-[28px] border border-neutral-200 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.08)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_28px_60px_rgba(15,23,42,0.14)]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/72 via-black/5 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
                <img src={item.image} alt={item.title || 'Happy family photo'} className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <figcaption className="absolute inset-x-0 bottom-0 z-10 p-5 text-white">
                  <p className="font-display text-xl font-bold uppercase tracking-wide">{item.title}</p>
                  {item.caption && <p className="mt-2 whitespace-pre-line text-sm text-white/80">{item.caption}</p>}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  return (
    <section id="reviews" className="relative bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.06),_transparent_28%)] py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Heading title="Words from Toyota owners" />
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} d={i * 0.1}>
              <figure className="group h-full rounded-[28px] border border-neutral-200 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)]">
                <div className="text-lg text-toyota" aria-label={`${r.r} stars`}>{'★'.repeat(r.r)}</div>
                <blockquote className="mt-4 text-base leading-7 text-black/75">{r.t}</blockquote>
                <figcaption className="mt-6 border-t border-neutral-200 pt-4 text-sm"><b>{r.n}</b><span className="text-black/45"> · {r.c}</span></figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Footer() {
  const phone = site.phone || '+91 00000 00000'
  const socials = site.socials || {}
  const phoneHref = phone ? `tel:${phone.replace(/\s/g, '')}` : '#'

  return (
    <footer className="bg-ink px-5 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl font-bold">{site.name}<span className="text-toyota">.</span></p>
          <p className="mt-2 text-white/60">{site.role}, {site.dealer}<br />{site.company}</p>
          <a href={wa(HELLO)} target="_blank" rel="noreferrer" className="btn btn-red mt-6">Chat on WhatsApp</a>
        </div>
        <div className="space-y-2 text-sm text-white/70">
          <p className="font-display text-white">Contact</p>
          <p><a href={phoneHref} className="hover:text-toyota">{phone}</a></p>
          <p>Sales: {site.salesLine} · Service: {site.serviceLine}</p>
          <p><a href={`mailto:${site.email}`} className="hover:text-toyota">{site.email}</a></p>
          <p>{site.address}</p>
        </div>
        <div className="text-sm text-white/70">
          <p className="mb-2 font-display text-white">Follow</p>
          <div className="flex gap-5">{Object.entries(socials).map(([k, v]) => <a key={k} href={v || '#'} className="capitalize hover:text-toyota">{k}</a>)}</div>
          <p className="mt-6"><a href="https://www.toyotabharat.com/" target="_blank" rel="noreferrer" className="underline hover:text-toyota">Toyota India official site ↗</a></p>
        </div>
      </div>
      <p className="mx-auto mt-12 max-w-7xl border-t border-white/10 pt-6 text-xs text-white/40">© {new Date().getFullYear()} {site.name}, {site.dealer}. Independent consultant site for an authorised Toyota dealership, for reference and enquiries only — not affiliated with or endorsed by Toyota Motor Corporation. Toyota, the Toyota logo and all car photography remain the property of Toyota Motor Corporation; see <a href="https://www.toyotabharat.com/" target="_blank" rel="noreferrer" className="underline">toyotabharat.com</a> for official specifications, images and pricing.</p>
    </footer>
  )
}
