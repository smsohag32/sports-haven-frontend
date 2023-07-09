import { useQuery } from "@tanstack/react-query";
import SectionHeading from "../../../components/shered/SectionHeading";
import { useParams } from "react-router-dom";
import useSecureAuth from "../../../hooks/useSecureAuth";
import Spinner from "../../../components/Spinner/Spinner";
import { useAuth } from "../../../hooks/useAuth";

const Customer = () => {
  const { id } = useParams();
  const { loading } = useAuth();
  const { secureAuth } = useSecureAuth();
  // load customer data
  const { data: customer = [], isLoading } = useQuery({
    queryKey: ["customer"],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureAuth.get(`/customer/${id}`);
      return res.data;
    },
  });

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <>
      <SectionHeading heading="Customer Details"></SectionHeading>
      <div className="grid grid-cols-1 items-center md:grid-cols-2 min-h-[60vh]">
        <div className="w-full">
          <img
            src={customer?.image}
            className="w-44 h-60 max-w-md mx-auto"
            alt="customer"
          />
        </div>
        <div className="border flex flex-col gap-1  p-6 w-full">
          <p className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            Customer Name: <span>{customer?.name}</span>
          </p>
          <p className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
            Customer email: <span>{customer?.email}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Customer;
