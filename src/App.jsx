import { useEffect, useState } from 'react'
import { Loader, Navbar, WhatsAppFab } from './components/Header'
import Hero from './components/Hero'
import Profile from './components/Profile'
import { CarGrid, CarDetail } from './components/Cars'
import { TestDrive, Enquiry } from './components/Forms'
import { HappyFamilies, Testimonials, Footer } from './components/Trust'

export default function App() {
  const [car, setCar] = useState(null)
  const [pick, setPick] = useState('')
  const [activeSection, setActiveSection] = useState(() => window.location.hash || '#top')
  const [isMobile, setIsMobile] = useState(() => window.matchMedia('(max-width: 767px)').matches)

  useEffect(() => {
    const query = window.matchMedia('(max-width: 767px)')
    const updateViewport = () => setIsMobile(query.matches)
    query.addEventListener('change', updateViewport)
    return () => query.removeEventListener('change', updateViewport)
  }, [])

  useEffect(() => {
    const syncSection = () => {
      setActiveSection(window.location.hash || '#top')
      if (window.matchMedia('(max-width: 767px)').matches) window.scrollTo(0, 0)
    }
    addEventListener('hashchange', syncSection)
    return () => removeEventListener('hashchange', syncSection)
  }, [])

  const navigateMobile = (hash) => {
    setActiveSection(hash)
    setCar(null)
    if (window.location.hash !== hash) window.location.hash = hash
    window.scrollTo(0, 0)
  }

  const book = (selectedCar) => {
    setPick(selectedCar.name)
    setCar(null)
    if (isMobile) navigateMobile('#drive')
    else setTimeout(() => document.getElementById('drive')?.scrollIntoView({ behavior: 'smooth' }), 150)
  }

  const mobileSections = {
    '#top': <Hero />,
    '#cars': <CarGrid onOpen={setCar} />,
    '#about': <Profile />,
    '#drive': <TestDrive pick={pick} />,
    '#happy-families': <HappyFamilies />,
    '#reviews': <Testimonials />,
    '#enquiry': <><Enquiry /><Footer /></>,
  }

  return (
    <>
      <Loader /><Navbar onMobileNavigate={navigateMobile} />
      {isMobile ? (
        <main className="pb-24">{mobileSections[activeSection] || <Hero />}</main>
      ) : (
        <>
          <main><Hero /><CarGrid onOpen={setCar} /><Profile /><TestDrive pick={pick} /><HappyFamilies /><Testimonials /><Enquiry /></main>
          <Footer />
        </>
      )}
      <WhatsAppFab /><CarDetail car={car} onClose={() => setCar(null)} onBook={book} />
    </>
  )
}
