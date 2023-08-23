import React from "react";
import CardsItem from "../CardItem/CardItem";
import Heading from "../Heading/Heading";
import card1Img from "../../assets/тбилиси.jpg";
import card2Img from "../../assets/стамбул.jpg";
import card3Img from "../../assets/дубай.jpg";
import card4Img from "../../assets/пхукет.jpg";

const items = [
  {
    city: "Тбилиси",
    month: "апрель",
    price: 83000,
    image: card1Img,
    labelTransport: "на автобусе",
    quantity: 10,
    labelSeat: true,
  },
  {
    city: "Стамбул",
    month: "март",
    price: 110000,
    image: card2Img,
    labelTransport: "на самолете",
    labelSeat: false,
  },
  {
    city: "Дубай",
    month: "июнь",
    price: 220000,
    image: card3Img,
    labelTransport: "на самолете",
    quantity: 15,
    labelSeat: true,
  },
  {
    city: "Пхукет",
    month: "сентябрь",
    price: 135000,
    image: card4Img,
    labelTransport: "самолет + паром",
    quantity: 11,
    labelSeat: true,
  },
];

function CardsSection() {
  return (
    <div>
      <Heading 
      level="h1" 
      text="Галерея путешествий" 
      />

      {items.map(function (item) {
        return (
          <CardsItem
            city={item.city}
            month={item.month}
            price={item.price}
            image={item.image}
            quantity={item.quantity}
            labelTransport={item.labelTransport}
            labelSeat={item.labelSeat}
          />
        );
      })}
    </div>
  );
}

export default CardsSection;
