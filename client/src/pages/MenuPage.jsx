import { useEffect, useState } from "react";
import MenuNav from "../MenuNav";
import MenuProduct from "../MenuProduct";
import { useLocation } from "react-router-dom";
import axios from "axios";
export default function MenuPage() {
  const [listItem, setListItem] = useState([]);
  const { pathname } = useLocation();
  let subPage = pathname.split("/")?.[2];
  useEffect(() => {
    axios
      .get("/search")
      .then((response) => {
        const allItem = response.data;
        setListItem(allItem);
        if (subPage) {
          setListItem((preList) =>
            preList.filter((item) => item.category === subPage)
          );
        }
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, [subPage]);

  return (
    <div className="px-60 mb-20" id="menu">
      <MenuNav />
      <div className="mt-4 grid grid-cols-4 gap-4 pt-8">
        {listItem.length > 0 &&
          listItem.map((item) => <MenuProduct product={item} key={item._id} />)}
      </div>
    </div>
  );
}
