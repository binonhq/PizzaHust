import React from "react";

const AdminHeader = () => {
    return (
        <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div className="container-fluid">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#sidebar-collapse">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#"><span>PizzaHust</span>Shop</a>
            <ul className="user-menu">
              <li className="dropdown pull-right">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown"> Admin <span className="caret" /></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Hồ sơ</a></li>
                  <li><a href="#">Đăng xuất</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>{/* /.container-fluid */}
      </nav>
    );
};

export default AdminHeader;
