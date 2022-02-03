import React from 'react'
import './HeroSection.scss'
import { IoPlay } from 'react-icons/io5'

//images
import airbus from '../../assets/images/airbus.png'
import forbes from '../../assets/images/forbes.png'
import nascar from '../../assets/images/nascar.png'
import usc from '../../assets/images/usc.png'
import banner from '../../assets/images/banner.png'

export const HeroSection = () => {
  return (
    <div className='hero-section'>
      <div className='hero-item left'>
        <h2 className='hero-header'>
          Provide excellent <br /> <span>customer</span> service.
        </h2>
        <h3 className='hero-subheader'>
          Answer more tickets with <br />
          all-in-one help desk software.
        </h3>

        <p className='tags'>
          &#10003; No setup fee &#10003; Customer service 24/7 <br /> &#10003;
          No credit card required &#10003; Cancel any time
        </p>
        <div className='action-buttons'>
          <a className='button' href='#'>
            Get Started | 14 days free
          </a>
          <div className='play-button'>
            <a className='circle'>
              <IoPlay style={{ marginLeft: '3px' }} />
            </a>{' '}
            <span>See it in action</span>
          </div>
        </div>
        <div className='partners'>
          <h6 className='brand-header'>Used by</h6>
          <div className='brands'>
            <div className='brand'>
              <img src={airbus} alt='airbus' />
            </div>
            <div className='brand'>
              <img src={forbes} alt='forbes' />
            </div>
            <div className='brand'>
              <img src={nascar} alt='nascar' />
            </div>
            <div className='brand'>
              <img src={usc} alt='usc' />
            </div>
          </div>
        </div>
      </div>
      <div className='hero-item right'>
        <img src={banner} alt='banner' className='banner' />
      </div>
    </div>
  )
}
