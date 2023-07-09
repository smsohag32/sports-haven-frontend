import { useForm } from "react-hook-form";
import SectionHeading from "../../../components/shered/SectionHeading";
import { useState } from "react";

const AddProducts = () => {
  const [loading, setLoading] = useState(false);
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  // add product
  const handleAddProduct = (productInfo) => {
    console.log(productInfo);
  };

  return (
    <div>
      <SectionHeading heading="Add a New Products" />
      <div className="">
        {/* add product form */}
        <form
          className="max-w-xl mx-auto p-4"
          onSubmit={handleSubmit(handleAddProduct)}
        >
          <div className="mb-2 w-full">
            <label className="block text-gray-700 font-semibold mb-2">
              Product Name
            </label>
            <input
              {...register("name", {
                required: "This Field is required *",
              })}
              type="text"
              name="name"
              placeholder="Enter customer name"
              className="w-full border border-gray-300 focus:outline-none focus:border-[#FF6633] px-4 py-2 "
            />
            {errors?.name && (
              <span className="text-red-600 block text-sm">
                <small>{errors.name?.message}</small>
              </span>
            )}
          </div>
          <div className="flex gap-6 md:flex-row flex-col">
            <div className="mb-2 w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                Product Name
              </label>
              <input
                {...register("name", {
                  required: "This Field is required *",
                })}
                type="text"
                name="name"
                placeholder="Enter product name"
                className="w-full border border-gray-300 focus:outline-none focus:border-[#FF6633] px-4 py-2 "
              />
              {errors?.name && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.name?.message}</small>
                </span>
              )}
            </div>
            <div className="mb-2 w-full">
              <label
                htmlFor="image"
                className="block text-gray-700 font-semibold mb-2"
              >
                Select product photo
              </label>
              <input
                {...register("image", {
                  required: "This Field is required *",
                })}
                className="w-full"
                type="file"
                name="image"
                id="image"
                accept="image/*"
              />
              {errors?.image && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.image?.message}</small>
                </span>
              )}
            </div>
          </div>
          <div className="flex gap-6 flex-col md:flex-row">
            <div className="mb-2 w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                Rating
              </label>
              <input
                {...register("rating", {
                  required: "This field is required *",
                  max: { value: 5, message: "max rating score 5" },
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: "Invalid Ratting ",
                  },
                })}
                type="text"
                name="rating"
                placeholder="Enter rating value"
                className="w-full border border-gray-300 focus:outline-none focus:border-[#FF6633] px-4 py-2 "
              />
              {errors?.rating && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.rating?.message}</small>
                </span>
              )}
            </div>
            <div className="mb-2 w-full">
              <label className="block text-gray-700 font-semibold mb-2">
                Product price
              </label>
              <input
                {...register("price", {
                  required: "This Field is required *",
                })}
                type="number"
                name="price"
                placeholder="Enter product price"
                className="w-full border border-gray-300 focus:outline-none focus:border-[#FF6633] px-4 py-2 "
              />
              {errors?.price && (
                <span className="text-red-600 block text-sm">
                  <small>{errors.price?.message}</small>
                </span>
              )}
            </div>
          </div>
          <div className="">
            <hr className="mt-8 " />
            <button
              type="submit"
              disabled={loading}
              className="inline-flex haven-btn"
            >
              {loading ? "Loading" : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
