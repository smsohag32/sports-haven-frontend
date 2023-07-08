import { Link } from "react-router-dom";

const ProductCard = ({ product, handleDetail, addToCart }) => {
  return (
    <div className="p-2 border-stone-300 border text-center">
      <div className="flex flex-col text-sm flex-wrap gap-1">
        <div onClick={() => handleDetail(product?._id)} className="mb-2">
          <figure className="h-[40%] relative overflow-hidden bg-cover bg-no-repeat w-full">
            <img
              src={product?.image}
              className="object-cover  h-44 w-full"
              alt=""
            />
          </figure>
          <h4 className="mt-2">{product?.name}</h4>
          <div>
            <span>{product?.rating}</span>
          </div>
          <p className="font-medium primary-text">${product?.price}</p>
        </div>
        <button
          onClick={() => addToCart(product)}
          className="uppercase cart-btn block text-center mt-auto"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
