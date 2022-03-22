import React from "react";
import { Link } from "react-router-dom";

const OneCard = () => (
  <div className="one-card--container">
    <div className="bcg"></div>
    <img src={require('./img/capoeira3.jpg')} alt="" />

    <div className="one-card__content">
      <h1>Lorem Ipsum</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ut velit purus. Mauris blandit maximus turpis quis fringilla. Aliquam tristique dignissim arcu, et tempor nisi porttitor ut. </p>
      <Link to='./' className="card-button">Read More</Link>
    </div>
  </div>
);

export default OneCard;