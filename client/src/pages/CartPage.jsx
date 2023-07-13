import { Link } from "react-router-dom";
export default function CartPage() {
  return (
    <div>
      <h1>avsd</h1>
      <Link
        to="/payment"
        className="w-40 pr-5 pl-4 py-2 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500 flex gap-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
      >
        <h1 className="font-semibold ">Payment</h1>
      </Link>
    </div>
  );
}
