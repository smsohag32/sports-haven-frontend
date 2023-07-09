import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useSecureAuth from "./useSecureAuth";

// all products load use to this hook
const useProducts = () => {
  const { loading } = useAuth();
  const { secureAuth } = useSecureAuth();
  const {
    data: products = [],
    isLoading: pLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureAuth.get("/products");
      return res.data;
    },
  });
  return { products, pLoading, refetch };
};

export default useProducts;
