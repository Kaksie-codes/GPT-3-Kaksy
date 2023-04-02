import React from 'react';
import './feature.css';

const Feature = (props) => {
  const { text, title } = props
  return (
    <div className='GPT3__features-container'>
      <div className="GPT3__features-container-header">
        <h1>{title}</h1>
      </div>
      <div className="GPT3__features-container-content">
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature