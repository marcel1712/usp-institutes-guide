import React from 'react';
import style from './card.css';

function Card({ name, miniDescription, logo }) {
  return (
    <div className={style.card}>
      <img src={logo} alt={name} className={style.logo} />
      <div className={style.content}>
        <h2 className={style.name}>{name}</h2>
        <p className={style.miniDescription}>{miniDescription}</p>
      </div>
    </div>
  );
}

export default Card;
