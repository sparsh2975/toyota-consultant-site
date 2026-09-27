import { useState } from 'react'
import { Loader, Navbar, WhatsAppFab } from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import { CarGrid, CarDetail } from './components/Cars'
import { TestDrive, Enquiry } from './components/Forms'
import { HappyFamilies, Testimonials, Footer } from './components/Trust'

export default function App() {
  const [car, setCar] = useState(null)
  const [pick, setPick] = useState('')
  const book = (c) => { setPick(c.name); setCar(null); setTimeout(() => document.getElementById('drive')?.scrollIntoView({ behavior: 'smooth' }), 150) }
  return (
    <>
      <Loader /><Navbar />
      <main><Hero /><CarGrid onOpen={setCar} /><Profile /><TestDrive pick={pick} /><HappyFamilies /><Testimonials /><Enquiry /></main>
      <Footer /><WhatsAppFab /><CarDetail car={car} onClose={() => setCar(null)} onBook={book} />
    </>
  )
}
