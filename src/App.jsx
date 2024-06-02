import React, { useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './sections/Hero'
import Stats from './sections/Stats'
import About from './sections/About'
import Features from './sections/Features'
import StartNow from './sections/StartNow'
import Contact from './sections/Contact'
import Lenis from '@studio-freight/lenis';

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.2, // Lowered the duration for faster scrolling
      easing: (t) => t, // Linear easing function for a consistent speed
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

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
