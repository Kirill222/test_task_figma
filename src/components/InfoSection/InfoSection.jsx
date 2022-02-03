import React from 'react'
import './InfoSection.scss'

//images
import info1 from '../../assets/images/info1.png'

export const InfoSection = () => {
  return (
    <div className='info-section'>
      <div className='info-item left'>
        <h6 className='header-small '>Pioneering software</h6>
        <h2>Did you know?</h2>
        <p>
          Established in 2006, LiveAgent was the first solution on the <br />
          market to offer live chat and help desk capabilities. As of <br />
          2021, LiveAgent is the best rated and most reviewed help <br />
          desk solution on the market, serving over 150 million users <br />
          and 40,000 businesses worldwide.
        </p>
        <img src={info1} alt='Did you know?' />
      </div>
      <div className='info-item  discounts'>
        <div className='discount-card'>
          <div className='discount'>
            <p>30%</p>
          </div>
          <div className='cta'>
            <h4>Generate more revenue</h4>
            <p>
              Create memorable customer <br /> experiences that boost revenue.
            </p>
          </div>
        </div>

        <div className='discount-card'>
          <div className='discount'>
            <p>97%</p>
          </div>
          <div className='cta'>
            <h4>Improve satisfaction</h4>
            <p>
              Delight your customers with
              <br /> lightning-fast responses.
            </p>
          </div>
        </div>

        <div className='discount-card'>
          <div className='discount'>
            <p>16X</p>
          </div>
          <div className='cta'>
            <h4>Boost customer value</h4>
            <p>
              Make more sales by keeping your <br /> customers loyal to your
              brand.
            </p>
          </div>
        </div>
        <a href='#' className='button'>
          Make your business goals a reality
        </a>
      </div>
    </div>
  )
}
