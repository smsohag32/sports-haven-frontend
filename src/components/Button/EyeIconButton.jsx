import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
const EyeIconButton = ({ isShow, setIsShow, isError }) => {
  return (
    <span
      onClick={() => setIsShow(!isShow)}
      className={`peer-focus:font-medium absolute right-5 text-sm text-gray-500  duration-300 transition-all cursor-pointer Z-10 top-1/3 peer-focus:text-[#FF6633] ${
        isError ? "mt-3" : "mt-5"
      }`}
    >
      {isShow ? (
        <AiFillEye className="w-5 h-5" />
      ) : (
        <AiFillEyeInvisible className="w-5 h-5" />
      )}
    </span>
  );
};

export default EyeIconButton;
