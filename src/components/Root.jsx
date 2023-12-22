import { Outlet } from "react-router-dom";
import Navbar from "../Layout/Navbar";
import Footer from "../Layout/Footer";
const Root = () => {
  return (
    <div className="min-h-screen bg-[#000A1F] text-white">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <div className="min-h-screen md:px-4 px-2">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Root;
