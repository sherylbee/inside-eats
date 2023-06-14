import { useState } from "react";
// import { createPortal } from "react-dom";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import AppContext from "./ctx/app-context";
import ModalBackdrop from "./components/UI/Modal";
import Cart from "./components/Cart/Cart"

function App(props) {
  const [cart, updateCart] = useState([]);
  const [showBackdrop, ] = useState(true);
  const [showCart, updateShowCart] = useState(false);
  return (
    <>
    {showBackdrop &&
      <ModalBackdrop layer='0'/>
    }
    {/* <PageBg/> */}
      <AppContext.Provider
        value={{
          cart: cart,
          updateCart: function (item) {
            updateCart((prevCart) => {
              return [...prevCart, item];
            });
          },
        }}
      >
        <Header notifyParent={updateShowCart}/>
        {showCart && <Cart items={cart}/>}
        <main>
          <Meals/>
        </main>
      </AppContext.Provider>
    </>
  );
}

export default App;
