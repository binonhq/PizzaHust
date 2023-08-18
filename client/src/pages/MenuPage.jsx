import { useEffect, useState } from "react";
import MenuNav from "../MenuNav";
import MenuProduct from "../MenuProduct";
import { useLocation } from "react-router-dom";
import axios from "axios";
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
  const [listItem, setListItem] = useState([]);
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];
  if (subpage === undefined) {
    subpage = "all";
  }
  console.log(subpage);
  useEffect(() => {
    if (subpage === "pizza") {
      axios
        .get("/pizzas", {})
        .then((response) => {
          setListItem(response.data);
        })
        .catch((e) => {
          alert(e);
        });
    }
  }, [subpage]);

  return (
    <div className="px-60 mb-20" id="menu">
      <MenuNav />
      <div className="mt-4 grid grid-cols-4 gap-4 pt-8">
        {listItem.length > 0 &&
          listItem.map((item) => <MenuProduct product={item} key={item} />)}
      </div>
    </div>
  );
}
