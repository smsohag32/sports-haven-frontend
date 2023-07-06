import { FcGoogle } from "react-icons/fc";
const SocialLogin = () => {
  const handleGoogleLogin = () => {
    console.log("");
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
