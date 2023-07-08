import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useSecureAuth from "./useSecureAuth";


const useUsers = () => {
  const { loading } = useAuth();
  const {secureAuth} = useSecureAuth();

  const {
    data: users = [],
    isLoading: uLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureAuth.get("/users");
      return res.data;
    },
  });
  return { users, uLoading, refetch };
};

export default useUsers;
