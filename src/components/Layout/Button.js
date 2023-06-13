import React from "react";
import { FaShoppingCart } from 'react-icons/fa';
import styles from "./Button.module.css";

const Button = props =>{
    const btnType = props.type?styles[props.type]:"";
    const bump = props.bump?styles["bump"]:""
    
    return(
        <button className={`${styles.button} ${btnType} ${bump}`} onClick={props.notifyParent}>
            {!btnType &&
                <span className={styles.icon}><FaShoppingCart/></span>
            }
            <span>{props.name}</span>
            <span className={!btnType?`${styles.badge}`:`${styles.price}`}>{props.amount}</span>
        </button>
    )
}

export default Button;