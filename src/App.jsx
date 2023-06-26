import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Experience from './components/experience/Experience'
import Services from './components/services/Services'
import Portfolio from './components/portfolio/Portfolio'
import Team from './components/team/Team'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'
import Data_exploration from './components/data_exploration/Data_exploration'
import Preprocess from './components/preprocess/Preprocess'
import Visualization from './components/visualization/Visualization'
import Modeling from './components/modeling/Modeling'

const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Portfolio />
      <Experience />
      <Preprocess />
      <Visualization />
      <Modeling />
      <Services />
      
      
      
      <Team />

      <Footer />
    </>
  )
}

export default App