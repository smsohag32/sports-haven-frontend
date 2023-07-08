import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { GrLogout } from "react-icons/gr";
import { AiOutlineBars } from "react-icons/ai";
import { useAuth } from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
import { FaHome } from "react-icons/fa";
import AdminLink from "./AdminLink";
import CustomerLink from "./CustomerLink";

const Sidebar = () => {
  const { isAdmin } = useAdmin();
  const { logOut, user } = useAuth();
  const [isOpen, setIsOpen] = useState("false");
  const navigate = useNavigate();

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  // handle logout
  const handleLogOut = () => {
    logOut();
    navigate("/");
  };

  return (
    <>
      {/* Small Screen  */}
      <div className="bg-gray-100 text-gray-800 flex justify-between md:hidden">
        <div>
          <div className="block cursor-pointer p-4 font-bold">
            <span>SportsHaven</span>
          </div>
        </div>

        <button
          onClick={handleToggle}
          className="mobile-menu-button p-4 focus:outline-none focus:bg-gray-200"
        >
          <AiOutlineBars className="h-5 w-5" />
        </button>
      </div>

      {/* Sidebar */}
      <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-white w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isOpen && "-translate-x-full"
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          {/* profile information */}
          <div>
            <div className="w-full hidden md:flex py-2 justify-center items-center mx-auto">
              <span className="font-bold text-xl">
                Sports<span className="primary-text">Haven</span>
              </span>
            </div>
            <div className="flex flex-col items-center mt-6 -mx-2">
              <div>
                <img
                  className="object-cover cursor-pointer w-24 h-24 mx-2 rounded-full"
                  src={user?.photoURL}
                  alt="avatar"
                  referrerPolicy="no-referrer"
                />
              </div>
              <Link to="">
                <h4 className="mx-2 mt-2 font-medium text-gray-800">
                  {user?.displayName}
                </h4>
              </Link>
              <Link to="">
                <p className="mx-2 mt-1 text-sm font-medium text-gray-600">
                  {user?.email}
                </p>
              </Link>
            </div>
          </div>
          {/* Nav Items */}
          <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>{isAdmin ? <AdminLink /> : <CustomerLink />}</nav>
          </div>
        </div>

        <div>
          <hr />
          <NavLink
            to="/"
            className={({ isActive }) =>
              `flex mt-5 mb-8 gap-2 items-center justify-center ${
                isActive ? "active-link" : "primary-link"
              }`
            }
          >
            <FaHome className="w-5 h-5" />
            <span className="mx-4 font-medium">Home</span>
          </NavLink>
          <button
            onClick={handleLogOut}
            className="flex w-full items-center px-4 py-2 mt-5  hover:bg-[#FF6633] hover:text-white transition-colors duration-300 transform"
          >
            <GrLogout className="w-5 h-5" color="#FF6633" />
            <span className="mx-4 font-medium">Logout</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
