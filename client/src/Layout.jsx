import Footer from "./Footer";
import Header from "./Header";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col duration-200">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
