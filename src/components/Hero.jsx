import { motion } from 'framer-motion'
import { site } from '../data/config'
import { wa, HELLO } from '../lib/ui'

export default function Hero() {
  const up = (d) => ({ initial: { opacity: 0, y: 40 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.9, delay: 1.8 + d, ease: [0.22, 1, 0.36, 1] } })
  return (
    <section id="top" className="relative flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-ink text-white md:min-h-screen">
      {site.heroVideo && <video src={site.heroVideo} autoPlay muted loop playsInline className="absolute inset-0 h-full w-full object-cover opacity-50" />}
      {site.heroImage && !site.heroVideo && <img src={site.heroImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-50" />}
      <div className="absolute -right-20 top-16 h-[440px] w-[440px] rounded-full bg-toyota/25 blur-[120px]" />
      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-red-500/10 blur-[100px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.18),_transparent_50%)]" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/30 to-ink/70" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-7 px-4 pb-28 pt-24 md:grid-cols-[1.2fr_.8fr] md:gap-12 md:px-5 md:pb-0 md:pt-24">
        <div className="max-w-xl">
          <motion.p {...up(0)} className="mb-4 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/75 md:mb-5 md:text-xs md:tracking-[0.22em]">{site.dealer} · {site.city}</motion.p>
          <motion.div {...up(0.1)} className="mb-5 flex items-center gap-4 md:hidden">
            <img src={site.photo} alt={`${site.name}, ${site.role}`} className="h-32 w-24 shrink-0 rounded-2xl border border-white/20 object-cover object-top shadow-xl" />
            <div className="min-w-0">
              <p className="truncate font-display text-lg font-semibold text-white">{site.name}</p>
              <p className="mt-1 text-sm text-white/65">{site.role}</p>
              <p className="mt-2 text-xs leading-5 text-white/50">{site.dealer}<br />{site.city}</p>
            </div>
          </motion.div>
          <motion.h1 {...up(0.15)} className="font-display text-[1.625rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl md:text-7xl">Your Trusted<br />Toyota Consultant</motion.h1>
          <motion.p {...up(0.3)} className="mt-4 max-w-xl text-base leading-7 text-white/75 md:mt-6 md:text-lg md:leading-8">I'm {site.name}. Tell me what you drive today and what you need tomorrow, and I'll find the Toyota that fits.</motion.p>
          <motion.div {...up(0.45)} className="mt-6 flex flex-wrap gap-3 md:mt-9 md:gap-4">
            <a href="#drive" className="btn btn-red !px-4 !py-3 text-xs md:!px-7 md:!py-3.5 md:text-sm">Book Test Drive</a>
            <a href={wa(HELLO)} target="_blank" rel="noreferrer" className="btn btn-ghost !px-4 !py-3 text-xs md:!px-7 md:!py-3.5 md:text-sm">Chat on WhatsApp</a>
          </motion.div>
        </div>
        <motion.div {...up(0.3)} className="glass relative mx-auto hidden w-full max-w-sm rounded-[2rem] p-3 md:block">
          <div className="absolute -left-6 top-6 h-20 w-20 rounded-full border border-white/15 bg-white/5 blur-sm" />
          <img src={site.photo} alt={`${site.name}, ${site.role} at ${site.dealer}`} className="aspect-[4/5] w-full rounded-[1.5rem] object-cover object-top" />
          <div className="px-3 pb-2 pt-4">
            <p className="font-display text-xl font-semibold text-white">{site.name}</p>
            <p className="text-sm text-white/60">{site.role}, {site.dealer}</p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
