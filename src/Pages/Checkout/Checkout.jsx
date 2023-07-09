import { useNavigate } from "react-router-dom";
import useCarts from "../../hooks/useCarts";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import useSecureAuth from "../../hooks/useSecureAuth";
import Swal from "sweetalert2";

const Checkout = () => {
  const { cartsData } = useCarts();
  const { user, loading } = useAuth();
  const { secureAuth } = useSecureAuth();
  const navigate = useNavigate();
  const [address, setAddress] = useState("");
  const [addressErr, setAddressErr] = useState("");

  //   calculate price and other cost
  const total = cartsData.reduce((sum, item) => sum + item.price, 0);
  const subTotal = parseFloat(total.toFixed(2));

  const shipping = 25;
  const tax = subTotal * 0.1;
  const totalTax = parseFloat(tax.toFixed(2));
  const allTotal = subTotal + totalTax + shipping;
  const grandTotal = allTotal.toFixed(2).toString();

  //   date formate

  const currentDate = new Date();
  const options = { year: "numeric", month: "numeric", day: "numeric" };
  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  // handle order confirm
  const handleOrder = () => {
    setAddressErr("");
    const email = user?.email;
    const name = user?.displayName;
    if (!address) {
      return setAddressErr("Please provide your address!");
    }
    const newOrder = {
      order: cartsData,
      total_items: cartsData?.length,
      customer_name: name,
      total_cost: grandTotal,
      email,
      date: formattedDate,
    };
    // post orders to database
    secureAuth.post(`/orders/${user?.email}`, newOrder).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          title: "Successful Done",
          text: "Your order now processing",
          imageUrl: "https://i.ibb.co/BsgqCqC/success.png",
          imageWidth: 400,
          imageHeight: 200,
          imageAlt: "Custom image",
        });
      }
      navigate("/dashboard/order-summary");
    });
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <div>
      <div className="flex items-center haven-container flex-col border text-center justify-center min-h-[200px] border-b">
        <h1 className="font-semibold mb-4 text-2xl md:text-3xl">Checkout /</h1>
      </div>
      <div className="haven-container my-9 grid grid-cols-1 md:grid-cols-2">
        <div className="w-full flex flex-col flex-wrap py-10 px-5 gap-2 max-w-sm">
          <p className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
            Your name: {user?.displayName}
          </p>
          <p className="px-5 py-3 border-b border-gray-200 bg-white text-sm">
            Your email: {user?.email}
          </p>
          <div className="px-5 py-3 border-b  border-gray-200 bg-white text-sm">
            <label htmlFor="address">Your Address</label>
            <input
              onChange={(e) => setAddress(e.target.value)}
              type="text"
              id="address"
              name="address"
              placeholder="enter your address"
              className="px-2 mt-2 block outline-none text-gray-600 focus:border-red-300 py-2 border border-[#FF6633]"
              minLength={3}
              required
            />
            {addressErr && (
              <span className="text-xs block mt-1 text-red-500">
                {addressErr}
              </span>
            )}
          </div>
        </div>
        <div>
          <div className="w-full h-full flex flex-col gap-1 p-10 md:col-span-1 border-2">
            <h1 className="font-semibold text-xl md:text-2xl">Your Order</h1>
            <p className="primary-text font-bold text-lg">
              Subtotal: {subTotal}
            </p>
            <p className="text-gray-700 text-sm">Tax: 10%</p>
            <p className="text-gray-700 text-sm">Shipping: $25</p>
            <p className="primary-text font-bold text-lg">
              Total: {grandTotal}
            </p>

            <button
              onClick={handleOrder}
              className="haven-btn w-full mt-3 text-center "
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
