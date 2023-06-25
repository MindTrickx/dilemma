import React from 'react'
import POSTER from '../../assets/poster.pdf'
const CTA = () => {
  return (
    <div className='cta'>
      <a href="#about" className='btn'>About Us</a>
      <a href={POSTER} download className='btn btn-primary'>Download Poster</a>
    </div>
  )
}

export default CTA