import { NavLink } from "react-router-dom";
import { VscGraph } from "react-icons/vsc";
import { FaShopify, FaUsersCog } from "react-icons/fa";
import { MdOutlineAddShoppingCart } from "react-icons/md";
const AdminLink = () => {
  return (
    <>
      <NavLink
        to="/dashboard/summary"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 duration-300 transform ${
            isActive ? "active-link" : "primary-link"
          }`
        }
      >
        <VscGraph className="w-5 h-5" />
        <span className="mx-4 font-medium">Overview</span>
      </NavLink>
      <NavLink
        to="/dashboard/manage-customer"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 duration-300 transform ${
            isActive ? "active-link" : "primary-link"
          }`
        }
      >
        <FaUsersCog className="w-5 h-5" />
        <span className="mx-4 font-medium">Manage Customer</span>
      </NavLink>
      <NavLink
        to="/dashboard/add-products"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 duration-300 transform ${
            isActive ? "active-link" : "primary-link"
          }`
        }
      >
        <MdOutlineAddShoppingCart className="w-5 h-5" />
        <span className="mx-4 font-medium">Add Products</span>
      </NavLink>
      <NavLink
        to="/dashboard/manage-products"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 duration-300 transform ${
            isActive ? "active-link" : "primary-link"
          }`
        }
      >
        <FaShopify className="w-5 h-5" />
        <span className="mx-4 font-medium">Manage Products</span>
      </NavLink>
    </>
  );
};

export default AdminLink;
