import { Link } from "react-router-dom";

const OrderRow = ({ order, isAdmin }) => {
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{order?._id}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{order?.date}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 primary-text whitespace-no-wrap">
          {order?.total_cost}
        </p>
      </td>
      {isAdmin && (
        <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
          <p className="text-gray-900 primary-text whitespace-no-wrap">
            {order?.customer_name}
          </p>
        </td>
      )}
      <td className="px-5 font-semibold py-5 border-b border-gray-200 bg-white text-xs">
        <p className="text-gray-900 whitespace-no-wrap">
          {isAdmin ? "Pending" : "Processing"}
        </p>
      </td>
      <td className="px-5 font-semibold py-5 border-b border-gray-200 bg-white text-xs">
        <p className="text-gray-900 whitespace-no-wrap">
          <Link to={`/dashboard/orders/${order._id}`} className="cart-btn">
            Details
          </Link>
        </p>
      </td>
    </tr>
  );
};

export default OrderRow;
