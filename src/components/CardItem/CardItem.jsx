import React from "react";
import "./CardItem.css";

function CardsItem(props) {
  return (
    <div className="cards__item">
      <img src={props.image} alt={props.city} />
      <p className="cards__item-transport">{props.labelTransport}</p>
      { props.quantity && (<p className="cards__item-seats">{props.quantity}</p>) }
      <p className="cards__item-title">{props.city}, {props.month} — {props.price.toLocaleString()}</p>
    </div>
  );
}

export default CardsItem;
