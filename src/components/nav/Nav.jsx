import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {BsGraphUp} from 'react-icons/bs'
import {MdOutlineExplore} from 'react-icons/md'
import {BiMessageSquareDetail} from 'react-icons/bi'
import {BsFillBasketFill} from 'react-icons/bs'
import {AiFillBulb} from 'react-icons/ai'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#');
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#'? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about'? 'active' : ''}><AiOutlineUser /></a>
      <a href="#formulation" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience'? 'active' : ''}><BiBook /></a>
      <a href="#collection" onClick={() => setActiveNav('#collection')} className={activeNav === '#collection'? 'active' : ''}><BsFillBasketFill /></a>
      <a href="#exploration" onClick={() => setActiveNav('#exploration')} className={activeNav === '#exploration'? 'active' : ''}><MdOutlineExplore /></a>
      <a href="#visualization" onClick={() => setActiveNav('#visualization')} className={activeNav === '#visualization'? 'active' : ''}><BsGraphUp /></a>
      <a href="#conclusion" onClick={() => setActiveNav('#conclusion')} className={activeNav === '#conclusion'? 'active' : ''}><AiFillBulb /></a>
      <a href="#team" onClick={() => setActiveNav('#team')} className={activeNav === '#team'? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav