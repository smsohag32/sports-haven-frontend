import useCarts from "../../hooks/useCarts";

const ShoppingCarts = () => {
  const { cartsData } = useCarts();
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
          <h4 className="text-xl font-semibold">Total Selected Products</h4>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6"></div>
      </div>
    </div>
  );
};

export default ShoppingCarts;
