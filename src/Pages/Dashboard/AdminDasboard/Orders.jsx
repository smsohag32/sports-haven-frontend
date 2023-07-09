import OrderRow from "../../../components/Order/OrderRow";
import Spinner from "../../../components/Spinner/Spinner";
import EmptyMessage from "../../../components/shered/EmptyMessage";
import SectionHeading from "../../../components/shered/SectionHeading";
import useAllOrders from "../../../hooks/useAllOrders";

const Orders = () => {
  // load all order data
  const { allOrders, oLoading } = useAllOrders();

  if (oLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <SectionHeading heading="Order Summary" />
      <div>
        {allOrders.length > 0 ? (
          <div className="container mx-auto px-4 sm:px-8">
            <div className="py-8">
              <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
                <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
                  <table className="min-w-full leading-normal">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          #Order Id
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Cost
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Customer
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        >
                          Status
                        </th>
                        <th
                          scope="col"
                          className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                        ></th>
                      </tr>
                    </thead>
                    <tbody>
                      {allOrders.map((order) => (
                        <OrderRow
                          key={order?._id}
                          isAdmin={true}
                          order={order}
                        ></OrderRow>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <EmptyMessage
            message="No order found."
            address="/allproducts"
            label="Order now"
          />
        )}
      </div>
    </div>
  );
};

export default Orders;
