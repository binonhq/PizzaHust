import { useContext, useState } from "react";
import { Navigate } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";
import AccountNav from "../AccountNav";

export default function ProfilePage() {
  const { ready, user, setUser } = useContext(UserContext);
  const [redirect, setRedirect] = useState(null);
  const [editing, setEditing] = useState(false);
  const [editedData, setEditedData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

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

  const handleEdit = () => {
    setEditedData({
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.address,
    });
    setEditing(true);
  };

  const handleCancelEdit = () => {
    setEditing(false);
  };

  const handleSaveEdit = async () => {
    // Check if any field is empty
    if (
      !editedData.name ||
      !editedData.email ||
      !editedData.phoneNumber ||
      !editedData.address
    ) {
      return alert("All fields are required");
    }

    // Check email format
    const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    if (!emailRegex.test(editedData.email)) {
      return alert("Invalid email format");
    }

    // Check if the phone number has 10 digits
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(editedData.phoneNumber)) {
      return alert("Phone number must have 10 digits");
    }
    try {
      await axios.put(`users/${user._id}`, editedData);
      setUser({ ...user, ...editedData });
      setEditing(false);
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

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
                {editing ? (
                  <input
                    className="bg-transparent border-2 border-white text-white"
                    type="text"
                    value={editedData.name}
                    onChange={(e) =>
                      setEditedData({ ...editedData, name: e.target.value })
                    }
                  />
                ) : (
                  user.name
                )}
              </td>
            </tr>
            <tr>
              <td className="font-semibold">Email: </td>
              <td className="pl-10 md:pl-20 text-slate-500">
                {editing ? (
                  <input
                    className="bg-transparent border-2 border-white text-white"
                    type="email"
                    value={editedData.email}
                    onChange={(e) =>
                      setEditedData({ ...editedData, email: e.target.value })
                    }
                  />
                ) : (
                  user.email
                )}
              </td>
            </tr>
            <tr>
              <td className="font-semibold">Phone: </td>
              <td className="pl-10 md:pl-20 text-slate-500">
                {editing ? (
                  <input
                    className="bg-transparent border-2 border-white text-white"
                    type="tel"
                    value={editedData.phoneNumber}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        phoneNumber: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.phoneNumber
                )}
              </td>
            </tr>
            <tr>
              <td className="font-semibold">Address: </td>
              <td className="pl-10 md:pl-20 text-slate-500">
                {editing ? (
                  <input
                    className="bg-transparent border-2 border-white text-white"
                    type="text"
                    value={editedData.address}
                    onChange={(e) =>
                      setEditedData({
                        ...editedData,
                        address: e.target.value,
                      })
                    }
                  />
                ) : (
                  user.address
                )}
              </td>
            </tr>
            <tr>
              <td></td>
              <td className="pl-10 md:pl-20">
                {editing ? (
                  <div className="flex gap-2">
                    <button
                      className="mt-5 pr-5 pl-4 py-2 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500 flex gap-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                      onClick={handleSaveEdit}
                    >
                      Save
                    </button>
                    <button
                      className="mt-5 pr-5 pl-4 py-2 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500 flex gap-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                      onClick={handleCancelEdit}
                    >
                      Cancel
                    </button>
                  </div>
                ) : (
                  <button
                    className="mt-5 pr-5 pl-4 py-2 font-semibold rounded-full text-white bg-gradient-to-r from-orange-400 to-orange-500 flex gap-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition transform hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:transform-none"
                    onClick={handleEdit}
                  >
                    Edit
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex place-content-center mt-20">
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
