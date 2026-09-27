import { motion, AnimatePresence } from 'framer-motion'
import { cars } from '../data/config'
import { Reveal, Heading } from '../lib/ui'

const Pic = ({ car, className = '' }) => car.image
  ? <img loading="lazy" src={car.image} alt={car.name} className={`object-cover ${className}`} onError={(event) => {
      event.currentTarget.onerror = null
      event.currentTarget.src = '/cars/car-placeholder.svg'
    }} />
  : <div className={`flex items-end bg-gradient-to-br from-neutral-900 via-neutral-800 to-toyota/70 p-5 ${className}`}><span className="font-display text-2xl font-bold text-white/90">{car.name}</span></div>

export function CarGrid({ onOpen }) {
  return (
    <section id="cars" className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.06),_transparent_40%)] py-10 md:py-28">
      <div className="mx-auto max-w-7xl px-5">
        <Heading title="Find your Toyota" sub="Six ways to move. Open any model for features, specs and a test drive." />
        <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
          {cars.map((c, i) => (
            <Reveal key={c.id} d={(i % 3) * 0.08}>
              <motion.article whileHover={{ y: -8 }} className="group overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_16px_45px_rgba(15,23,42,0.08)] transition-all duration-300 hover:border-red-200 hover:shadow-[0_26px_60px_rgba(15,23,42,0.12)] md:rounded-[28px]">
                <div className="relative overflow-hidden">
                  <Pic car={c} className="aspect-[16/10] w-full transition duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
                </div>
                <div className="p-4 md:p-6">
                  <p className="inline-flex rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-toyota">{c.tag}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-black">{c.name}</h3>
                  <p className="mt-1 text-black/60">Starting {c.price}</p>
                  <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-black/70">{c.specs.map((s) => <li key={s} className="flex items-center gap-2"><span className="inline-block h-1.5 w-1.5 rounded-full bg-toyota" />{s}</li>)}</ul>
                  <button onClick={() => onOpen(c)} className="btn btn-red mt-6 w-full">View Details</button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8 text-xs text-black/40">
          *Ex-showroom starting prices, indicative — ask for today's on-road price and offers.
          Don't see the model you want? Ask below, or browse the full range at{' '}
          <a href="https://www.toyotabharat.com/" target="_blank" rel="noreferrer" className="underline hover:text-toyota">toyotabharat.com</a>.
        </Reveal>
      </div>
    </section>
  )
}

export function CarDetail({ car, onClose, onBook }) {
  return (
    <AnimatePresence>
      {car && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] overflow-y-auto bg-ink/80 backdrop-blur-md" onClick={onClose}>
          <motion.div initial={{ y: 80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 80, opacity: 0 }} transition={{ type: 'spring', damping: 28 }}
            onClick={(e) => e.stopPropagation()} className="mx-auto my-6 max-w-4xl overflow-hidden rounded-[32px] border border-neutral-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.32)]">
            <div className="relative">
              <Pic car={car} className="aspect-[16/8] w-full" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/50 text-lg text-white backdrop-blur-sm transition hover:bg-black/70">✕</button>
            </div>
            <div className="p-8">
              <p className="inline-flex rounded-full bg-red-50 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-toyota">{car.tag}</p>
              <h3 className="mt-4 font-display text-4xl font-bold">{car.name}</h3>
              <p className="mt-1 text-lg text-black/55">Starting {car.price}</p>
              <div className="mt-8 grid gap-10 md:grid-cols-2">
                <div><h4 className="mb-3 font-display font-semibold">Key features</h4><ul className="space-y-2 text-black/70">{car.features.map((f) => <li key={f} className="flex items-start gap-2"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-toyota" />{f}</li>)}</ul></div>
                <div><h4 className="mb-3 font-display font-semibold">Specifications</h4>
                  <dl className="divide-y divide-black/5 text-sm">{Object.entries(car.spec).map(([k, v]) => <div key={k} className="flex justify-between py-2.5"><dt className="text-black/50">{k}</dt><dd className="font-medium">{v}</dd></div>)}</dl></div>
              </div>
              <button onClick={() => onBook(car)} className="btn btn-red mt-10">Book test drive for {car.name}</button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
