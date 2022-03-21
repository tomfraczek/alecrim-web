import React from "react";
import { Link } from "react-router-dom";

const Card = ({title, url, img}) => (
  <div className="card-item">
    <div className="card-item--img__container">
      <img className="card-item--img" src={require(`./img/${img}`)} alt="" />
    </div>
    <div className="card-item--content">
      <h1>{title}</h1>
      <Link to={url} className='card-button'>Read more</Link>
    </div>
  </div>
)

export default Card;