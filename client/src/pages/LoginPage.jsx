import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import axios from "axios";
import { UserContext } from "../UserContext";
import Footer from "../Footer";
export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState("");
  const { setUser } = useContext(UserContext);

  async function handleLoginSubmit(ev) {
    ev.preventDefault();
    try {
      const { data } = await axios.post("/auth/login", {
        username,
        password,
      });
      alert("Login successful.");
      setUser(data);
      if (data.isAdmin) {
        setRedirect("/admin");
      } else {
        setRedirect("/");
      }
    } catch (error) {
      console.log(error);
      alert("Login failed.");
    }
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Link
        to="/"
        className="font-extrabold text-transparent text-6xl bg-clip-text bg-gradient-to-r from-orange-400 to-orange-500 mx-auto my-auto"
      >
        pizzaHust
      </Link>
      <div className="mb-auto lg:w-1/3 mx-auto rounded-3xl bg-stone-900 p-10 ">
        <h1 className="uppercase font-semibold text-orange-400 pb-2">
          Welcome back
        </h1>
        <h1 className="font-semibold text-4xl">Login to your account.</h1>
        <h1 className="font-semibold text-gray-500 pt-4">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-orange-400 hover:underline hover:cursor-pointer"
          >
            Register
          </Link>
        </h1>
        <form className="mt-10" onSubmit={handleLoginSubmit}>
          <div className="pt-2 pb-3 px-5 rounded-2xl bg-stone-800 mb-4">
            <h1 className="text-stone-500 text-sm">Username</h1>
            <input
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              className="bg-stone-800 w-full outline-none"
              type="text"
              placeholder="username"
            />
          </div>
          <div className="pt-2 pb-3 px-5 rounded-2xl bg-stone-800">
            <h1 className="text-stone-500 text-sm">Password</h1>
            <input
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              className="bg-stone-800 w-full outline-none"
              type="password"
              placeholder="•••••••"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-1.5 mt-5 block mx-auto text-lg font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500"
          >
            Log in
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
