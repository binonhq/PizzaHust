import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
import AdminDash from "../AdminDash";
import AdminUser from "../AdminUser";
import AdminProduct from "../AdminProduct";
import AdminAddProduct from "../AdminAddProduct";

export default function AdminPage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);
  console.log("xinchao", user);
  if (!ready) {
    return "Loading...";
  }

  if (ready && !user) {
    return <Navigate to={"/login"} />;
  }

  async function logout() {
    await axios.post("/auth/logout");
    setUser(null);
    setRedirect("/");
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }
  return (

    <>

      <Helmet>
        <script src="../public/js/jquery-1.11.1.min.js"></script>
        <script src="../public/js/bootstrap.min.js"></script>
        <script src="../public/js/bootstrap-table.js"></script>
      </Helmet>

      <AdminHeader />
      <AdminSidebar />
      <AdminAddProduct/>



    </>

  );
}

