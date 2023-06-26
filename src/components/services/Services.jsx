import React from 'react'
import './services.css'
import {BsCheck} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='conclusion'>
      <h5>So....</h5>
      <h2>What Does This Mean?</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Results Discussion</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>2017 Q1 was the highest frequency of tweets</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>The regression analysis shows that the number of fatalities does not significantly affect the frequency of misinformation tweets</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>The event detection models show the frequency peak quarters of misinformation tweets. Historical data can be correlated to these dates:</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>2017 Q1, De Lima was arrested</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>2018 Q2, Supreme Court denied De Lima’s petition</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>2019 Q4, Duterte barred US senators supporting De Lima</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>2022 Q1, Election campaign</p>
            </li>
          </ul>
        </article>

        

        <article className="service">
          <div className="service__head">
            <h3>Conclusion</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>The study suggests that the frequency of misinformation tweets regarding De Lima's illegal drug involvement is not influenced by the number of fatalities during the PH drug war</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Furthermore, our findings indicate that factors beyond the number of fatalities may contribute to the sudden increase in the frequency of spreading misinformation, highlighting the need for further investigation into these events.</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Implication</h3>
          </div>

          <ul className="service__list">
            <li>
              <BsCheck className="service__list-icon" />
              <p>If the amount of fatalities is not the main contributing factor to the amount of disinformation, then there must be something else which contributed to the amount of disinformation</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Based on the time-series analysis, one possible contributing factor would be the amount of media coverage since a large media attention could spark the rise of misinformation tweets</p>
            </li>
            <li>
              <BsCheck className="service__list-icon" />
              <p>Hence, this calls for more research to be done for this case.</p>
            </li>
          
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services