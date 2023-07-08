import { Link, useNavigate } from "react-router-dom";
import useCarts from "../../hooks/useCarts";

const Checkout = () => {
  const { cartsData } = useCarts();
  const navigate = useNavigate();
  // handle order confirm
  const handleOrder = () => {};
  return (
    <div>
      <div className="flex items-center haven-container flex-col border text-center justify-center min-h-[250px] border-b-[#FF6633]">
        <h1 className="font-semibold mb-4 text-2xl md:text-3xl">Checkout /</h1>
      </div>
      <div className="haven-container my-9 grid grid-cols-1 md:grid-cols-2">
        <div></div>
        <div>
          <div className="w-full h-full flex flex-col gap-1 p-10 md:col-span-1 border-2">
            <h1 className="font-semibold text-xl md:text-2xl">Your Order</h1>
            <p className="primary-text font-bold text-lg">Subtotal: 300</p>
            <p className="text-gray-700 text-sm">Tax: 10%</p>
            <p className="text-gray-700 text-sm">Shipping: $25</p>
            <p className="primary-text font-bold text-lg">Total: 300</p>
            <button
              onClick={handleOrder}
              className="haven-btn w-full mt-1 text-center "
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
