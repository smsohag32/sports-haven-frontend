import { RiDeleteBin6Line } from "react-icons/ri";
const ShoppingCart = ({ cart, handleRemove }) => {
  return (
    <div className="flex max-w-md justify-between border items-center py-2 px-3">
      <img src={cart?.image} width={50} height={50} alt="" />
      <p>{cart?.name}</p>
      <p>{cart?.price}</p>
      <div className="flex gap-1">
        <span>-</span>
        <input type="number" className="w-10 text-center" defaultValue={1} />
        <span>+</span>
      </div>
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
