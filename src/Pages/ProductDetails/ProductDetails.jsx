import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import useSecureAuth from "../../hooks/useSecureAuth";
import Spinner from "../../components/Spinner/Spinner";
import { useState } from "react";
import addCart from "../../utils/addCart";
import { toast } from "react-toastify";
import useCarts from "../../hooks/useCarts";

const ProductDetails = () => {
  const { id } = useParams();
  const { refetch } = useCarts();
  const { loading, user } = useAuth();
  const { secureAuth } = useSecureAuth();
  const [addingLoading, setAddingLoading] = useState(false);
  const { data: product = [], isLoading } = useQuery({
    queryKey: ["product"],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureAuth.get(`/products/${id}`);
      return res.data;
    },
  });

  //   add to shopping cart
  const addToCart = () => {
    setAddingLoading(true);
    const cartsInfo = {
      ...product,
      customer_name: user?.displayName,
      email: user?.email,
    };
    addCart(cartsInfo).then((data) => {
      if (data?.insertedId) {
        refetch();
        setAddingLoading(false);
        toast.success("Items added");
      } else {
        setAddingLoading(false);
      }
    });
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="flex items-center haven-container flex-col border text-center justify-center min-h-[250px] border-b-[#FF6633]">
        <h1 className="font-semibold mb-4 text-2xl md:text-3xl">
          Details View
        </h1>
        <p>Browse our wide selection of sports products and gear.</p>
      </div>
      <div className="haven-container grid grid-cols-1 my-10 md:grid-cols-3">
        <div className="w-full max-w-sm mx-auto ">
          <img
            src={product?.image}
            className="h-80 object-cover w-full overflow-hidden"
            alt=""
          />
        </div>
        <div className="w-full md:col-span-2 flex-wrap flex flex-col gap-1 max-w-md mx-auto p-5 border">
          <h4 className="mt-2 font-bold text-xl">{product?.name}</h4>
          <p className="px-5 py-5 border-b border-gray-200 text-sm">
            {product?.description}
          </p>
          <div className="px-5 py-5 border-b border-gray-200 text-sm">
            <span>{product?.rating}</span>
          </div>
          <p className="px-5 py-5 border-b border-gray-200  text-sm primary-text">
            ${product?.price}
          </p>
          <button
            disabled={addingLoading}
            onClick={addToCart}
            className="haven-btn uppercase mt-auto"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
