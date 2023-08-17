import { Link, useLocation } from "react-router-dom";
import { UserContext } from "./UserContext";
import { useContext } from "react";
import { CartContext } from "./CartContext";

export default function Header() {
  const userInfo = useContext(UserContext);
  const { pathname } = useLocation();
  const { cart } = useContext(CartContext);
  let page = pathname.split("/")?.[1];

  if (page === "") {
    page = "home";
  }

  function linkClasses(type = null) {
    let classes =
      "bg-clip-text bg-gradient-to-r transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none";
    if (type === page) {
      classes += " from-orange-400 to-orange-500";
    } else {
      classes += " from-gray-400 to-gray-500";
    }
    return classes;
  }

  return (
    <div className="flex justify-between mx-40 pt-12">
      <div className="flex gap-14 text-center items-center font-medium text-transparent text-xl">
        <Link
          to="/"
          className="font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500"
        >
          pizzaHust
        </Link>
        <Link className={linkClasses("home")} to="/">
          Home
        </Link>
        <Link to="/menu" className={linkClasses("menu")}>
          Menu
        </Link>
      </div>
      <div className="flex gap-6">
        {!userInfo.user && (
          <Link
            to="/login"
            className="px-14 text-lg py-2 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            Log in
          </Link>
        )}
        {userInfo.user && (
          <Link
            to="/account/profile"
            className="flex gap-3 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            <h1 className="text-lg font-semibold my-auto capitalize">
              {userInfo.user.name}
            </h1>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.8}
              stroke="currentColor"
              className="w-11 h-11 p-2 rounded-full bg-gradient-to-r from-orange-400 to-orange-500 text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </Link>
        )}
        <Link
          to="/cart"
          type="button"
          className="relative p-2 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.8}
            stroke="currentColor"
            className="w-7 h-7 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <span className="sr-only">Notifications</span>
          <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
            {cart.length}
          </div>
        </Link>
      </div>
    </div>
  );
}
