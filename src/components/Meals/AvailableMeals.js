import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import Button from "../Layout/Button";
import React, {useContext} from 'react';
import AppContext from "../../ctx/app-context"
import DUMMY_MEALS from "../../data/dummyData";
 

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
