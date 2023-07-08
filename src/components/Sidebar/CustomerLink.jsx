import { NavLink } from "react-router-dom";
import { GrDeliver } from "react-icons/gr";
const CustomerLink = () => {
  return (
    <>
      <NavLink
        to="/dashboard/order-summary"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5 duration-300 transform ${
            isActive ? "active-link" : "primary-link"
          }`
        }
      >
        <GrDeliver className="w-5 h-5" />
        <span className="mx-4 font-medium">Order Summary</span>
      </NavLink>
    </>
  );
};

export default CustomerLink;
