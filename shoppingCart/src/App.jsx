import { useState } from "react"
import Cart from "./components/Cart"
import Header from "./components/Header"
import Products from "./components/Products"


const App = () => {

  const [cart,setCart] = useState([])

  console.log(cart);

  return (
    <div className="container mx-auto mt-6">
      <Header cart={cart} setCart={setCart} />
      <Products cart={cart} setCart={setCart} />
      <Cart cart={cart} setCart={setCart} />
    </div>
  )
}

export default App
