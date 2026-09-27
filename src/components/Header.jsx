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

export const Navbar = ({ onMobileNavigate }) => {
  const [solid, setSolid] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeLink, setActiveLink] = useState('#top')

  useEffect(() => { const f = () => setSolid(scrollY > 60); addEventListener('scroll', f); return () => removeEventListener('scroll', f) }, [])

  useEffect(() => {
    const syncActiveLink = () => setActiveLink(window.location.hash || '#top')
    addEventListener('hashchange', syncActiveLink)
    syncActiveLink()
    return () => removeEventListener('hashchange', syncActiveLink)
  }, [])

  useEffect(() => {
    if (!menuOpen) return

    const previousOverflow = document.body.style.overflow
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'
    addEventListener('keydown', closeOnEscape)
    return () => {
      document.body.style.overflow = previousOverflow
      removeEventListener('keydown', closeOnEscape)
    }
  }, [menuOpen])

  const desktopLinks = [['Cars', '#cars'], ['About', '#about'], ['Reviews', '#reviews'], ['Enquire', '#enquiry']]
  const mobileLinks = [
    ['Home', '#top'],
    ['Cars', '#cars'],
    ['Profile & About', '#about'],
    ['Book a test drive', '#drive'],
    ['Happy families', '#happy-families'],
    ['Customer reviews', '#reviews'],
    ['Enquire', '#enquiry'],
  ]
  const closeMenu = () => setMenuOpen(false)
  const navigateMobile = (href) => {
    setActiveLink(href)
    closeMenu()
    onMobileNavigate?.(href)
  }

  return (
    <>
      <header className={`fixed inset-x-0 top-0 z-50 transition duration-500 ${solid ? 'glass !bg-ink/70' : ''}`}>
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-3 text-white md:px-5 md:py-4">
          <button type="button" onClick={() => setMenuOpen(true)} aria-label="Open navigation menu" aria-expanded={menuOpen} aria-controls="mobile-navigation"
            className="flex h-11 w-11 shrink-0 flex-col items-center justify-center gap-[5px] rounded-xl border border-white/20 bg-white/10 transition hover:bg-white/20 md:hidden">
            <span className="h-0.5 w-5 rounded bg-white" />
            <span className="h-0.5 w-5 rounded bg-white" />
            <span className="h-0.5 w-5 rounded bg-white" />
          </button>
          <a href="#top" className="truncate font-display text-base font-bold md:text-lg">{site.name}<span className="text-toyota">.</span></a>
          <div className="hidden gap-8 text-sm md:flex">{desktopLinks.map(([label, href]) => <a key={href} href={href} className="opacity-80 transition hover:text-toyota hover:opacity-100">{label}</a>)}</div>
          <a href="#drive" className="btn btn-red shrink-0 !px-3 !py-2.5 text-xs sm:!px-5 sm:text-sm">
            <span className="sm:hidden">Book</span><span className="hidden sm:inline">Book test drive</span>
          </a>
        </nav>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button type="button" aria-label="Close navigation menu" onClick={closeMenu}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              className="fixed inset-0 z-[60] bg-ink/55 backdrop-blur-sm md:hidden" />
            <motion.aside id="mobile-navigation" aria-label="Mobile navigation"
              initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ duration: 0.24, ease: 'easeOut' }}
              className="fixed inset-y-0 left-0 z-[61] flex w-[min(86vw,340px)] flex-col bg-white text-ink shadow-2xl md:hidden">
              <div className="flex items-center gap-3 border-b border-neutral-200 p-5">
                <img src={site.photo} alt="" className="h-12 w-12 shrink-0 rounded-full border-2 border-red-100 object-cover object-top" />
                <div className="min-w-0 flex-1">
                  <p className="truncate font-display text-base font-bold">{site.name}</p>
                  <p className="mt-0.5 truncate text-xs text-black/55">{site.role} · {site.dealer}</p>
                </div>
                <button type="button" onClick={closeMenu} aria-label="Close navigation menu"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-neutral-200 text-xl text-black/65 hover:bg-neutral-100">
                  <span aria-hidden="true">×</span>
                </button>
              </div>

              <nav className="flex-1 overflow-y-auto px-3 py-5" aria-label="Site sections">
                <p className="px-3 pb-3 text-[10px] font-bold uppercase tracking-[0.2em] text-black/40">Explore</p>
                <div className="space-y-1">
                  {mobileLinks.map(([label, href], index) => (
                    <a key={href} href={href} onClick={(event) => { event.preventDefault(); navigateMobile(href) }}
                      aria-current={activeLink === href ? 'page' : undefined}
                      className={`flex min-h-12 items-center gap-3 rounded-xl px-3 text-sm font-medium transition ${activeLink === href ? 'bg-red-50 text-toyota' : 'text-black/70 hover:bg-neutral-100 hover:text-ink'}`}>
                      <span className={`w-6 text-[10px] font-semibold tabular-nums ${activeLink === href ? 'text-toyota' : 'text-black/35'}`}>{String(index + 1).padStart(2, '0')}</span>
                      <span>{label}</span>
                      {activeLink === href && <span className="ml-auto h-1.5 w-1.5 rounded-full bg-toyota" />}
                    </a>
                  ))}
                </div>
              </nav>

              <div className="space-y-2 border-t border-neutral-200 p-4">
                <a href="#drive" onClick={closeMenu} className="btn btn-red w-full !rounded-xl !py-3">Book a test drive</a>
                <a href={wa(HELLO)} target="_blank" rel="noreferrer" onClick={closeMenu}
                  className="flex min-h-11 w-full items-center justify-center rounded-xl border border-neutral-200 text-sm font-semibold text-black/70 transition hover:bg-neutral-100">
                  Chat on WhatsApp
                </a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>

      <nav aria-label="Mobile section navigation" className="fixed inset-x-0 bottom-0 z-40 border-t border-neutral-200 bg-white/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-8px_24px_rgba(15,23,42,0.08)] backdrop-blur-md md:hidden">
        <div className="mx-auto flex h-16 max-w-xl items-stretch px-2">
          {[['Home', '#top'], ['Cars', '#cars'], ['Profile', '#about'], ['Reviews', '#reviews']].map(([label, href]) => (
            <a key={href} href={href} onClick={(event) => { event.preventDefault(); navigateMobile(href) }} aria-current={activeLink === href ? 'page' : undefined}
              className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1 text-[11px] font-semibold transition ${activeLink === href ? 'text-toyota' : 'text-black/55 hover:text-ink'}`}>
              <span className={`h-1 w-5 rounded-full ${activeLink === href ? 'bg-toyota' : 'bg-transparent'}`} />
              <span>{label}</span>
            </a>
          ))}
          <button type="button" onClick={() => setMenuOpen(true)} aria-expanded={menuOpen} aria-controls="mobile-navigation"
            className={`flex min-w-0 flex-1 flex-col items-center justify-center gap-1 text-[11px] font-semibold transition ${menuOpen ? 'text-toyota' : 'text-black/55 hover:text-ink'}`}>
            <span className={`h-1 w-5 rounded-full ${menuOpen ? 'bg-toyota' : 'bg-transparent'}`} />
            <span>More</span>
          </button>
        </div>
      </nav>
    </>
  )
}

export const WhatsAppFab = () => (
  <motion.a href={wa(HELLO)} target="_blank" rel="noreferrer" aria-label="Chat on WhatsApp"
    initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 2, type: 'spring' }} whileHover={{ scale: 1.1 }}
    className="fixed bottom-[5.5rem] right-4 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,.5)] md:bottom-5 md:right-5 md:h-14 md:w-14">
    <span className="absolute inset-0 animate-ping rounded-full bg-[#25D366]/40" /><span className="relative"><WaIcon /></span>
  </motion.a>
)
