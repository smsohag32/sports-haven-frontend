import { FcGoogle } from "react-icons/fc";
import { useAuth } from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
const SocialLogin = () => {
  const { loading, setLoading, googleLogin } = useAuth();

  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        navigate(from, { replace: true });
      })
      .catch((err) => setLoading(false));
  };
  return (
    <div className=" w-full mt-3 text-center justify-center flex items-center ">
      <button
        onClick={handleGoogleLogin}
        className="rounded-full w-2/3 border py-1 px-2 flex items-center gap-2 duration-300 transition-all justify-center hover:border-[#FF6633]"
      >
        <span className="">Continue with</span>
        <FcGoogle className="" />
      </button>
    </div>
  );
};

export default SocialLogin;
