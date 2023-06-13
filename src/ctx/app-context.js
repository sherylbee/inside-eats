import React from 'react';

const ctx = React.createContext({
    cart: [],
    updateCart: function(item){
       this.cart = [...this.cart, item];
    }
});

export default ctx;