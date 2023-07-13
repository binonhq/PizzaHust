import { useContext, useState, useEffect } from "react";
import { Navigate, useLocation, Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import AccountNav from "../AccountNav";

export default function HistoryPage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);
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
      <div className="">history </div>
    </div>
  );
}
