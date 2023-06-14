import React, { useEffect, useState } from "react";
import styles from './Cart.module.css';

const Cart = ({items}) =>{
    const [currentItems, updateCartItems] = useState(items);
    console.log('rendering cart')

    useEffect(()=>{
        updateCartItems(items)
        console.log('running effect')
    }, [items])

    // {'23f': {name:'someName', price:33, count: 3}}

    // let cartItems = currentItems.map(item=>
    //     <li>{item.name} {item.price}</li>
    // );
    let cartObj = {};
    for (const currentItem of currentItems) {
        if(!cartObj[currentItem.id]){
            cartObj[currentItem.id] = {...currentItem, count:1}
        }
        else{
            cartObj[currentItem.id].count += 1;
            cartObj[currentItem.id].price += cartObj[currentItem.id].price;
        }
    }
    console.log(cartObj)
    const cartItems = [];
    for (const key in cartObj) {
        cartItems.push(
            <li> 
                {cartObj[key].count} {cartObj[key].name} ${cartObj[key].price}
            </li>
        )
    }

    return(
        <div className={`${styles['cart']}`}>
            <ul className={`${styles['ul']}`}>
            {cartItems}
            </ul>
        </div>
    )
}

export default Cart;