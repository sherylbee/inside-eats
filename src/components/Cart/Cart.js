import React, { useEffect, useState } from "react";
import styles from './Cart.module.css';

const Cart = ({items}) =>{
    let initItems = items.map(item=><li>{item.name}</li>)
    const [cartItems, updateCartItems] = useState(initItems);
    useEffect(()=>{
        let updatedCart = items.map(item=><li>{item.name}</li>);
        updateCartItems(updatedCart)
    }, [items])
    return(
        <div className={`${styles['cart']}`}>
            <ul>
            {cartItems}
            </ul>
        </div>
    )
}

export default Cart;