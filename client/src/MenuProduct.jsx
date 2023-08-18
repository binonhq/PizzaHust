import axios from "axios";
import { CartContext } from "./CartContext";
import { useContext, useState, useEffect } from "react";
export default function MenuProduct({ product }) {
  const { cart, setCart } = useContext(CartContext);
  const [size, setSize] = useState("Large");
  const [topping, setTopping] = useState("None");
  const [crust, setCrust] = useState("Thin");
  const [price, setPrice] = useState("");
  const [listTopping, setListTopping] = useState([]);
  function updatePrice() {
    if (product.category === "pizza") {
      let priceSize = 0;
      let pricePizza = 0;
      let priceTopping = 0;
      switch (size) {
        case "Small":
          priceSize = product.price.S;
          break;
        case "Medium":
          priceSize = product.price.M;
          break;
        default:
          priceSize = product.price.L;
      }
      if (topping === "None") {
        priceTopping = 0;
      } else {
        priceTopping = listTopping.filter((item) => item.name === topping)[0]
          .price;
      }
      setPrice(pricePizza + priceSize + priceTopping);
    } else {
      // setPrice(product.price);
      setPrice(10);
    }
  }

  useEffect(() => {
    updatePrice();
  }, [size, topping]);

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
    let product_doc;
    if (product.category === "pizza") {
      product_doc = {
        id: Object.keys(cart).length + 1,
        product,
        quantity: 1,
        crust,
        topping,
        size,
        price,
      };
    } else {
      product_doc = {
        id: Object.keys(cart).length + 1,
        product,
        quantity: 1,
        price,
      };
    }

    setCart([...cart, product_doc]);
    alert("Item added !");
  }

  return (
    <div className="bg-stone-800 bg-opacity-20 pt-8 px-5 pb-5 rounded-3xl flex flex-col justify-between">
      <div>
        <img className="w-1/2 block mx-auto" src={product.imageUrl} alt="" />
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
              <option selected>Large</option>
              <option>Medium</option>
              <option>Small</option>
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
              <option selected>Thin</option>
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
              <option selected>None</option>
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
          <h1 className="">{price} $</h1>
        </button>
      </div>
    </div>
  );
}
