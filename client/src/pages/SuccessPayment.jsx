import { useEffect, useState, useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
import axios from "axios";

export default function SuccessPayment() {
  const { cart, setCart } = useContext(CartContext);
  const orderData = JSON.parse(localStorage.getItem('orderData'));
  const hasRun = useRef(false); 

  const sendOrder = async () => {
    if (orderData && !hasRun.current) { 
      try {
        hasRun.current = true; 
        console.log(orderData);
        const response = await axios.post("/orders", orderData);
        if (response.status === 201) {
          setCart([]);
        }
        localStorage.removeItem('orderData');
      } catch (error) {
        console.error("Error creating order:", error);
      }
    }
  };

  useEffect(() => {
    sendOrder();
  }, [orderData]);

  return (
    <div className="text-center flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-semibold mt-8 mb-4">Payment Successful!</h1>
      <p className="text-gray-600 mb-8">Thank you for your purchase.</p>
      <Link
        to="/"
        className="w-40 pr-5 pl-4 py-2 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500 flex gap-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
      >
        Continue Shopping
      </Link>
    </div>
  );
}
