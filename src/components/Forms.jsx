import { useState } from 'react'
import { cars, site, OTHER_CAR } from '../data/config'
import { wa, Reveal } from '../lib/ui'

// Saves to Netlify Forms (if deployed there) and opens WhatsApp with the details.
function Form({ name, button, build, children, light }) {
  const [sent, setSent] = useState(false)
  const submit = async (e) => {
    e.preventDefault()
    const data = Object.fromEntries(new FormData(e.target))
    if (data.car === OTHER_CAR) data.car = data.carOther || 'Not listed yet'
    try { await fetch('/', { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ 'form-name': name, ...data }).toString() }) } catch {}
    setSent(true)
    window.location.href = wa(build(data))
  }
  return (
    <form onSubmit={submit} className={`space-y-4 rounded-[30px] border p-6 shadow-[0_18px_45px_rgba(15,23,42,0.08)] ${light ? 'border-neutral-200 bg-white' : 'border-white/10 bg-white/5 backdrop-blur-sm'}`}>
      {children}
      <button className="btn btn-red w-full">{sent ? 'Sent. Opening WhatsApp…' : button}</button>
    </form>
  )
}

// Lets a customer pick a listed model OR type any other name — a brand-new
// launch, an older model, or a variant that isn't in the list yet.
const CarSelect = ({ def }) => {
  const [choice, setChoice] = useState(def || '')
  const isOther = choice === OTHER_CAR
  return (
    <div className="space-y-3">
      <select name="car" value={choice} onChange={(e) => setChoice(e.target.value)} required className="input">
        <option value="" disabled>Select a car</option>
        {cars.map((c) => <option key={c.id} value={c.name}>{c.name}</option>)}
        <option value={OTHER_CAR}>Other / new launch — type below</option>
      </select>
      {isOther && (
        <input name="carOther" required placeholder="Type the car name (e.g. a new launch)" className="input" />
      )}
    </div>
  )
}

export function TestDrive({ pick }) {
  return (
    <section id="drive" className="relative overflow-hidden bg-ink py-28 text-white">
      <div className="absolute -left-40 bottom-0 h-96 w-96 rounded-full bg-toyota/30 blur-[120px]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(239,68,68,0.12),_transparent_35%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
        <Reveal>
          <p className="mb-3 inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/70">Book a test drive</p>
          <h2 className="font-display text-4xl font-bold md:text-5xl">Drive it before you decide</h2>
          <p className="mt-4 max-w-md text-white/60">Fill this form and it will be sent directly on WhatsApp so you can book your test drive quickly.</p>
        </Reveal>
        <Reveal d={0.1}>
          <Form key={pick} name="test-drive" button="Send on WhatsApp"
            build={(d) => `Hi ${site.name.split(' ')[0]}, I'd like to book a test drive.\nName: ${d.name}\nPhone: ${d.phone}\nCar: ${d.car}\nWhen: ${d.when}\nLocation: ${d.location}`}>
            <input name="name" required placeholder="Full name" className="input" />
            <input name="phone" required type="tel" pattern="[0-9+ ]{10,14}" placeholder="Phone number" className="input" />
            <CarSelect def={pick} />
            <input name="when" required type="datetime-local" className="input" aria-label="Preferred date and time" />
            <input name="location" required placeholder="Pickup location" className="input" />
          </Form>
        </Reveal>
      </div>
    </section>
  )
}

export function Enquiry() {
  return (
    <section id="enquiry" className="mx-auto max-w-3xl px-5 py-28">
      <Reveal className="mb-10 text-center">
        <p className="mb-3 inline-flex rounded-full border border-red-200 bg-red-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.2em] text-toyota">Enquire now</p>
        <h2 className="font-display text-4xl font-bold md:text-5xl">Ask me anything</h2>
        <p className="mt-4 text-black/55">Prices, offers, finance, exchange. I reply within the hour in showroom hours.</p>
      </Reveal>
      <Reveal>
        <Form light name="enquiry" button="Send Enquiry"
          build={(d) => `Hi ${site.name.split(' ')[0]}, I have an enquiry.\nName: ${d.name}\nPhone: ${d.phone}\nCar: ${d.car}\nMessage: ${d.message}`}>
          <div className="grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="Full name" className="input" />
            <input name="phone" required type="tel" pattern="[0-9+ ]{10,14}" placeholder="Phone number" className="input" />
          </div>
          <CarSelect def="" />
          <textarea name="message" rows="4" required placeholder="Your message" className="input" />
        </Form>
      </Reveal>
    </section>
  )
}
