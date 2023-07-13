import pizza4 from "../images/pizza4.png";

export default function MenuPage() {
  const menuDoc = [
    {
      type: "pizza",
      title: "Italian",
      desc: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
      price_s: 10,
      price_m: 15,
      price_l: 20,
      topping_1: 3,
      topping_2: 5,
      img: "https://mymenu.vn/assets/images/products/733/pizza-peperoni-mn-01.png",
    },
    {
      img: "https://product.hstatic.net/1000379753/product/coca_cola_b74a8f1c98e549babdac5369c20c0741_master.png",
      type: "drink",
      title: "CocaCola",
      price: 10,
      desc: "Cool summer with peachy soda flavor",
    },
    {
      type: "pizza",
      title: "Italian",
      desc: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
      price_s: 10,
      price_m: 15,
      price_l: 20,
      topping_1: 3,
      topping_2: 5,
      img: "https://mymenu.vn/assets/images/products/733/pizza-peperoni-mn-01.png",
    },
    {
      type: "pizza",
      title: "Italian",
      desc: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
      price_s: 10,
      price_m: 15,
      price_l: 20,
      topping_1: 3,
      topping_2: 5,
      img: "https://mymenu.vn/assets/images/products/733/pizza-peperoni-mn-01.png",
    },
    {
      img: "https://product.hstatic.net/1000379753/product/coca_cola_b74a8f1c98e549babdac5369c20c0741_master.png",
      type: "drink",
      title: "CocaCola",
      price: 10,
      desc: "Cool summer with peachy soda flavor",
    },
    {
      img: "https://product.hstatic.net/1000379753/product/coca_cola_b74a8f1c98e549babdac5369c20c0741_master.png",
      type: "drink",
      title: "CocaCola",
      price: 10,
      desc: "Cool summer with peachy soda flavor",
    },
    {
      type: "pizza",
      title: "Italian",
      desc: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
      price_s: 10,
      price_m: 15,
      price_l: 20,
      topping_1: 3,
      topping_2: 5,
      img: "https://mymenu.vn/assets/images/products/733/pizza-peperoni-mn-01.png",
    },
    {
      type: "pizza",
      title: "Italian",
      desc: "Filling: onion, potato, tomato, mushrooms, cheese, olives, meat...",
      price_s: 10,
      price_m: 15,
      price_l: 20,
      topping_1: 3,
      topping_2: 5,
      img: "https://mymenu.vn/assets/images/products/733/pizza-peperoni-mn-01.png",
    },
  ];

  return (
    <div className="px-60 mb-20" id="menu">
      <div className="flex justify-between mt-10">
        <button className="w-52 py-3 text-xl font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500">
          Show All
        </button>
        <button className="w-52 py-3 text-xl font-semibold rounded-full text-white bg-stone-900">
          Meat
        </button>
        <button className="w-52 py-3 text-xl font-semibold rounded-full text-white bg-stone-900 ">
          Vegetarian
        </button>
        <button className="w-52 py-3 text-xl font-semibold rounded-full text-white bg-stone-900">
          Sea products
        </button>
        <button className="w-52 py-3 text-xl font-semibold rounded-full text-white bg-stone-900">
          Mushroom
        </button>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4 pt-8">
        {menuDoc.length > 0 &&
          menuDoc.map((item) => (
            <div
              key={item}
              className="bg-stone-800 bg-opacity-20 pt-8 px-5 pb-5 rounded-3xl flex flex-col"
            >
              <img className="w-1/2 block mx-auto" src={item.img} alt="" />
              <h1 className="text-center font-semibold text-3xl pb-3 pt-4">
                {item.title}
              </h1>
              <h1 className="text-sm text-center text-gray-400">{item.desc}</h1>
              <form className="mx-4">
                {item.type === "pizza" && (
                  <div>
                    <label
                      htmlFor="size-select"
                      className="block text-sm font-medium my-2 dark:text-white"
                    >
                      Select your size
                    </label>
                    <select
                      id="size-select"
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
                      className="py-2 px-3 w-full border-gray-200 rounded-md text-sm bg-stone-800"
                    >
                      <option selected>Regular</option>
                      <option>Thin</option>
                      <option>Cheese Sausage</option>
                    </select>
                  </div>
                )}
                <button className="w-full flex bg-gradient-to-r from-orange-400 to-orange-500 font-semibold justify-between px-10 py-2 rounded-full mt-6">
                  <h1 className="">Add to cart</h1>
                  <h1 className="">12 $</h1>
                </button>
              </form>
            </div>
          ))}
      </div>
    </div>
  );
}
