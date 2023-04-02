import React from 'react';
import { Feature } from '../../Components';
import './whatGPT3.css';

const WhatGPT3 = () => {
  return (
    <section className='what__is-GPT3 section__margin' id='what__is-GPT3'>
      <div className="container what__is-GPT3-container">
        <div className="what__is-GPT3-container-top">
          <Feature
            title='What is GPT-3'
            text='We so opinion friends me message as delight. 
            Whole front do of plate heard oh ought. 
            His defective nor convinced residence own. 
            Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.'
          />
        </div>

        <div className="what__is-GPT3-container-middle">
          <h1 className="gradient__text">
            The possibilities are beyond your imagination
          </h1>
          <p>
            Explore The Library
          </p>
        </div>

        <div className="what__is-GPT3-container-bottom">          
            <Feature 
              title='Chatbots'
              text='We so opinion friends me message as delight. 
              Whole front do of plate heard oh ought.'
            /> 
            <Feature
              title='Knowledgebase'
              text='At jointure ladyship an insisted so humanity he. 
              Friendly bachelor entrance to on by. 
              As put impossible own apartments'
            /> 
            <Feature
              title='Education'
              text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. 
              As put impossible own apartments'
            /> 
        </div>        
      </div>
    </section>
  )
}

export default WhatGPT3