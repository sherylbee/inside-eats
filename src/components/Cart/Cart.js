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
    // console.log(cartObj)
    const USDollar = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });
    const cartItems = [];
    let total = 0;
    for (const key in cartObj) {
        cartItems.push(
            <li key={cartObj[key].id}> 
                {cartObj[key].count} {cartObj[key].name} {USDollar.format(cartObj[key].price)}
            </li>
        )
        total+=cartObj[key].price;
    }

    return(
        <div className={`${styles['cart']}`}>
            <ul className={`${styles['ul']}`}>
            {cartItems}
            </ul>
            <hr />
            <p>Total: {`${USDollar.format(total)}`}</p>
        </div>
    )
}

export default Cart;