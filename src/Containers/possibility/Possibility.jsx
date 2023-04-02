import React from 'react';
import './possibility.css';
import possibility from '../../assets/possibility.png'
const Possibility = () => {
  return (
    <section className="possibility section__margin">
      <div className="container possibility__container">
        <div className="possibility__container-left">
          <img src={possibility} alt="possibility" />
        </div>
        <div className="possibility__container-right">
          <p className='p1'>Request Early Access to Get Started</p>
          <h2 className='gradient__text'>The possibilities are beyond your imagination</h2>
          <p className='p2'>
            Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. 
            Party we years to order allow asked of.
          </p>
          <p className='p3'>Request Early Access to Get Started</p>
        </div>
      </div>
    </section>
  )
}

export default Possibility