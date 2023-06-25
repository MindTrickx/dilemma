import React from 'react'
import {FaFacebook} from 'react-icons/fa'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiDribbble} from 'react-icons/fi'
import {TbBrandAmongUs} from 'react-icons/tb'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
      <a href="https://github.com" target="_blank"><FaGithub /></a>
      <a href="https://dribbble.com" target="_blank"><FiDribbble /></a>
      <a href="https://www.youtube.com/watch?v=xvFZjo5PgG0" target="_blank"><TbBrandAmongUs /></a>
    </div>
  )
}

export default HeaderSocials