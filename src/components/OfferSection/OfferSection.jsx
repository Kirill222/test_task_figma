import React from 'react'
import './OfferSection.scss'

//images
import envelop from '../../assets/images/envelop.png'
import envelop2 from '../../assets/images/envelop2.png'

export const OfferSection = () => {
  return (
    <div className='offer-section'>
      <div className='offer-section__content'>
        <div className='offer-description'>
          <h6 className='header-small'>Best price</h6>
          <h2>
            A fair knowledge <br /> base software
          </h2>
          <p>
            Creating your own knowledge center doesn’t have to be <br />
            an expensive feat. LiveAgent offers multiple pricing plans <br />
            that cater to all support needs. Get our standalone <br />
            knowledge base software with the least expensive plan or <br />
            take a look at other plans that offer additional features.
          </p>
          <a href='#' className='button'>
            Pricing
          </a>
        </div>
        <div className='offer-cards'>
          <div className='card'>
            <img src={envelop} alt='envelop' />
            <div className='card-content-wrapper'>
              <h4 className='card_header'>Ticket</h4>
              <p className='card-desc'>
                For Small Businesses and Entrepreneurs
              </p>
              <span className='price'>15$ / mo</span>
              <div className='card-cta'>
                <a href='#'>Try it</a>
              </div>
            </div>
          </div>
          <div className='card'>
            <img src={envelop2} alt='envelop' />
            <div className='card-content-wrapper'>
              <h4 className='card_header'>Ticket+Chat</h4>
              <p className='card-desc'>
                For Medium-sized Businesses and Professional Agencies
              </p>
              <span className='price'>29$ / mo</span>
              <div className='card-cta'>
                <a href='#'>Try it</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
