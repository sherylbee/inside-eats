import React from "react";
import styles from "./Card.module.css";

const Card = ({title, img, description, children}) => {
  return (
    <div className={styles.card}>
      <header><h3>{title}</h3></header>
      <main>
        {img &&
        <img src={img} alt={img}/>}
      </main>
      <footer>
        {description} <span className={styles.price}>{children}</span>
      </footer>
    </div>
  );
};

export default Card;
