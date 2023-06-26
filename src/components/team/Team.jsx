import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import PETTER from '../../assets/petter.jpg'
import WILSON from '../../assets/wilson.jpg'
import WENDELLE from '../../assets/wendelle.jpg'
import AVTR2 from '../../assets/avatar2.jpg'
import AVTR3 from '../../assets/avatar3.jpg'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import {Pagination, Navigation} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


const data = [
  {
    avatar: WILSON,
    name: 'Wilson Adrian De Torres',
    review: "Hello, I'm a passionate computer science student eager to delve into the exciting world of technology and innovation. From a young age, I've been captivated by the endless possibilities that coding and problem-solving can offer.",
    email: "wddetorres@up.edu.ph"
  },
  {
    avatar: WENDELLE,
    name: 'Charles Wendelle Ortiz',
    review: "As a computer science student, I thrive on the intellectual challenges that arise within the realm of computing. For me, programming is not just a means to an end; it's a medium through which I express my creativity and bring innovative ideas to life.",
    email: "cdortiz2@up.edu.ph"
  },
  {
    avatar: PETTER,
    name: 'Petter Sapalo',
    review: "I'm a computer science enthusiast on a mission to unravel the mysteries of the digital universe. What started as a hobby quickly turned into a lifelong passion, as I discovered the immense potential of technology to transform lives.",
    email: "pbsapalo@up.edu.ph"
  },
]

const Team = () => {
  return (
    <section id='team'>
      <h5>Meet</h5>
      <h2>The Team</h2>

      <Swiper className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >

        {
          data.map(({avatar, name, review, email}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" /> 
                </div>
                <h5 className="client__name">{name}</h5>
                <small className='client__review'>{review}</small>
                <br />
                <small className='client__review'>email: {email}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>

  )
}

export default Team