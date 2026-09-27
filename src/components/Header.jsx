import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { site } from '../data/config'
import { wa, HELLO, WaIcon } from '../lib/ui'

export const Loader = () => {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1700)
    return () => clearTimeout(t)
  }, [])

  return (
    <AnimatePresence>
      {show && (
        <motion.div exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.7 }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink">
          <motion.svg viewBox="0 0 120 80" className="w-32" fill="none" stroke="#EB0A1E" strokeWidth="3">
            <motion.ellipse cx="60" cy="40" rx="55" ry="35" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2 }} />
            <motion.ellipse cx="60" cy="40" rx="18" ry="34" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.2 }} />
            <motion.ellipse cx="60" cy="27" rx="35" ry="13" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.2, delay: 0.4 }} />
          </motion.svg>
          <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-6 font-display text-sm tracking-[0.3em] text-white/70">{site.name}</motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const Navbar = () => {
  const [solid, setSolid] = useState(false)
  useEffect(() => { const f = () => setSolid(scrollY > 60); addEventListener('scroll', f); return () => removeEventListener('scroll', f) }, [])
  const links = [['Cars', '#cars'], ['About', '#about'], ['Reviews', '#reviews'], ['Enquire', '#enquiry']]
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${solid ? 'glass !bg-ink/70' : ''}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 text-white">
        <a href="#top" className="font-display text-lg font-bold">{site.name}<span className="text-toyota">.</span></a>
        <div className="hidden gap-8 text-sm md:flex">{links.map(([l, h]) => <a key={h} href={h} className="opacity-80 transition hover:text-toyota hover:opacity-100">{l}</a>)}</div>
        <a href="#drive" className="btn btn-red !px-5 !py-2.5">Book test drive</a>
      </nav>
    </header>
  )
}

export const WhatsAppFab = () => (
  <motion.a href={wa(HELLO)} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, type: 'spring' }} whileHover={{ scale: 1.1 }}
    className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,.5)]">
    <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" /><span className="relative"><WaIcon /></span>
  </motion.a>
)
