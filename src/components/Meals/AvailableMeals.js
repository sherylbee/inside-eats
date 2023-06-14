import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import sushiImg from "../../assets/sushi.jpg";
import burgerImg from "../../assets/bbq-burger.jpg";
import greenBowlImg from "../../assets/green-bowl.jpg";
import schnitzelImg from "../../assets/schnitzel.jpg";
import Button from "../Layout/Button";
import React, {useContext} from 'react';
import AppContext from "../../ctx/app-context"


const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi Platter",
    description: "Finest fish and veggies",
    price: 22.99,
    img: sushiImg,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A German specialty!",
    price: 16.5,
    img: schnitzelImg,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
    img: burgerImg,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
    img: greenBowlImg,
  },
];


const AvailableMeals = (props) => {
  const ctx = useContext(AppContext)
  const addToCart = (item) =>{
    ctx.updateCart(item);
  }
  const mealsList = DUMMY_MEALS.map((meal) => (
    <li key={meal.id}>
      <Card
        title={meal.name}
        img={meal.img}
        description={meal.description}
        >
        <Button onClick={()=>addToCart(meal)} type="addToCart" name='Add to Cart' amount={meal.price.toLocaleString("us-US", {
          style: "currency",
          currency: "USD",
        })}/>
      </Card>
    </li>
  ));

  return (
    <section className={classes.meals}>
      <ul>{mealsList}</ul>
    </section>
  );
};

export default AvailableMeals;
