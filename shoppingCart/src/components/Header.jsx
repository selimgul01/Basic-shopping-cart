import React from "react";
import CartIcon from "./CartIcon";

function Header({cart}) {
  return (
    <div className="flex justify-between items-center mt-6">
      <h1 className="text-3xl font-semibold">
        React ve Tailwind CSS Sepet Uygulaması
      </h1>
      <CartIcon cart={cart} />
    </div>
  );
}

export default Header;
