import { useNavigate } from "react-router-dom";
import ProductCard from "../../components/Cards/ProductCard";
import Spinner from "../../components/Spinner/Spinner";
import useProducts from "../../hooks/useProducts";
import addCart from "../../utils/addCart";
import useCarts from "../../hooks/useCarts";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";

const AllProducts = () => {
  const { user } = useAuth();
  const [addingLoading, setAddingLoading] = useState(false);
  // all products load in custom hook
  const { products, pLoading } = useProducts();
  const { refetch } = useCarts();
  const navigate = useNavigate();

  //   handle details page
  const handleDetail = (id) => {
    navigate(`/products/${id}`);
  };

  //   handle add to cart items
  const addToCart = (product) => {
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
      } else {
        setAddingLoading(false);
      }
    });
  };
  if (pLoading) {
    return <Spinner />;
  }
  return (
    <div className="">
      <div className="flex items-center haven-container flex-col border text-center justify-center min-h-[250px] border-b-[#FF6633]">
        <h1 className="font-semibold mb-4 text-2xl md:text-3xl">
          All Products
        </h1>
        <p>Browse our wide selection of sports products and gear.</p>
      </div>
      <div className="haven-container mt-5 mb-9">
        <div className="py-5">
          <h4 className="text-xl font-semibold">
            Total Collections {products?.length ? products?.length : 0}
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products?.length > 0 &&
            products.map((product) => (
              <ProductCard
                key={product?._id}
                product={product}
                handleDetail={handleDetail}
                addToCart={addToCart}
                addingLoading={addingLoading}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AllProducts;
