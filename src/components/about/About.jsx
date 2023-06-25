import React from 'react'
import './about.css'
import ME from '../../assets/Logo.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get to Know</h5>
      <h2>About Us</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Wilson De Torres</h5>
              <small>WFX</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Wendelle Ortiz</h5>
              <small>WFX</small>
            </article>

            <article className='about__card'>
              <FiUsers className='about__icon'/>
              <h5>Petter Sapalo</h5>
              <small>WFW</small>
            </article>
            
          </div>

          <p>
          Hi. We are Dilemma, and this is our project Leila Dilemma: Tweet Analysis on Illegal Drug Accusation to Leila De Lima, a time series analysis on the relationship of the illegal drug accusation tweets on Leila De Lima and the Philippine history in political context.
          </p>
          <a href="#team" className='btn btn-primary'>More About Us</a>
        </div>
      </div>
    </section>
  )
}

export default About