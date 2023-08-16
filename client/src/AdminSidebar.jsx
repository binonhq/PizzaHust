import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (

    <div>
      <form role="search">
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Search" />
        </div>
      </form>
      <ul className="nav menu">
        <li><Link to="/admin-home">Dashboard</Link></li>
        <li><Link to="/user">Quản lý thành viên</Link></li>
        <li><Link to="/product">Quản lý sản phẩm</Link></li>
      </ul>
    </div>


  );
};

export default AdminSidebar;
