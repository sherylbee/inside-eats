import React from 'react';
import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
// import AppContext from '../../ctx/app-context'

const Meals = props=>{

    return(
        <>
            <MealsSummary/>
            <AvailableMeals/>
        </>
    )
}

export default Meals;