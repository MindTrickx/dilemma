import React from 'react'
import './modeling.css'
import GRAPH1 from '../../assets/image-r.png'
import GRAPH2 from '../../assets/image-ml.png'
import GRAPH3 from '../../assets/graph3.png'
import GRAPH4 from '../../assets/graph4.png'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const data = [
  {
    id: 1,
    image: GRAPH1,
    title: 'Number of Tweets Containing False Information about De Lima',
    content: "We created a graph to visualize the frequency of misinforming tweets per year, though we further divide the bars by months and indicate what month it is based on the color listed on the legends.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },

  {
    id: 2,
    image: GRAPH2,
    title: 'Number of Accounts that Tweeted False Information about De Lima',
    content: "Upon visual inspection, there is an insignificant difference in amount between the accounts created that spread information between 2009-2015 and 2016-2022. However, the mode of the frequency of accounts created is March 2017 which is also the mode of the frequency of the misinforming tweets.",
    github: 'https://github.com',
    demo: 'https://dibble.com'
  },
]

const Modeling = () => {
  return (
    <section id="modeling">
      <h5>Finding Patterns in the Data</h5>
      <h2>Modeling</h2>
      
      <div className="container portfolio__container_m">
       
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={GRAPH1} alt="regression" />
          </div>
          <h3>Regression Analysis on the Number of Fatalities and the Frequency of Misinformation Tweets</h3>
          <p>Linear regression was used to find whether there is a correlation between the number of drug war fatalities and the amount of misinformation tweets. The x-axis represents the number of drug war fatalites in which the data was obtained from 'The Armed Conflict Location & Event Data Project' (ACLED). The y-axis represents the number of misinformation tweets regarding Leila De Lima corresponding to the amount of fatalities.</p>
          <br />
          <p>The trend of the data points is estimated by the red line and it represents the relationship between the number of fatalities and the amount of misinformation tweets. If the amount of misinformation tweets increases with the amount of fatalities, then we would expect a slanted line. However, the regressions analysis suggests a flat line which implicates a weak correlation between the amount of fatalities and the amount of misinformation tweets.</p>
          <div className="portfolio__item-cta">
            <a href={GRAPH1} className="btn" target="_blank">Full Screen</a>
            <a href={GRAPH1} download className="btn btn-primary">Download</a>
          </div>
        </article>

        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={GRAPH2} alt="event detection" />
          </div>
          <h3>Event Detection Model for the Frequency of Misinformation Tweets regarding De Lima</h3>
          <p>Time-series analysis was used in order to find time periods with peak number of misinformation tweets. The x-axis represents the time periods while the y-axis represents the amount of misinformation tweets corresponding to that time period. The red 'x' marks represents the peaks of the graph which means that there is a significant amount of misinformation tweets for that time period.</p>
          <br></br>
          <p>The find_peaks function from scipy was used in order to find the peaks with the parameter distance=4 so that the peaks would be sufficiently spaced out. The function found four time periods with peaks in the amount of minsinformation tweets:</p>
          <br/>
          <p><span style={{color: "#4db5ff"}}>2017 Quarter 1</span>: 27 tweets</p>
          <p><span style={{color: "#4db5ff"}}>2018 Quarter 2</span>: 10 tweets</p>
          <p><span style={{color: "#4db5ff"}}>2019 Quarter 4</span>: 11 tweets</p>
          <p><span style={{color: "#4db5ff"}}>2022 Quarter 1</span>: 6 tweets</p>
          <br />
          <p>These time periods are critical and they were found to be correlated to key events relating to Leila De Lima which would be discussed at the next section.</p>
          <div className="portfolio__item-cta">
            <a href={GRAPH2} className="btn" target="_blank">Full Screen</a>
            <a href={GRAPH2} download className="btn btn-primary">Download</a>
          </div>
        </article>

      </div>

    </section>
  )
}

export default Modeling