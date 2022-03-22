import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../Card/Card';

const TwoCards = () => {
  const data = [
    {
      title: 'History of Capoeira',
      url: './',
      img: 'capoeira-praia.jpg',
    },
    {
      title: 'Alecrim Project',
      url: './',
      img: 'roda.jpg'
    }
  ]

  return (
    <div className="two-cards-container">
      {
        data.map((item, i) => (
          <Card key={i} title={item.title} url={item.url} img={item.img} />
        ))
      }
    </div>
  )
}

export default TwoCards;