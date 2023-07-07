import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import axios from "axios";

const useProducts = () => {
  const { loading } = useAuth();

  const {
    data: products = [],
    isLoading: pLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get("http://localhost:5000/products");
      return res.data;
    },
  });

  return { products, pLoading, refetch };
};

export default useProducts;
