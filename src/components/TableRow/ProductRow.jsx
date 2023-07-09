import { Link } from "react-router-dom";

const ProductRow = ({ product, index }) => {
  console.log(product);
  return (
    <tr>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{index + 1}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <img src={product?.image} alt="customer" width={80} height={80} />
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 primary-text whitespace-no-wrap">
          {product?.name}
        </p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{product?.price}</p>
      </td>
      <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
        <Link to={`/products/${product?._id}`} className="cart-btn">
          Details
        </Link>
      </td>
    </tr>
  );
};

export default ProductRow;
