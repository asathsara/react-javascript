import React from 'react';
import Button from './Button/Button';


const Card = ({ title, text, imgSrc, altText }) => {
  return (
    <div className="card my-custom-card" style={{ width: '18rem' }}>
      <img
        src={imgSrc}
        className="card-img-top my-custom-img"
        alt={altText}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
              <Button btnText="View Alien"/>
      </div>
    </div>
  );
};

export default Card;

