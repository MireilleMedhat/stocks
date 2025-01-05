import React from "react";
import "./Card.css";

type CardProps = {
  ticker: string;
  companyName: string;
  image?: string;
  onClick?: () => void;
}

const Card = ({ ticker, companyName, image, onClick }: CardProps) => {
  return (
    <div className="card" onClick={onClick}>
      {image && <img src={image} alt={`${companyName} logo`} className="card-image" />}
      <div className="card-content">
        <h3 className="card-ticker">{ticker}</h3>
        <p className="card-company">{companyName}</p>
      </div>
    </div>
  );
};

export default Card;
