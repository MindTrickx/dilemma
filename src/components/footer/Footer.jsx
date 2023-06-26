import React from 'react'
import './footer.css'
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FiTwitter} from 'react-icons/fi'
import {TbBrandAmongUs} from 'react-icons/tb'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Dilemma</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#formulation">Formulation</a></li>
        <li><a href="#collection">Collection</a></li>
        <li><a href="#exploration">Exploration</a></li>
        <li><a href="#visualization">Visualization</a></li>
        <li><a href="#conclusion">Conclusion</a></li>
        <li><a href="#team">Team</a></li>
      </ul>

     
      
      <div className="footer__copyright">
        <small>"It is the powerless and the helpless who most need our love and protection, not the powerful"</small>
        <p>-Leila De Lima</p>
      </div>
    </footer>
  )
}

export default Footer