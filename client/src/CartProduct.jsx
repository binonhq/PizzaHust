import { useContext, useState } from "react";
import { CartContext } from "./CartContext";
export default function CartProduct({ item }) {
  const { cart, setCart } = useContext(CartContext);
  const [quantity, setQuantity] = useState(1);
  function removeFromCart(ev) {
    ev.preventDefault();
    setCart((prevCart) => prevCart.filter((itemOnCart) => itemOnCart !== item));
  }
  return (
    <div className="mb-3 border-b-2 border-stone-700 p-3 flex justify-start">
      <img className="w-32 h-34 cover-full" src={item.product.imageUrl} />
      <div className="ml-4 w-full">
        <div className="flex justify-between gap-2">
          <div>
            <h2 className="text-3xl font-bold">{item.product.name}</h2>
            <p className="mt-1 text-sm">{item.product.description}</p>
          </div>
          <div className="mt-0">
            <div className="flex items-center">
              <span
                className="cursor-pointer rounded-full bg-gray-100 text-black py-1 px-3.5 duration-100 hover:bg-stone-700 hover:text-white"
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
                {" "}
                -{" "}
              </span>
              <p className="w-10 px-auto text-white text-center text-2xl">
                {quantity}
              </p>
              <span
                className="cursor-pointer rounded-full text-black bg-gray-100 py-1 px-3 duration-100 hover:bg-stone-700 hover:text-white"
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
                {" "}
                +{" "}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-10">
          <button
            onClick={(ev) => {
              removeFromCart(ev);
            }}
            className="hover:underline cursor-pointer"
          >
            Remove
          </button>
          <p className="text-xl font-semibold">${item.price * quantity}</p>
        </div>
      </div>
    </div>
  );
}
