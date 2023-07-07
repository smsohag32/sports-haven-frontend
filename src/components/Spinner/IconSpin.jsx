import { FaSpinner } from "react-icons/fa";

const IconSpin = () => {
  return (
    <span className="flex items-center justify-center w-full h-auto">
      <FaSpinner size={30} className="animate-spin" />
    </span>
  );
};

export default IconSpin;
