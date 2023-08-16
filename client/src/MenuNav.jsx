import { Link, useLocation } from "react-router-dom";
export default function MenuNav() {
  const { pathname } = useLocation();
  let subpage = pathname.split("/")?.[2];
  if (subpage === undefined) {
    subpage = "all";
  }
  function linkClasses(type = null) {
    let classes =
      "w-full py-2 px-1 text-center text-xl font-semibold rounded-full text-white transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none";
    if (type === subpage) {
      classes += " bg-gradient-to-r from-orange-400 to-orange-500 ";
    } else {
      classes += " bg-stone-900";
    }
    return classes;
  }
  return (
    <div className="flex justify-between mt-10 gap-6">
      <Link to="/menu" className={linkClasses("all")}>
        Show All
      </Link>
      <Link to="/menu/combo" className={linkClasses("combo")}>
        Combo
      </Link>
      <Link to="/menu/pizza" className={linkClasses("pizza")}>
        Pizza
      </Link>
      <Link to="/menu/pasta-and-rice" className={linkClasses("pasta-and-rice")}>
        Pasta and Rice
      </Link>
      <Link to="/menu/starter" className={linkClasses("starter")}>
        Starter
      </Link>
      <Link to="/menu/drink" className={linkClasses("drink")}>
        Drink
      </Link>
    </div>
  );
}
