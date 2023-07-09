import Spinner from "../../../components/Spinner/Spinner";
import SectionHeading from "../../../components/shered/SectionHeading";
import useSummary from "../../../hooks/useSummary";
import { PieChart, Pie, Tooltip } from "recharts";
const Summary = () => {
  // load all summary
  const { summaryData, sLoading } = useSummary();
  const { totalProducts, totalOrders, totalCustomer, totalCarts } = summaryData;

  const chartData = [
    {
      name: "Total Products",
      value: totalProducts,
    },
    {
      name: "Total Orders",
      value: totalOrders,
    },
    {
      name: "Total Carts",
      value: totalCarts,
    },
    {
      name: "Total Customer",
      value: totalCustomer,
    },
  ];
  if (sLoading) {
    return <Spinner />;
  }
  return (
    <>
      <SectionHeading heading="Summary Overview"></SectionHeading>
      <div className="grid grid-cols-1 items-center md:grid-cols-2 min-h-[60vh]">
        <div className="w-full">
          {/* rechart */}
          <PieChart width={500} height={500}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#FF803F"
              label
            />
            <Tooltip />
          </PieChart>
        </div>
        <div className="border flex flex-col gap-1  p-6 w-full">
          <p className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            Total customer: <span>{totalCustomer}</span>
          </p>
          <p className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            Total products: <span>{totalProducts}</span>
          </p>
          <p className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            Total carts: <span>{totalCarts}</span>
          </p>
          <p className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            Total Orders: <span>{totalOrders}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Summary;
