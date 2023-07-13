import { Link, Navigate } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";
import { useState } from "react";
export default function RegisterPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function registerUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        firstName,
        lastName,
        email,
        password,
      });
      alert("Registration successful! Now you can login.");
      setRedirect(true);
    } catch (e) {
      alert("Registration failed. Please try again.");
    }
  }
  if (redirect) {
    return <Navigate to={"/login"} />;
  }
  return (
    <div className="flex flex-col min-h-screen">
      <div className="mb-auto lg:w-1/3 mx-auto mt-auto rounded-3xl bg-stone-900 p-10 ">
        <h1 className="uppercase font-semibold text-orange-400 pb-2">
          Start for free
        </h1>
        <h1 className="font-semibold text-4xl">Create new account.</h1>
        <h1 className="font-semibold text-gray-500 pt-4">
          Already a Member?{" "}
          <Link
            to="/login"
            className="text-orange-400 hover:underline hover:cursor-pointer"
          >
            Log in
          </Link>
        </h1>
        <form className="mt-10" onSubmit={registerUser}>
          <div className="grid grid-cols-2 gap-6 pb-4">
            <div className="pt-2 pb-3 px-5 rounded-2xl bg-stone-800 w-ful">
              <h1 className="text-stone-500 text-sm">First name</h1>
              <input
                value={firstName}
                onChange={(ev) => setFirstName(ev.target.value)}
                className="bg-stone-800 w-full outline-none"
                type="text"
                placeholder="Michel"
              />
            </div>
            <div className="pt-2 pb-3 px-5 rounded-2xl bg-stone-800 w-full">
              <h1 className="text-stone-500 text-sm">Last name</h1>
              <input
                value={lastName}
                onChange={(ev) => setLastName(ev.target.value)}
                className="bg-stone-800 w-full outline-none"
                type="text"
                placeholder="John"
              />
            </div>
          </div>
          <div className="pt-2 pb-3 px-5 rounded-2xl bg-stone-800 mb-4">
            <h1 className="text-stone-500 text-sm">Email</h1>
            <input
              value={email}
              onChange={(ev) => setEmail(ev.target.value)}
              className="bg-stone-800 w-full outline-none"
              type="text"
              placeholder="your@email.com"
            />
          </div>
          <div className="pt-2 pb-3 px-5 rounded-2xl bg-stone-800">
            <h1 className="text-stone-500 text-sm">Password</h1>
            <input
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              className="bg-stone-800 w-full outline-none"
              type="password"
              placeholder="•••••••••••••••"
            />
          </div>
          <button
            type="submit"
            className="px-8 py-2 mt-10 block mx-auto text-lg font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500"
          >
            Create account
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}
