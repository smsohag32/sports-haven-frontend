import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useSecureAuth from "./useSecureAuth";

const useCarts = () => {
  const { secureAuth } = useSecureAuth();
  const { loading, user } = useAuth();

  const {
    data: cartsData = [],
    isLoading: cLoading,
    refetch,
  } = useQuery({
    queryKey: ["carts"],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureAuth.get(`/carts/${user?.email}`);
      return res.data;
    },
  });

  return { cartsData, cLoading, refetch };
};

export default useCarts;
