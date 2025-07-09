'use client'

import NavBar from './components/NavBar'
import Contact from './sections/Contact'
import ExperienceSection from './sections/ExperienceSection'
import FeatureCards from './sections/FeatureCards'
import Footer from './sections/Footer'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import TechStack from './sections/TechStack'
import Testimonials from './sections/Testimonials'

export default function HomePage() {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}
