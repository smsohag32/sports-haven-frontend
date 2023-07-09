import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import SectionHeading from "../../../components/shered/SectionHeading";
import { RiDeleteBin6Line } from "react-icons/ri";
import { useAuth } from "../../../hooks/useAuth";
import useSecureAuth from "../../../hooks/useSecureAuth";
import Spinner from "../../../components/Spinner/Spinner";

const AdminProductDetails = () => {
  const { id } = useParams();
  const { loading } = useAuth();
  const { secureAuth } = useSecureAuth();
  const navigate = useNavigate();
  //   load single product
  const { data: product = [], isLoading } = useQuery({
    queryKey: ["product"],
    enabled: !loading,
    queryFn: async () => {
      const res = await secureAuth.get(`/products/${id}`);
      return res.data;
    },
  });

  //   handle to delete product
  const deleteProduct = () => {
    secureAuth.delete(`/products/${id}`).then((data) => {
      if (data?.data?.deletedCount > 0) {
        toast.success("Product deleted success!");
        navigate("/dashboard/manage-products");
      }
    });
  };

  if (isLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <SectionHeading heading="Products Details" />
      <div className="grid grid-cols-1 my-10 md:grid-cols-3">
        <div className="w-full max-w-sm mx-auto ">
          <img
            src={product?.image}
            className="h-80 object-cover w-full overflow-hidden"
            alt=""
          />
        </div>
        <div className="w-full md:col-span-2 flex-wrap flex flex-col gap-1 max-w-md mx-auto p-5 border">
          <h4 className="mt-2 font-bold text-xl">{product?.name}</h4>
          <p className="px-5 py-5 border-b border-gray-200 text-sm">
            {product?.description}
          </p>
          <div className="px-5 py-5 border-b border-gray-200 text-sm">
            <span>{product?.rating}</span>
          </div>
          <p className="px-5 py-5 border-b border-gray-200  text-sm primary-text">
            ${product?.price}
          </p>
          <div className="px-5 py-5 border-b border-gray-200  text-sm primary-text">
            <span
              onClick={deleteProduct}
              className="cursor-pointer text-red-500"
            >
              <RiDeleteBin6Line />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminProductDetails;
