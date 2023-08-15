import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { UserContext } from "../UserContext";

export default function AdminPage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);
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
    <div>
      <div className="flex place-content-center mt-52">
        <button
          className="pr-5 pl-4 py-2 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500 flex gap-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
          onClick={logout}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          <h1 className="font-semibold ">Log out</h1>
        </button>
      </div>
    </div>
  );
}
