import React from 'react'
import Navbar from '../components/navbar';
import HeroSection from '../components/heroSection';
import AiTypes from '../components/aiTypes';
import AiBenefits from '../components/aiBenefits';
import Contact from '../components/contact';
import Footer from '../components/footer';

function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <HeroSection/>
        <AiTypes/>
        <AiBenefits/>
        <Contact/>
      </main>

      <Footer/>
    </>
  )
}

export default Home