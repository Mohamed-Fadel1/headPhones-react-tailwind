import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import { UpdateFollower } from 'react-mouse-follower';
import Hero from './Components/Hero/Hero';
import Services from './Components/Services/Services';
import About from './Components/About/About';
import AboutText from './Components/About/AboutText';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';


const App = () => {
  return (
   <>
    <UpdateFollower
        mouseOptions={{
          backgroundColor: 'white',
          zIndex: 2,
          followSpeed: 1.5,
        }}>
        <NavBar/>
        <Hero/>
        <Services/>
        <About/>
        <AboutText/>
        <Blog/>
        <Footer/>
    </UpdateFollower>
  
   </>
  )
}

export default App
