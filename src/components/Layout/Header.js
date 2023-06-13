import React, { useContext, useEffect, useState, useRef } from "react";
import classes from "./Header.module.css";
import mealtime from "../../assets/mealtime.jpg";
import Button from "./Button";
import AppContext from '../../ctx/app-context';
import logo from '../../assets/logo.png'



const Header = props =>{
    const ctx = useContext(AppContext)
    const [cartSize, updateCartSize] = useState(ctx.cart)
    const itemAddedRef = useRef(false);
    
    useEffect(()=>{
        itemAddedRef.current = true;
        setTimeout(()=>{
            itemAddedRef.current = false;
        }, 100)
        updateCartSize(ctx.cart.length)

    },[ctx.cart, itemAddedRef])

    return(
        <>
            <header className={classes.header}>
                <img className={classes.headerLogo} src={logo} alt="logo" />
                {/* <h1>Inside Eats</h1> */}
                <Button type="viewCart" name='View Cart' amount={cartSize} bump={itemAddedRef.current} onClick={props.notifyParent}/>
            </header>
            <div className={classes['main-image']}>
                <img src={mealtime} alt="aerial view of meal shared with friends" />
            </div>
        </>
    )
}

export default Header;