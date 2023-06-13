import React, { useRef } from "react";
import { FaShoppingCart } from 'react-icons/fa';
import styles from "./Button.module.css";

const Button = props =>{
    const btnType = props.type?styles[props.type]:"";
    const bump = props.bump?styles["bump"]:"";
    const toggleRef = useRef(false);

    const updateToggleRef = ()=>{
        toggleRef.current = !toggleRef.current;
        props.onClick(toggleRef.current)
    }
    const dispatchClick = ()=>{
        if(props.type === "addToCart"){
            props.onClick()
        }
        else{
            updateToggleRef();
        }
    }
    
    return(
        <button className={`${styles.button} ${btnType} ${bump}`} onClick={()=>dispatchClick()}>
            {!btnType &&
                <span className={styles.icon}><FaShoppingCart/></span>
            }
            <span>{props.name}</span>
            <span className={!btnType?`${styles.badge}`:`${styles.price}`}>{props.amount}</span>
        </button>
    )
}

export default Button;