import { useQuery } from "@tanstack/react-query";
import { useAuth } from "./useAuth";
import useSecureAuth from "./useSecureAuth";

const useAdmin = () => {
  const { user, loading } = useAuth();
  const { secureAuth } = useSecureAuth();

  const { data: isAdmin, isLoading: adminLoading } = useQuery({
    queryKey: ["isAdmin", user?.email],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureAuth.get(`/admin/${user?.email}`);
      return res.data.role;
    },
  });
  return { isAdmin, adminLoading };
};

export default useAdmin;
