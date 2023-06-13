import React from "react";
import classes from "./MealsSummary.module.css";

const MealsSummary = (props) => {
  return (
    <section className={classes.summary}>
      <h2>Fast and Fresh Food Delivery</h2>
      <p>
        Choose from our broad selection of delicious meals made from
        always-fresh, never-frozen, farm-to-table ingredients.
      </p>
      <p>
        With restaurant-quality dishes that are big on flavor and low on
        cost you might love it so much you'll never want to cook again! And
        that's okay!... We won't tell!
      </p>
    </section>
  );
};

export default MealsSummary;
