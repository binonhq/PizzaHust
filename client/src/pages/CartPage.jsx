import { Link } from "react-router-dom";
import axios from "axios";

export default function CartPage() {
  const handlePayment = async () => {
    try {
      const response = await axios.post("/payment"); 
      window.location.href = response.data.url;
    } catch (error) {
      console.error("Error initiating payment:", error);
      // Handle errors, display an error message, or take appropriate action
    }
  };

  return (
    <div>
      <h1>Your Cart</h1>
      {/* Display cart items and total amount here */}
      <button
        onClick={handlePayment}
        className="w-40 pr-5 pl-4 py-2 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500 flex gap-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
      >
        <h1 className="font-semibold ">Payment</h1>
      </button>
    </div>
  );
}
