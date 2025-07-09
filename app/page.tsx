'use client'

import {Benefits} from './components/Benefits'
import FAQ from './components/Faq'
import NavBar from './components/NavBar'
import { faqs } from './constants'
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
      <Benefits />
      <ExperienceSection />
      <TechStack />
      <Testimonials />
      <FAQ faqs={faqs} />
      <Contact />
      <Footer />
    </>
  )
}
