import { Link } from "react-router-dom";
import useCarts from "../../hooks/useCarts";
import ShoppingCart from "../../components/Cards/ShoppingCart";
import Spinner from "../../components/Spinner/Spinner";
import useSecureAuth from "../../hooks/useSecureAuth";

const ShoppingCarts = () => {
  const { cartsData, cLoading, refetch } = useCarts();
  const { secureAuth } = useSecureAuth();
  // ShoppingCart items remove handle
  const handleRemove = (id) => {
    secureAuth.delete(`/carts/${id}`).then((data) => {
      if (data?.data?.deletedCount > 0) {
        refetch();
      }
    });
  };
  if (cLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="flex items-center haven-container flex-col border text-center justify-center min-h-[250px] border-b-[#FF6633]">
        <h1 className="font-semibold mb-4 text-2xl md:text-3xl">
          Shopping Cart
        </h1>
        <p>Review and manage items in your shopping cart before checkout.</p>
      </div>
      <div className="haven-container mt-5 mb-9">
        <div className="py-5">
          <h4 className="text-xl font-semibold">
            Total Selected Products {cartsData.length}
          </h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2 h-full w-full">
            {cartsData.length > 0 ? (
              <div className="flex gap-6 flex-col">
                {cartsData.map((cart) => (
                  <ShoppingCart
                    key={cart._id}
                    handleRemove={handleRemove}
                    cart={cart}
                  ></ShoppingCart>
                ))}
              </div>
            ) : (
              <span className="text-xl font-bold flex flex-wrap gap-2">
                Currently Shopping Cart is Empty
                <Link className="cart-btn text-xs uppercase" to="/allproducts">
                  Continue Shopping
                </Link>
              </span>
            )}
          </div>
          <div className="w-full h-full flex flex-col gap-1 p-6 md:col-span-1 border-2">
            <h1 className="font-semibold text-xl md:text-2xl">Order Summary</h1>
            <p className="primary-text font-bold text-lg">Subtotal: 300</p>
            <p className="text-gray-700 text-sm">
              Taxes and shipping calculated at checkout
            </p>
            <Link to="/checkout" className="haven-btn w-full mt-1 text-center ">
              Checkout Process
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCarts;
