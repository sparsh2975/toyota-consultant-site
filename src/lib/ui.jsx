import { motion } from 'framer-motion'
import { site } from '../data/config'
export const wa = (t) => `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(t)}`
export const HELLO = "Hi, I'm interested in Toyota cars. Please assist me."
export const Reveal = ({ children, d = 0, className = '' }) => (
  <motion.div className={className} initial={{ opacity: 0, y: 36 }} whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.8, delay: d, ease: [0.22, 1, 0.36, 1] }}>{children}</motion.div>
)
export const Heading = ({ title, sub, light }) => (
  <Reveal className="mb-12 max-w-2xl">
    <h2 className={`font-display text-4xl md:text-5xl font-bold tracking-tight ${light ? 'text-white' : ''}`}>{title}</h2>
    {sub && <p className={`mt-4 text-lg ${light ? 'text-white/60' : 'text-black/55'}`}>{sub}</p>}
  </Reveal>
)
export const WaIcon = () => (<svg viewBox="0 0 24 24" className="h-6 w-6 fill-current"><path d="M12 2a10 10 0 0 0-8.6 15L2 22l5.1-1.3A10 10 0 1 0 12 2Zm5.8 14.1c-.2.7-1.4 1.3-2 1.4-.5.1-1.2.1-1.9-.1a13 13 0 0 1-5.6-4.9c-.4-.6-1.4-1.9-1.4-3.5s.9-2.3 1.2-2.6c.3-.3.6-.4.8-.4h.6c.2 0 .5 0 .7.6l1 2.3c.1.2.1.4 0 .6l-.4.6-.4.5c-.2.2-.3.4-.1.7.7 1.200 1.900 2.100 3 2.700.3.100.5.100.7-.1l.9-1.100c.2-.3.4-.2.700-.1l2 .9c.3.100.5.200.500.400.100.300.100 1.100-.2 1.500Z"/></svg>)
