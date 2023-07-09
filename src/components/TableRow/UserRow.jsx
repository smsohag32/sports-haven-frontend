import { Link } from "react-router-dom";

const UserRow = ({ user, index }) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img src={user?.image} alt="customer" width={80} height={80} />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 primary-text whitespace-no-wrap">
          {user?.name}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user?.email}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link to={`/dashboard/customer/${user?._id}`} className="cart-btn">
          Details
        </Link>
      </td>
    </tr>
  );
};

export default UserRow;
