import { CartContext } from "./CartContext";
import { useContext, useState, useEffect } from "react";
export default function MenuProduct({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const [size, setSize] = useState("Large");
  const [crust, setCrust] = useState("Regular");
  const [price, setPrice] = useState(20);
  function updatePrice() {
    if (size === "Small") {
      if (crust === "Thin") {
        setPrice(10 + 3); // Update price for small size and thin crust
      } else if (crust === "Cheese Sausage") {
        setPrice(10 + 7); // Update price for small size and cheese sausage crust
      } else {
        setPrice(10); // Default price for small size
      }
    } else if (size === "Medium") {
      if (crust === "Thin") {
        setPrice(15 + 3); // Update price for medium size and thin crust
      } else if (crust === "Cheese Sausage") {
        setPrice(15 + 7); // Update price for medium size and cheese sausage crust
      } else {
        setPrice(15); // Default price for medium size
      }
    } else {
      // Large size
      if (crust === "Thin") {
        setPrice(20 + 3); // Update price for large size and thin crust
      } else if (crust === "Cheese Sausage") {
        setPrice(20 + 7); // Update price for large size and cheese sausage crust
      } else {
        setPrice(20); // Default price for large size
      }
    }
  }

  useEffect(() => {
    updatePrice();
  }, [size, crust]);

  function addToCart(ev) {
    const product_doc = {
      id: Object.keys(cart).length + 1,
      product,
      quantity: 1,
      price: 100,
    };
    ev.preventDefault();
    setCart([...cart, product_doc]);
    alert("Item added !");
  }

  return (
    <div className="bg-stone-800 bg-opacity-20 pt-8 px-5 pb-5 rounded-3xl flex flex-col">
      <img className="w-1/2 block mx-auto" src={product.img} alt="" />
      <h1 className="text-center font-semibold text-3xl pb-3 pt-4">
        {product.title}
      </h1>
      <h1 className="text-sm text-center text-gray-400">{product.desc}</h1>
      <form className="mx-4">
        {product.type === "pizza" && (
          <div>
            <label
              htmlFor="size-select"
              className="block text-sm font-medium my-2 dark:text-white"
            >
              Select your size
            </label>
            <select
              id="size-select"
              value={size}
              onChange={(ev) => {
                setSize(ev.target.value);
              }}
              className="py-2 px-3 w-full border-gray-200 rounded-md text-sm bg-stone-800"
            >
              <option selected>Large</option>
              <option>Medium</option>
              <option>Small</option>
            </select>
            <label
              htmlFor="topping-select"
              className="block text-sm font-medium my-2 dark:text-white"
            >
              Select your crust
            </label>
            <select
              id="topping-select"
              value={crust}
              onChange={(ev) => {
                setCrust(ev.target.value);
              }}
              className="py-2 px-3 w-full border-gray-200 rounded-md text-sm bg-stone-800"
            >
              <option selected>Regular</option>
              <option>Thin</option>
              <option>Cheese Sausage</option>
            </select>
          </div>
        )}
        <button
          onClick={addToCart}
          className="w-full flex bg-gradient-to-r from-orange-400 to-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-semibold justify-between px-10 py-2 rounded-full mt-6"
        >
          <h1 className="">Add to cart</h1>
          <h1 className="">{price} $</h1>
        </button>
      </form>
    </div>
  );
}
