import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import AccountNav from "../AccountNav";

export default function ProfilePage() {
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
    <div className="mx-auto pt-5">
      <AccountNav />
      <div className="">
        <h1 className="text-3xl font-semibold">Personal details</h1>
        <h2 className="text-slate-500 pt-1">Edit your personal details</h2>
        <img
          className="h-32 border-2 rounded-full my-8"
          src="https://i.pinimg.com/originals/39/a4/71/39a47159059f38a954d77e5dcae6f0db.jpg"
          alt="avatar"
        />
        <table className="table-auto">
          <tbody>
            <tr>
              <td className="font-semibold">Name: </td>
              <td className="capitalize pl-10 md:pl-20 text-slate-500">
                {user.name}
              </td>
            </tr>
            <tr>
              <td className="font-semibold">Email: </td>
              <td className="pl-10 md:pl-20 text-slate-500">{user.email}</td>
            </tr>
          </tbody>
        </table>
      </div>
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
