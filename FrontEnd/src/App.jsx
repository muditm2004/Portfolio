import React from 'react'
import Navbar from './assets/Components/Navbar'
import Hero from './assets/Components/Hero'
import AnimeBG from './assets/Components/AnimeBG'
import About from './assets/Components/About'
import Projects from './assets/Components/Projects'
import Experience from './assets/Components/Experience'
import Education from './assets/Components/Education'
import ContactForm from './assets/Components/ContactForm'

export default function App() {
  return (
    <>
    {/* <AnimeBG/> */}
    <Navbar/>
    <Hero/>
    <About/>
    <Projects/>
    <Experience/>
    <Education/>
    <ContactForm/>
    </>
  )
}
