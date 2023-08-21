import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
export default function CartProduct({ item }) {
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(item.quantity);
  function removeFromCart(ev) {
    ev.preventDefault();
    setCart((prevCart) => prevCart.filter((itemOnCart) => itemOnCart !== item));
  }
  return (
    <div className="mb-3 border-b-2 border-stone-700 p-3 grid grid-cols-6 justify-start">
      <img className="w-32 h-32 object-fit-cover" src={item.product.imageUrl} />
      <div className="ml-5 w-full col-span-5">
        <div className="flex justify-between gap-2">
          <div>
            <h2 className="text-3xl font-bold capitalize">
              {item.product.name}
            </h2>
            <p className="mt-1 text-sm text-stone-400 capitalize">
              Description: {item.product.description}
            </p>
            {item.product.category === "pizza" && (
              <div className="flex gap-5 text-stone-400">
                <p className="mt-1 text-sm">Size: {item.size}</p>
                <p className="mt-1 text-sm">Crust: {item.crust}</p>
                <p className="mt-1 text-sm">Topping : {item.topping}</p>
              </div>
            )}
          </div>
          <div className="mt-0">
            <div className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="white"
                className="w-10 h-10 rounded-full p-3 cursor-pointer bg-stone-700  duration-100 hover:bg-stone-800"
                onClick={() => {
                  if (quantity !== 1) {
                    let newQuantity = quantity - 1;
                    setQuantity(newQuantity);
                    setCart(
                      cart.map((itemOnCart) =>
                        itemOnCart === item
                          ? { ...item, quantity: item.quantity - 1 }
                          : itemOnCart
                      )
                    );
                  }
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 12h-15"
                />
              </svg>

              <p className="w-10 px-auto text-white text-center text-2xl">
                {item.quantity}
              </p>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-10 h-10 rounded-full p-3 cursor-pointer bg-stone-700  duration-100 hover:bg-stone-800"
                onClick={() => {
                  let newQuantity = quantity + 1;
                  setQuantity(newQuantity);
                  setCart(
                    cart.map((itemOnCart) =>
                      itemOnCart === item
                        ? { ...item, quantity: item.quantity + 1 }
                        : itemOnCart
                    )
                  );
                }}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <button
            onClick={(ev) => {
              removeFromCart(ev);
            }}
            className="my-1 px-5 py-1 font-semibold text-sm rounded-full text-white  bg-stone-700 flex gap-2 hover:bg-gradient-to-r transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            Remove
          </button>
          <p className="text-xl font-semibold">
            {Number(item.price * quantity)
              .toFixed(0)
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            <span className="text-stone-600 px-1">đ</span>
          </p>
        </div>
      </div>
    </div>
  );
}
