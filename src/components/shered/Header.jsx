import { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useAuth } from "../../hooks/useAuth";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { AiOutlineShoppingCart } from "react-icons/ai";
import useCarts from "../../hooks/useCarts";
import useAdmin from "../../hooks/useAdmin";

const Header = () => {
  const { isAdmin } = useAdmin();
  const { cartsData } = useCarts();
  const { user, logOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation() || "/";
  const navigate = useNavigate();
  const closeNavbar = () => {
    setIsOpen(false);
  };

  //   handle user login
  const handleLogout = () => {
    logOut();
    navigate("/login");
  };
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className={`h-16  shadow-md flex items-center transform transition-all z-50 bg-white sticky top-0 left-0  right-0 ${
        isOpen ? "bg-opacity-100" : ""
      }`}
    >
      <nav className="flex haven-container justify-between">
        <div className="flex justify-between items-center w-full md:w-auto gap-10">
          <div className="w-full">
            <Link to="/" className="text-xl md:text-2xl">
              SportsHaven
            </Link>
          </div>
          <span className="md:hidden">
            <Hamburger onToggle={() => setIsOpen(!isOpen)} color="#FF6633" />
          </span>
        </div>
        <ul
          className={`bg-white flex flex-col items-center left-0 border-b-1 transition-all transform duration-700 py-10 md:py-0 md:flex-row absolute md:static mt-1 gap-9 md:bg-transparent uppercase text-sm tracking-wider md:px-0 px-10  ${
            isOpen ? "top-14 bg-white right-0" : "-top-96 right-full"
          }`}
        >
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? "active-link" : "primary-link"
              }
              to="/"
              onClick={closeNavbar}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              onClick={closeNavbar}
              className={({ isActive }) =>
                isActive ? "active-link" : "primary-link"
              }
              to="/allproducts"
            >
              All Products
            </NavLink>
          </li>
          <li>
            <Link
              className="flex gap-1 items-center"
              to={`${
                isAdmin ? "/dashboard/summary" : "/dashboard/order-summary"
              }`}
            >
              <MdOutlineDashboardCustomize color="FF6633" className="text-xl" />
              Dashboard
            </Link>
          </li>

          <li className="flex gap-3 items-center">
            <span>
              <Link
                to="/carts"
                className="relative inline-flex items-center p-3 text-sm font-medium text-center rounded-lg"
              >
                <AiOutlineShoppingCart size={30} color="#FF6633" />

                <div className="absolute inline-flex items-center justify-center w-6 h-6 bg-[#ff6633c7] text-white text-xs font-bold marker:bg-red-500 border-2 border-white rounded-full -top-1 -right-1 ">
                  <span className="p-1">
                    {cartsData ? cartsData.length : 0}
                  </span>
                </div>
              </Link>
            </span>
            {user && (
              <div className="">
                <img
                  className="rounded-full object-cover"
                  src={user?.photoURL}
                  alt="user"
                  width={45}
                  height={45}
                />
              </div>
            )}

            <button
              className="px-3 py-1 bg-[#FF6633] text-white font-semibold rounded-3xl hover:bg-[#FF803F] transition-colors duration-300"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
