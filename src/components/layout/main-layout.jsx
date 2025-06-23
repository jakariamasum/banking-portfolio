import { Outlet } from "react-router-dom";
import Navbar from "../navbar";
import Footer from "../footer";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;
