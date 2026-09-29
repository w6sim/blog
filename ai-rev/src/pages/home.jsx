import React from 'react'

function Home() {
  return (
    <>
      <Navbar/>
      <main>
        <HeroSection/>
        <AiTypes/>
        <AiBenefits/>
        <contact/>
      </main>

      <Footer/>
    </>
  )
}

export default Home