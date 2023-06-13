import { useState } from 'react';
import Header from './components/Layout/Header'
import Meals from './components/Meals/Meals';
import AppContext from './ctx/app-context'

function App() {
 const [cart, updateCart] = useState([])
  return (
    <AppContext.Provider value={{
      cart: cart,
      updateCart: function(item){
        updateCart(prevCart=>{
          return [...prevCart, item]
        })
      }
  }}>
      <div>
        <Header/>
        <main>
          <Meals/>
        </main>
      </div>
    </AppContext.Provider>

  );
}

export default App;
