import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import VideoSection1 from './components/VideoSection1'
import CompanyInfo from './components/BelowVid1'
import CompanyUpdates from './components/CompanyUpdated'
import VideoSection2 from './components/Video2'
import VideoWithStatsSection from './components/Video3'
import Testimonials from './components/Testimonials'
import Developers from './components/Developers'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Hero />
      <CompanyInfo />
      <VideoSection1 />
      <CompanyUpdates />
      <VideoSection2/>
      <VideoWithStatsSection/>
      <Developers/>
      <Testimonials/>
      <Footer />
    </>
  )
}

export default App
