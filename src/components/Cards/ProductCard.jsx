import { toast } from "react-toastify";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const ProductCard = ({
  product,
  handleDetail,
  addToCart,
  addingLoading,
  isAdmin,
}) => {
  return (
    <div className="p-2 border-stone-300 border text-center">
      <div className="flex flex-col text-sm flex-wrap gap-1">
        <div onClick={() => handleDetail(product?._id)} className="mb-2">
          <figure className="h-[40%] cursor-pointer relative overflow-hidden bg-cover bg-no-repeat w-full">
            <img
              src={product?.image}
              className="object-cover  h-44 w-full"
              alt=""
            />
          </figure>
          <h4 className="mt-2">{product?.name}</h4>
          <div className="flex items-center justify-center gap-2">
            <Rating
              style={{ maxWidth: 100 }}
              value={product?.rating}
              readOnly
            />
            <span className="text-xs text-gray-600 mt-1">
              {product?.rating}/5
            </span>
          </div>
          <p className="font-medium primary-text mt-4">${product?.price}</p>
        </div>
        <button
          disabled={addingLoading}
          onClick={
            isAdmin
              ? () => toast.error("You Are admin. Only customer buy products")
              : () => addToCart(product)
          }
          className="uppercase cart-btn block text-center mt-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
