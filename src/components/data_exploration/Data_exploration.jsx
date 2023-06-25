import React from 'react'
import './data_exploration.css'
import {BsCheck} from 'react-icons/bs'

const Data_exploration = () => {
  return (
    <section id='services'>
      <h5>Dealing with Data</h5>
      <h2>Data Exploration</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Data Preprocessing</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>We analyzed a time series dataset of tweets collected between 2016 and 2022 which contains misinformation about De Lima.</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Data_exploration