import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CartContext } from "../CartContext";
import CartProduct from "../CartProduct";
import { UserContext } from "../UserContext";
import axios from "axios";

export default function CartPage() {
  const navigate = useNavigate();
  const { cart, setCart } = useContext(CartContext);
  const { user } = useContext(UserContext);
  const [paymentMethod, setPaymentMethod] = useState("online");
  const [address, setAddress] = useState(user ? user.address : "");
  let totalPrice = 0;
  let feePrice = 10000;
  let totalDish = 0;
  cart.map((item) => {
    totalPrice += item.quantity * item.price;
    totalDish += item.quantity;
  });
  async function PlaceOrder() {
    if (!user) {
      alert("You must login to place order!");
      return;
    } else if (address === "") {
      alert("Fill address information!");
      return;
    } else {
      const items = {
        pizzas: pizzaItems,
        sideDishes: sideDishesItems,
        combos: combosItems,
      };
      const order = {
        user,
        items,
        totalPrice,
        feePrice,
        paymentMethod,
        address,
      };
      
      if (paymentMethod === "online") {
        try {
          console.log(order);
          const rs = await axios.post("/payment/create-checkout-session", {
            order,
          });
          localStorage.setItem('orderData', JSON.stringify(order));
          window.location.href = rs.data.url;
        } catch (e) {
          console.log(e);
        }
      } else {
        try {
          const response = await axios.post("/orders", order);
          if (response.status === 201) {
            alert("Place order successful!");
            setCart([]);
            navigate("/");
          }
        } catch (e) {
          console.log(e);
        }
      }
    }
  }
  const pizzaItems = cart
    .filter((item) => item.product.category === "pizza")
    .map((item) => ({
      pizza: item.product,
      size: item.size,
      topping: item.topping,
      crust: item.crust,
      quantity: item.quantity,
      price: item.price,
    }));
  const sideDishesItems = cart
    .filter(
      (item) =>
        item.product.category !== "pizza" && item.product.category !== "combo"
    )
    .map((item) => ({
      sideDish: item.product,
      quantity: item.quantity,
      price: item.price,
    }));

  const combosItems = cart
    .filter((item) => item.product.category === "combo")
    .map((item) => ({
      combo: item.product,
      quantity: item.quantity,
      price: item.price,
    }));

  return (
    <div className="xl:w-1/2 w-full mx-auto xl:p-0 px-10 mt-8 mb-12">
      {!cart.length && (
        <div className="p-20 my-auto bg-stone-900 rounded-3xl">
          <h1 className="text-center text-3xl font-semibold">Cart empty</h1>
        </div>
      )}
      {cart.length !== 0 && (
        <div className="flex flex-col bg-stone-900 py-5 px-10 rounded-3xl">
          <div className="flex justify-between font-semibold mb-3">
            <h1>YOUR CART</h1>
            <h1>{totalDish} dish</h1>
          </div>
          <div className="justify-center flex-col">
            {cart.map((item) => (
              <CartProduct item={item} key={item} />
            ))}
          </div>
          <Link
            to="/menu"
            className="mx-auto my-1 px-5 py-1 font-semibold text-sm rounded-full text-white  bg-stone-700 flex gap-2 hover:bg-gradient-to-r transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            Add more item
          </Link>
          <div className="w-auto my-5 mb-5 px-5 py-3 mx-10 rounded-xl bg-stone-800 ">
            <div className="flex justify-between py-2">
              <div className="flex gap-3 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <input
                  type="text"
                  value={address}
                  placeholder="Delivery address"
                  onChange={(ev) => setAddress(ev.target.value)}
                  className="bg-transparent text-white focus:outline-none w-full"
                />
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                />
              </svg>
            </div>
            <div className="flex justify-between py-2">
              <div className="flex gap-3 w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
                <select
                  onChange={(ev) => {
                    setPaymentMethod(ev.target.value);
                  }}
                  value={paymentMethod}
                  id="paymentMethod"
                  className="w-full bg-stone-800 focus:outline-none"
                >
                  <option value="online" selected>
                    Online payment
                  </option>
                  <option value="cod">Cash on delivery</option>
                </select>
              </div>
            </div>
            <div className="flex justify-between py-2">
              <div className="flex gap-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <h1>25-30 min</h1>
              </div>
            </div>
          </div>
          <div className="flex justify-between mx-5  text-stone-400">
            <h1 className="">Subtotal</h1>
            <h1>
              {Number(totalPrice)
                .toFixed(0)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              <span className="text-stone-600 px-1">đ</span>
            </h1>
          </div>
          <div className="flex justify-between mx-5 text-stone-400">
            <h1 className="">Delivery fee</h1>
            <h1>
              {Number(feePrice)
                .toFixed(0)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              <span className="text-stone-600 px-1">đ</span>
            </h1>
          </div>
          <div className="flex font-semibold mt-3 justify-between mx-5 text-2xl text-stone-400">
            <h1 className="">Total</h1>
            <h1>
              {Number(totalPrice + feePrice)
                .toFixed(0)
                .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
              <span className="text-stone-600 px-1">đ</span>
            </h1>
          </div>
          <button
            onClick={PlaceOrder}
            className="mx-auto my-3 px-20 py-2 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500 flex gap-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            Place order
          </button>
        </div>
      )}
    </div>
  );
}
