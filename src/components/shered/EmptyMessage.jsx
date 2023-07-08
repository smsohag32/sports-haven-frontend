import { Link } from "react-router-dom";

const EmptyMessage = ({ message, address, label }) => {
  return (
    <div className="h-[50vh] gap-5 flex flex-col justify-center items-center pb-16 ">
      <p className="text-gray-600 text-xl lg:text-3xl">{message}</p>
      <Link to={address}>{label}</Link>
    </div>
  );
};

export default EmptyMessage;
