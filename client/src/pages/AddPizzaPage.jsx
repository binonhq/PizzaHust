import React, { useContext, useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import AccountNav from "../AccountNav"; // Import your AccountNav component

export default function AddPizzaPage() {
  const { ready, user } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    if (!ready) {
      return;
    }

    if (!user || !user.isAdmin) {
      setRedirect("/");
    }
  }, [ready, user]);

  const handleAddPizza = () => {
    // Add pizza logic here
    // You can use axios or any other method to send the request to your server
    // After adding the pizza, you can redirect the user to another page if needed
  };

  if (!ready) {
    return "Loading...";
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div>
      <AccountNav /> {/* Include your navigation bar */}
      <div className="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
        <div className="row">
          <div className="col-lg-12">
            <h1 className="page-header">Thêm sản phẩm</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="panel panel-default">
              <div className="panel-body">
                {/* Rest of your form code */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}




