import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccountNav from "../AccountNav";
import axios from "axios";

export default function ViewOrder() {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);

  useEffect(() => {
    axios
      .get(`/orders/${orderId}`)
      .then((response) => {
        setOrder(response.data);
      })
      .catch((error) => {
        console.error("Failed to fetch order:", error);
      });
  }, [orderId]);

  if (!order) {
    return "Loading...";
  }

  if (order.items) {
    const combos = order.items.combos || [];
    const pizzas = order.items.pizzas || [];
    const sideDishes = order.items.sideDishes || [];

    return (
      <div className="mx-auto pt-5">
        <AccountNav />
        <div className="text-3xl font-semibold mb-5 text-center">
          Order Detail
        </div>

        {/* Combo section */}
        {combos.length > 0 && (
          <div className="pt-10">
            <h2 className="text-xl font-semibold mb-2">Combos</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left px-10">Combo Name</th>
                  <th className="text-center px-10">Price</th>
                  <th className="text-center px-10">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {combos.map((combo) => (
                  <tr key={combo._id}>
                    <td className="text-left px-10">{combo.combo.name}</td>
                    <td className="text-center px-10">{combo.price}đ</td>
                    <td className="text-center px-10">{combo.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Pizza section */}
        {pizzas.length > 0 && (
          <div className="pt-10">
            <h2 className="text-xl font-semibold mb-2">Pizzas</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left px-10">Pizza Name</th>            
                  <th className="text-center px-10">Size</th>
                  <th className="text-center px-10">Topping</th>
                  <th className="text-center px-10">Crust</th> 
                  <th className="text-center px-10">Price</th>
                  <th className="text-center px-10">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {pizzas.map((pizza) => (
                  <tr key={pizza._id}>
                    <td className="text-left px-10">
                      {pizza.pizza.name}
                    </td>
                    <td className="text-center px-10">{pizza.size}</td>
                    <td className="text-center px-10">{pizza.topping}</td>
                    <td className="text-center px-10">{pizza.crust}</td>
                    <td className="text-center px-10">{pizza.price}đ</td>
                    <td className="text-center px-10">{pizza.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Side dish section */}
        {sideDishes.length > 0 && (
          <div className="pt-10">
            <h2 className="text-xl font-semibold mb-2">Side Dishes</h2>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="text-left px-10">Side Dish Name</th>
                  <th className="text-center px-10">Price</th>
                  <th className="text-center px-10">Quantity</th>
                </tr>
              </thead>
              <tbody>
                {sideDishes.map((sideDish) => (
                  <tr key={sideDish._id}>
                    <td className="text-leftcenter px-10">
                      {sideDish.sideDish.name}
                    </td>
                    <td className="text-center px-10">{sideDish.price}đ</td>
                    <td className="text-center px-10">{sideDish.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Total Price */}
        <div className="pt-10">
          <table className="mx-auto mb-10">
            <tbody>
              <tr>
                <td className="text-left text-xl pr-4">Subtotal:</td>
                <td className="font-semibold text-xl text-right">{order.totalPrice} đ</td>
              </tr>
              <tr>
                <td className="text-left text-xl pr-4">Delivery fee:</td>
                <td className="font-semibold text-xl text-right">{order.feePrice} đ</td>
              </tr>
              <tr>
                <td className="text-left text-xl pr-4">Total Price:</td>
                <td className="font-semibold text-xl text-right">
                  {order.totalPrice + order.feePrice} đ
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  } else {
    return "Invalid order data";
  }
}
