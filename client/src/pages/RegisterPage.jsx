import { Link, Navigate } from "react-router-dom";
import Footer from "../Footer";
import axios from "axios";
import { useState } from "react";
export default function RegisterPage() {
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [cfPassword, setCfPassword] = useState("");
  const [redirect, setRedirect] = useState(false);

  async function registerUser(ev) {
    ev.preventDefault();
    if (password !== cfPassword) {
      alert("The password confirmation does not match!");
      return;
    } else {
      try {
        await axios.post("/auth/signup", {
          username,
          password,
          name,
          email,
          phoneNumber,
          address: "",
        });
        alert("Registration successful! Now you can login.");
        setRedirect(true);
      } catch (e) {
        alert("Registration failed. Please try again.");
      }
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
          <div className="pt-2 pb-3 px-5 rounded-2xl bg-stone-800  mb-4">
            <h1 className="text-stone-500 text-sm">Your name</h1>
            <input
              value={name}
              onChange={(ev) => setName(ev.target.value)}
              className="bg-stone-800 w-full outline-none"
              type="text"
              placeholder="John Adam"
            />
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
          <div className="pt-2 pb-3 px-5 rounded-2xl bg-stone-800 mb-4">
            <h1 className="text-stone-500 text-sm">Phone number</h1>
            <input
              value={phoneNumber}
              onChange={(ev) => setPhoneNumber(ev.target.value)}
              className="bg-stone-800 w-full outline-none"
              type="text"
            />
          </div>
          <div className="pt-2 pb-3 px-5 rounded-2xl bg-stone-800  mb-4">
            <h1 className="text-stone-500 text-sm">Username</h1>
            <input
              value={username}
              onChange={(ev) => setUsername(ev.target.value)}
              className="bg-stone-800 w-full outline-none"
              type="text"
            />
          </div>
          <div className="pt-2 pb-3 px-5 rounded-2xl bg-stone-800 mb-4 ">
            <h1 className="text-stone-500 text-sm">Password</h1>
            <input
              value={password}
              onChange={(ev) => setPassword(ev.target.value)}
              className="bg-stone-800 w-full outline-none"
              type="password"
            />
          </div>
          <div className="pt-2 pb-3 px-5 rounded-2xl bg-stone-800">
            <h1 className="text-stone-500 text-sm">Confirm password</h1>
            <input
              value={cfPassword}
              onChange={(ev) => setCfPassword(ev.target.value)}
              className="bg-stone-800 w-full outline-none"
              type="password"
            />
          </div>
          <button
            onClick={registerUser}
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
