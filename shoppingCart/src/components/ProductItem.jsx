import React from "react";

const ProductItem = ({ product, cart, setCart }) => {

    const addToCart = (product) => {
      setCart((prevState)=> [...prevState,product])
      
    }

  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg ">
      <img
        className="w-full h-48 object-cover rounded-t-lg"
        src="https://via.placeholder.com/250"
        alt="product"
      />

      <div className="p-4">
        <h2 className="text-xl font-semibold my-2">{product.name} </h2>
        <p className="text-gray-500 my-2">{product.price} ₺</p>
        <button
          onClick={()=>addToCart(product)}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 w-full"
        >
          Sepete Ekle
        </button>
      </div>
    </div>
  );
};

export default ProductItem;
