import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner/Spinner";
import ProductRow from "../../../components/TableRow/ProductRow";
import SectionHeading from "../../../components/shered/SectionHeading";
import useProducts from "../../../hooks/useProducts";
import useSecureAuth from "../../../hooks/useSecureAuth";
import { Link } from "react-router-dom";

const ManageProducts = () => {
  const { products, pLoading, refetch } = useProducts();
  const { secureAuth } = useSecureAuth();

  // handle  delete product
  const deleteProduct = (id) => {
    secureAuth.delete(`/products/${id}`).then((data) => {
      if (data?.data?.deletedCount > 0) {
        toast.success("Product deleted success!");
        refetch();
      }
    });
  };

  if (pLoading) {
    return <Spinner />;
  }
  return (
    <div>
      <SectionHeading
        heading="Products List"
        subHeading="Manage Products"
      ></SectionHeading>
      <div className="text-right px-10 pt-4">
        <Link to="/dashboard/add-products" className="haven-btn ">
          Add Product
        </Link>
      </div>
      <div className="px-4 sm:px-8">
        <div className="py-8">
          <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
            <div className="inline-block min-w-full shadow rounded-lg overflow-hidden">
              <table className="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      #
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Product
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Product Name
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    ></th>
                    <th
                      scope="col"
                      className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {products.map((product, index) => (
                    <ProductRow
                      key={product?._id}
                      product={product}
                      index={index}
                      deleteProduct={deleteProduct}
                    ></ProductRow>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProducts;
