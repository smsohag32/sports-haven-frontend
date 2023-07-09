import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useSecureAuth from "./useSecureAuth";

const useAllOrders = () => {
  const { loading } = useAuth();
  const { secureAuth } = useSecureAuth();
  const {
    data: allOrders = [],
    isLoading: oLoading,
    refetch,
  } = useQuery({
    queryKey: ["allOrders"],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureAuth.get(`/orders`);
      return res.data;
    },
  });
  return { allOrders, oLoading, refetch };
};

export default useAllOrders;
