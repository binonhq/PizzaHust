import { useContext, useState } from "react";
import { Helmet } from "react-helmet";
import { BrowserRouter, Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import { UserContext } from "../UserContext";
import AdminHeader from "../AdminHeader";
import AdminSidebar from "../AdminSidebar";
import AdminContent from "../AdminContent";
import AdminContentUser from "../AdminContentUser";
import AdminContentProduct from "../AdminContentProduct";

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
      <title>Vietpro Mobile Shop - Administrator</title>
      <link href="css/bootstrap.min.css" rel="stylesheet" />
      <link href="css/datepicker3.css" rel="stylesheet" />
      <link href="css/bootstrap-table.css" rel="stylesheet" />
      <link href="css/styles.css" rel="stylesheet" />
      {/*Icons*/}
      {/*[if lt IE 9]>


<![endif]*/}
      <AdminHeader />
      <div id="sidebar-collapse" className="col-sm-3 col-lg-2 sidebar">
        <AdminSidebar />
      </div>{/*/.sidebar*/}

      <AdminContentUser />


    </>

  );
}


{/* <Routes>
<Route path="/admin-home" element={<AdminContent/>} />
<Route path="/user" element={<AdminContentUser/>} />
<Route path="/product" element={<AdminContent/>} />
</Routes> */}