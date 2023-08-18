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
            <h2 className="text-3xl font-bold">{item.product.name}</h2>
            <p className="mt-1 text-sm text-stone-400">
              {item.product.description}
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
                {item.quantity}
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
