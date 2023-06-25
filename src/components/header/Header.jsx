import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/leila_3.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5 className='text-light'>Hi! This is our project</h5>
        <h1 className='title'>Leila<span className='main'> Dilemma</span>: Tweet Analysis on Illegal Drug Accusation to <span className='pink'>Leila De Lima</span></h1>
        <CTA />

        <HeaderSocials />

        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className="scroll__down">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header