import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useSecureAuth from "./useSecureAuth";

// use to only specific user order data load in email filter basis
const useOrders = () => {
  const { loading, user } = useAuth();
  const { secureAuth } = useSecureAuth();
  const {
    data: orders = [],
    isLoading: oLoading,
    refetch,
  } = useQuery({
    queryKey: ["orders", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureAuth.get(`/orders/${user?.email}`);
      return res.data;
    },
  });
  return { orders, oLoading, refetch };
};

export default useOrders;
