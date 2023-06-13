import { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import AppContext from "./ctx/app-context";
import ModalBackdrop from "./components/UI/Modal";
import Cart from "./components/Cart/Cart";

function App(props) {
  const [cart, updateCart] = useState([]);
  const [showModal, updateShowModal] = useState(false);
  const [showCart, updateShowCart] = useState(false);

  return (
    <>
    {showModal &&
      <ModalBackdrop />
    }
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
