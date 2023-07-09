import { useParams } from "react-router-dom";
import SectionHeading from "../../../components/shered/SectionHeading";
import { useQuery } from "@tanstack/react-query";
import useSecureAuth from "../../../hooks/useSecureAuth";
import { useAuth } from "../../../hooks/useAuth";
import Spinner from "../../../components/Spinner/Spinner";
import OrderCard from "../../../components/Cards/OrderCard";

const OrderDetails = () => {
  const { id } = useParams();
  console.log(id);
  const { loading } = useAuth();
  const { secureAuth } = useSecureAuth();
  const { data: order = [], isLoading } = useQuery({
    queryKey: ["orders"],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureAuth.get(`/orders/details/${id}`);
      return res.data;
    },
  });

  console.log(order);
  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <SectionHeading heading="Order Details" subHeading={`#orderId ${id}`} />
      <div>
        <div>
          <p className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            Customer name: {order?.customer_name}
          </p>
          <p className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            Customer email: {order?.email}
          </p>
          <p className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            Total products Order: {order?.total_items}
          </p>
          <p className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            Total Price: {order?.total_cost}
          </p>
        </div>
        <hr className="mt-6" />

        {/* order items */}
        <div className="px-4 sm:px-8">
          <div className="py-8">
            <h1 className="font-semibold primary-text">Order Items</h1>
            <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
              <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                <table className="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Product
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Product Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        QTY
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {order?.order.map((product, index) => (
                      <OrderCard
                        key={product?._id}
                        product={product}
                        index={index}
                      ></OrderCard>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;
