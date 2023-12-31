import "./App.jsx";
import { UserContextProvider } from "./UserContext.jsx";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import RegisterPage from "./pages/RegisterPage.jsx";
import Layout from "./Layout.jsx";
import axios from "axios";
import ProfilePage from "./pages/ProfilePage.jsx";
import HistoryPage from "./pages/HistoryPage.jsx";
import MenuPage from "./pages/MenuPage.jsx";
import AdminPage from "./pages/AdminPage.jsx";
import CartPage from "./pages/CartPage.jsx";
import { CartContextProvider } from "./CartContext.jsx";
import SuccessPayment from "./pages/SuccessPayment.jsx";
import ViewOrder from "./pages/ViewOrder.jsx";
axios.defaults.baseURL = "http://localhost:3001/";
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <CartContextProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<IndexPage />} />
            <Route path="/menu" element={<MenuPage />} />
            <Route path="/menu/:query" element={<MenuPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/account/profile" element={<ProfilePage />} />
            <Route path="/account/history" element={<HistoryPage />} />
            <Route path="/payment/success" element={<SuccessPayment />} />
            <Route path="/order/:orderId" element={<ViewOrder />} />
          </Route>
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
      </CartContextProvider>
    </UserContextProvider>
  );
}

export default App;
