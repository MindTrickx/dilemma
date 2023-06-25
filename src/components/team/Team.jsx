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
    review: "Lorem ipsum dolor sit amet consectetur adipisicing"
  },
  {
    avatar: WENDELLE,
    name: 'Charles Wendelle Ortiz',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing"
  },
  {
    avatar: PETTER,
    name: 'Petter Sapalo',
    review: "Lorem ipsum dolor sit amet consectetur adipisicing"
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
          data.map(({avatar, name, review}, index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt="" /> 
                </div>
                <h5 className="client__name">{name}</h5>
                <small className='client__review'>{review}</small>
              </SwiperSlide>
            )
          })
        }
        
      </Swiper>
    </section>

  )
}

export default Team