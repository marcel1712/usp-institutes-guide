import React from 'react';
import style from './card.css';

function Card({ title, description, imageUrl, categoria1, categoria2 }) {
  return (
    <div className={style.card}>
      <img src={imageUrl} alt={title} className={style.image} />
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
        <div className={style.container}>
          <h3>{categoria1}</h3>
          <h3>{categoria2}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
