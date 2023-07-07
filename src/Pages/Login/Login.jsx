import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import EyeIconButton from "../../components/Button/EyeIconButton";
import loginImage from "../../assets/animation/login2.json";
import { styled } from "styled-components";
import SocialLogin from "../../components/shered/SocialLogin";
import { useAuth } from "../../hooks/useAuth";
import IconSpin from "../../components/Spinner/IconSpin";

// login container
const LoginContainer = styled.div`
  min-height: 100vh;
`;

const Login = () => {
  const { userLogin, loading, setLoading } = useAuth();

  const [loginErr, setLoginErr] = useState("");
  const [isShow, setIsShow] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // handle to login user
  const handleLogin = (userInfo) => {
    console.log(userInfo);
    const email = userInfo.email;
    const password = userInfo.password;
    userLogin(email, password)
      .then((result) => {
        navigate(from, { replace: true });
        reset();
      })
      .catch((err) => {
        setLoading(false);
        if (err.message.includes("not-found")) {
          setLoginErr("Account not found! Please Sing up");
        } else if (err.message.includes("wrong")) {
          setLoginErr("password is wrong");
        }
      });
  };

  return (
    <LoginContainer className="flex items-center">
      <div className="haven-container py-9 flex flex-col md:flex-row">
        <div className="w-full max-w-sm p-6 bg-white rounded shadow-md">
          <h1 className="text-2xl font-semibold mb-4">Welcome to SportHaven</h1>
          <p className="text-gray-600 mb-8">Log in to access your account</p>
          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="mb-2">
              <label className="block text-gray-700 font-semibold mb-2">
                Email Address
              </label>
              <input
                {...register("email", {
                  required: "This Field is required *",
                })}
                type="email"
                name="email"
                placeholder="Enter email address"
                className="w-full border border-gray-300 focus:outline-none focus:border-[#FF6633] px-4 py-2 "
              />
              {errors?.email && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.email?.message}</small>
                </span>
              )}
            </div>
            <div className="mb-4 relative">
              <label className="block text-gray-700 font-semibold mb-2">
                Password
              </label>
              <input
                {...register("password", {
                  required: "This Field is required *",
                })}
                type={`${isShow ? "text" : "password"}`}
                name="password"
                placeholder="Enter your password"
                className="w-full  border border-gray-300 focus:outline-none focus:border-[#FF6633] px-4 py-2 "
              />
              <EyeIconButton
                isShow={isShow}
                isError={errors?.password}
                setIsShow={setIsShow}
              />
              {errors?.password && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.password?.message}</small>
                </span>
              )}
            </div>
            <button
              disabled={loading}
              type="submit"
              className="haven-btn w-full mx-auto"
            >
              {loading ? <IconSpin /> : "Login"}
            </button>
          </form>
          {loginErr && (
            <div className="text-center text-red-600 mt-4">
              <p>
                <small>{loginErr}</small>
              </p>
            </div>
          )}
          <p className="mt-8 text-sm text-black w-full text-center">
            Don't have an account? Please
            <Link to="/register" className="ms-2 primary-text font-semibold">
              Register Now
            </Link>
          </p>
          <SocialLogin />
        </div>
        <div className="w-full">
          <div>
            <Lottie animationData={loginImage} />
          </div>
        </div>
      </div>
    </LoginContainer>
  );
};

export default Login;
