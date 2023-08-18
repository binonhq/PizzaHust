import axios from "axios";
import { CartContext } from "./CartContext";
import { useContext, useState, useEffect } from "react";
export default function MenuProduct({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const [size, setSize] = useState("L");
  const [topping, setTopping] = useState("None");
  const [crust, setCrust] = useState("Thin");
  const [price, setPrice] = useState("");
  const [listTopping, setListTopping] = useState([]);

  useEffect(() => {
    if (product.category === "pizza") {
      let priceSize = 0;
      let pricePizza = 0;
      let priceTopping = 0;
      priceSize = product.price[size];
      if (topping === "None") {
        priceTopping = 0;
      } else {
        priceTopping = listTopping.filter((item) => item.name === topping)[0]
          .price;
      }
      setPrice(pricePizza + priceSize + priceTopping);
    } else {
      setPrice(product.price);
    }
  }, [listTopping, product.category, product.price, size, topping]);

  useEffect(() => {
    axios
      .get("/toppings", {})
      .then((response) => {
        setListTopping(response.data);
      })
      .catch((e) => {
        alert(e);
      });
  }, []);

  function addToCart(ev) {
    ev.preventDefault();

    const existingIndex = cart.findIndex((item) => {
      if (item.product.category === "pizza") {
        return (
          item.product._id === product._id &&
          item.crust === crust &&
          item.topping === topping &&
          item.size === size
        );
      } else {
        return item.product._id === product._id;
      }
    });

    if (existingIndex !== -1) {
      const updatedCart = cart.map((item, index) => {
        if (index === existingIndex) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      setCart(updatedCart);
    } else {
      const product_doc =
        product.category === "pizza"
          ? {
              product,
              quantity: 1,
              crust,
              topping,
              size,
              price,
            }
          : {
              product,
              quantity: 1,
              price,
            };
      setCart([...cart, product_doc]);
    }
    alert("Item added !");
  }
  return (
    <div className="bg-stone-800 bg-opacity-20 pt-8 px-5 pb-5 rounded-3xl flex flex-col justify-between">
      <div>
        <img className="w-1/2 h-40 mx-auto" src={product.imageUrl} alt="" />
        <h1 className="text-center font-semibold text-3xl pb-3 pt-4">
          {product.name}
        </h1>
        <h1 className="text-sm text-center text-gray-400">
          {product.description}
        </h1>
      </div>
      <div className="mx-4">
        {product.category === "pizza" && (
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
              className="py-2 px-2 w-full border-gray-200 rounded-md text-sm bg-stone-800"
            >
              <option value={"L"}>Large</option>
              <option value={"M"}>Medium</option>
              <option value={"S"}>Small</option>
            </select>
            <label
              htmlFor="size-select"
              className="block text-sm font-medium my-2 dark:text-white"
            >
              Select your size
            </label>
            <select
              id="crust-select"
              value={crust}
              onChange={(ev) => {
                setCrust(ev.target.value);
              }}
              className="py-2 px-2 w-full border-gray-200 rounded-md text-sm bg-stone-800"
            >
              <option>Thin</option>
              <option>Hand Toosed</option>
              <option>Pan</option>
            </select>
            <label
              htmlFor="topping-select"
              className="block text-sm font-medium my-2 dark:text-white"
            >
              Select your topping
            </label>
            <select
              id="topping-select"
              value={topping}
              onChange={(ev) => {
                setTopping(ev.target.value);
              }}
              className="py-2 px-2 w-full border-gray-200 rounded-md text-sm bg-stone-800"
            >
              <option>None</option>
              {listTopping.length &&
                listTopping.map((item) => (
                  <option key={item._id}>{item.name}</option>
                ))}
            </select>
          </div>
        )}
        <button
          onClick={addToCart}
          className="w-full flex bg-gradient-to-r from-orange-400 to-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none font-semibold justify-between px-10 py-2 rounded-full mt-6"
        >
          <h1 className="">Add to cart</h1>
          <h1>
            {Number(price)
              .toFixed(0)
              .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")}
            <span className="text-stone-200 px-1">đ</span>
          </h1>
        </button>
      </div>
    </div>
  );
}
