import pizza2 from "../images/pizza2.png";
import pizza3 from "../images/pizza3.png";
import pizza5 from "../images/pizza5.jpg";
import pizza6 from "../images/pizza6.png";
import pizza7 from "../images/pizza7.png";
import Product from "../Product";
import { Link } from "react-router-dom";
export default function IndexPage() {
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
    <div className="">
      <div className="flex justify-between mt-12 pl-60 pr-10 " id="home">
        <div>
          <h1 className="mt-32 lg:text-7xl font-extrabold">The Fastest</h1>
          <div className="flex gap-3 mt-4 items-center text-7xl font-extrabold">
            <h1>Pizza</h1>
            <img className="h-20 mt-3" src={pizza3} alt="" />
            <h1>Delivery</h1>
          </div>
          <h1 className="text-xl text-gray-400 w-3/4 my-5">
            We will deliver juicy pizza for your family in 30 minutes, if the
            courier is late - pizza is free!
          </h1>
          <Link to="/menu">
            <button className="px-14 py-2 text-xl font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none">
              Order now!
            </button>
          </Link>
        </div>
        <div>
          <img className="rounded-3xl object-cover h-5/6" src={pizza2} />
        </div>
      </div>
      <div
        style={{
          backgroundImage: `url(${pizza5})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className="rounded-3xl shadow-lg text-center py-32 -mt-20 mb-10 mx-60 "
      >
        <h1 className="text-4xl font-semibold text-white pb-2">
          MOST POPULAR PIZZA
        </h1>
      </div>
      <div className="mt-4 grid grid-cols-4 gap-4 pt-8 mx-60">
        {menuDoc.length > 0 &&
          menuDoc.map((item) => <Product product={item} key={item} />)}
      </div>
      <div className="flex justify-between ml-60 mt-20 -mb-16" id="about-us">
        <div className="w-1/2">
          <h1 className="mt-32 lg:text-7xl font-extrabold">About us</h1>
          <h1 className="text-md text-gray-400 w-3/4 my-4">
            In just a couple of years, we have opened 6 outlets in different
            cities: Hanoi, Ho Chi Minh City, Da Nang, and in the future we plan
            to develop the network in other major cities of VietNam.
          </h1>
          <img className="rounded-3xl object-cover h-1/6 py-3" src={pizza6} />
        </div>
        <div>
          <img className="rounded-3xl object-cover h-5/6" src={pizza7} />
        </div>
      </div>
    </div>
  );
}
