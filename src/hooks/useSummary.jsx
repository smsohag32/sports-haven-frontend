import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useSecureAuth from "./useSecureAuth";

const useSummary = () => {
  const { loading } = useAuth();
  const { secureAuth } = useSecureAuth();

  const {
    data: summaryData = [],
    isLoading: sLoading,
    refetch,
  } = useQuery({
    queryKey: ["summaryData"],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureAuth.get("/summary");
      return res.data;
    },
  });
  return { summaryData, sLoading, refetch };
};

export default useSummary;
