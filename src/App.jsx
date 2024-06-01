import React from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import About from './sections/About'
import Features from './sections/Features'
import StartNow from './sections/StartNow'
import Contact from './sections/Contact'

const App = () => {
  return (
    <main className=''>
      <Header />
      <Hero />
      <Stats />
      <About />
      <Features />
      <StartNow />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
