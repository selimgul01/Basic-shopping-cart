import React from "react";
import { FiShoppingCart } from "react-icons/fi";


const CartIcon = ({cart}) => {

  

  return (
    <div className="relative">
      <FiShoppingCart className="text-3xl" />
      {cart.length > 0 &&  (<span className="bg-red-500 text-white flex w-5 h-5 justify-center items-center rounded-full absolute -top-2 -right-4">
        {cart.length}
      </span>)}
    </div>
  );
};

export default CartIcon;
