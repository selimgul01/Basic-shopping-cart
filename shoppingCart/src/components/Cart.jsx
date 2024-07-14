import React from "react";
import { TiDeleteOutline } from "react-icons/ti";


const Cart = ({ cart, setCart }) => {

  const total = cart.reduce((acc,item)=> acc+item.price , 0 )


  if (cart.length === 0) {
    return;
  }

  const cartEmpty = () => {
    setCart([])
  }

  const deleteItem = (id) => {
    setCart(cart.filter((item)=> item.id !== id))
  }

  return (
    <div className="border ml-auto w-72 p-4 mt-2 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold mb-4">Sepet</h2>
      <ul>
        {cart.map((product) => (
          <li className="mt-2 flex justify-between items-center">
            <span>{product.name}</span>
            <span className="pl-20">{product.price} ₺</span>
            <span onClick={()=>deleteItem(product.id)} className="font-semibold text-2xl cursor-pointer "><TiDeleteOutline /></span>
          </li>
        ))}
      </ul>
      <hr className="my-4" />
      <p className="font-semibold text-xl">Toplam: {total} ₺</p>
      <button onClick={cartEmpty} className="bg-red-500 text-white px-4 py-2 rounded w-full hover:bg-red-600 transition-all mt-5">
        Sepeti Boşalt
      </button>
    </div>
  );
};

export default Cart;
