import React from 'react';
import style from './card.css';

interface CardProps {
  title: string;
  description: string;
  imageUrl: string; // Torna a imagem opcional
  categoria1: string;
  categoria2: string;
  local: string;
}

function Card({ title, description, imageUrl, categoria1, categoria2, local }: CardProps) {
  return (
    <div className={style.card}>
      {imageUrl && <img src={imageUrl} alt={title} className={style.image} />}
      <div className={style.content}>
        <h2 className={style.title}>{title}</h2>
        <p className={style.description}>{description}</p>
        <div className={style.container}>
          <h3>{categoria1}</h3>
          <h3>{categoria2}</h3>
          <h3>{local}</h3>
        </div>
      </div>
    </div>
  );
}

export default Card;
