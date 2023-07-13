import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartContext";
export default function CartPage() {
  const { cart, setCart } = useContext(CartContext);
  // console.log(cart);
  function removeFromCart(ev, item) {
    ev.preventDefault();
    setCart((prevCart) => prevCart.filter((itemOnCart) => itemOnCart !== item));
  }
  return (
    <div className="xl:w-1/2 w-full mx-auto xl:p-0 px-10 mt-8 mb-12">
      {cart.length === 0 && <h1>Cart empty</h1>}
      {cart.length !== 0 && (
        <div className="flex flex-col bg-stone-900 py-5 px-10 rounded-3xl">
          <div className="flex justify-between font-semibold mb-3">
            <h1>YOUR CART</h1>
            <h1>{cart.length} dish</h1>
          </div>
          <div className="justify-center flex-col">
            {cart.map((item) => (
              <div
                key={item}
                className="mb-3 border-b-2 border-stone-700 p-3 flex justify-start"
              >
                <img className="w-32 h-34 cover-full" src={item.img} />
                <div className="ml-4 w-full">
                  <div className="flex justify-between gap-2">
                    <div>
                      <h2 className="text-3xl font-bold">{item.title}</h2>
                      <p className="mt-1 text-sm">{item.desc}</p>
                    </div>
                    <div className="mt-0">
                      <div className="flex items-center border-gray-100">
                        <span className="cursor-pointer rounded-l-full bg-gray-100 text-black py-1 px-3.5 duration-100 hover:bg-stone-700 hover:text-white">
                          {" "}
                          -{" "}
                        </span>
                        <input
                          className="h-8 w-10 px-auto border bg-white text-black text-center outline-none"
                          type="number"
                          defaultValue="1"
                          min="1"
                        />
                        <span className="cursor-pointer rounded-r-full text-black bg-gray-100 py-1 px-3 duration-100 hover:bg-stone-700 hover:text-white">
                          {" "}
                          +{" "}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between mt-10">
                    <button
                      onClick={(ev) => {
                        removeFromCart(ev, item);
                      }}
                      className="hover:underline cursor-pointer"
                    >
                      Remove
                    </button>
                    <p className="text-xl font-semibold">$ 259.000</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="w-auto mt-3 mb-5 px-5 py-3 mx-10 rounded-xl bg-stone-800 ">
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
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <h1>140 Roadway Ave.</h1>
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
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
                <h1>Cash</h1>
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
          </div>
          <div className="flex justify-between mx-5 text-stone-400">
            <h1 className="">Subtotal</h1>
            <h1>$200.00</h1>
          </div>
          <div className="flex justify-between mx-5 text-stone-400">
            <h1 className="">Delivery fee</h1>
            <h1>$5.00</h1>
          </div>
          <div className="flex font-semibold mt-3 justify-between mx-5 text-2xl text-stone-400">
            <h1 className="">Total</h1>
            <h1>$205.00</h1>
          </div>
          <Link to="/payment">
            <button className="mx-auto my-3 px-20 py-2 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500 flex gap-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              Place order
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
