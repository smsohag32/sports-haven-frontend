import { RiDeleteBin6Line } from "react-icons/ri";
const ShoppingCart = ({ cart, handleRemove }) => {
  return (
    <div className="flex max-w-md justify-between border items-center py-2 px-3">
      <img src={cart?.image} width={50} height={50} alt="" />
      <p>{cart?.name}</p>
      <p>{cart?.price}</p>
      <p className="text-sm text-gray-500">1/1</p>
      <span
        onClick={() => handleRemove(cart?._id)}
        className="cursor-pointer text-red-500"
      >
        <RiDeleteBin6Line />
      </span>
    </div>
  );
};

export default ShoppingCart;
