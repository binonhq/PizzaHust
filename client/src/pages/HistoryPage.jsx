import { useContext, useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import AccountNav from "../AccountNav";

export default function HistoryPage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [orders, setOrders] = useState([]);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    if (user) {
      axios
        .get(`/users/${user._id}`)
        .then((response) => {
          const sortedOrders = response.data.orders.sort((a, b) => {
            return new Date(b.createdAt) - new Date(a.createdAt);
          });
          setOrders(sortedOrders);
        })
        .catch((error) => {
          console.error("Failed to fetch user's orders:", error);
        });
    }
  }, [user]);

  if (!ready) {
    return "Loading...";
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="mx-auto pt-5">
      <AccountNav />
      <div className="text-2xl font-semibold mb-5 text-center">Order History</div>
      <table className="table table-bordered custom-table">
        <thead className="thead-light">
          <tr>
            <th className="text-center px-10">Order Date</th>
            <th className="text-center px-10">Total Price</th>
            <th className="text-center px-10">Payment Method</th>
            <th className="text-center px-10">Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td className="text-center px-10">
                {new Date(order.createdAt).toLocaleDateString()}
              </td>
              <td className="text-center px-10">{order.totalPrice+order.feePrice} đ</td>
              <td className="text-center px-10">{order.paymentMethod}</td>
              <td className="text-center px-10">{order.status}</td>
              <td className="text-center px-10">
                <Link to={`/order/${order._id}`} className="mx-auto mx-2 py-2 my-3 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500 flex gap-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none" style={{ padding: '10px 20px' }}>
                  View Detail
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
