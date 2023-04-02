import React from 'react';
import './article.css';

const Article = ({date, title, imgUrl}) => {
  return (
    <article className="blog__post">
        <img src={imgUrl} alt="blog image" />
        <div className="blog__post-content">
          <p className='p1'>{date}</p>
          <h3>{title}</h3>
          <p className='p2'>Read Full Article</p>
        </div>        
    </article>
  )
}

export default Article