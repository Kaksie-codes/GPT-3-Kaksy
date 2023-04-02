import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <section className="hero" id='home'>
      <div className="container hero__container ">
        <div className="hero__container-left">
            <h1 className="gradient__text">
              Let’s Build Something amazing with GPT-3 OpenAI
            </h1>
            <p>
              Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. 
              Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.
            </p>
            <form>
              <input type="email" placeholder='Your Email Address'/>
              <button>Get Started</button>
            </form>
            <div className="subscribers">
              <div className="people">
                <img src={people} alt="people" />
              </div>              
              <p>1,600 people requested access a visit in last 24 hours</p>
            </div>            
        </div>

        <div className="hero__container-right">
            <img src={ai} alt="ai" />
        </div>
      </div>

    </section>
  )
}

export default Header