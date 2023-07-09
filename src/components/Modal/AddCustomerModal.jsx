import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth";
import { imageUpload } from "../../utils/imageUpload";
import saveUser from "../../utils/saveuser";
import { toast } from "react-toastify";
import Spinner from "../Spinner/Spinner";

const AddCustomerModal = ({ closeModal, isOpen, refetch, users, uLoading }) => {
  const [createErr, setCreateErr] = useState("");
  const [loading, setLoading] = useState(false);
  // react hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  //   handle add customer
  const handleAddCustomer = (customerInfo) => {
    setLoading(true);
    setCreateErr("");
    const name = customerInfo.name;
    const email = customerInfo.email;
    const image = customerInfo?.image[0];

    const isExist = users.find((user) => user?.email === email);
    if (isExist) {
      setLoading(false);
      return setCreateErr("Customer already exist!");
    }
    // upload image in imgbb
    imageUpload(image)
      .then((imageInfo) => {
        const photo_url = imageInfo?.data?.display_url;
        const customer = {
          displayName: name,
          email: email,
          photoURL: photo_url,
        };
        saveUser(customer);
        closeModal();
        toast.success("New Customer Create Successful");
        setLoading(false);
        refetch();
        reset();
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  if (uLoading) {
    return <Spinner />;
  }
  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={closeModal}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add New Customer
                </Dialog.Title>
                <div className="mt-2">
                  <form onSubmit={handleSubmit(handleAddCustomer)}>
                    <div className="mb-2 w-full">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Customer Name
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
                    <div className="mb-2 w-full">
                      <label
                        htmlFor="image"
                        className="block text-gray-700 font-semibold mb-2"
                      >
                        Select Customer photo
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
                    <div className="mb-2 w-full">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Customer Email
                      </label>
                      <input
                        {...register("email", {
                          required: "This Field is required *",
                        })}
                        type="email"
                        name="email"
                        placeholder="Enter customer email"
                        className="w-full border border-gray-300 focus:outline-none focus:border-[#FF6633] px-4 py-2 "
                      />
                      {errors?.email && (
                        <span className="text-red-600 block text-sm">
                          <small>{errors.email?.message}</small>
                        </span>
                      )}
                    </div>
                    <div className="mb-4 w-full relative">
                      <label className="block text-gray-700 font-semibold mb-2">
                        Set customer password
                      </label>
                      <input
                        {...register("password", {
                          required: "This Field is required *",
                          minLength: {
                            value: 6,
                            message: "Password must be at least 6 characters",
                          },
                        })}
                        type="password"
                        name="password"
                        placeholder="Enter a  password"
                        className="w-full  border border-gray-300 focus:outline-none focus:border-[#FF6633] px-4 py-2 "
                      />

                      {errors?.password && (
                        <span className="text-red-600 block text-sm">
                          <small>{errors.password?.message}</small>
                        </span>
                      )}
                    </div>
                    <div className="flex mt-2 justify-center gap-5">
                      <hr className="mt-8 " />
                      <button
                        type="submit"
                        disabled={loading}
                        className="inline-flex justify-center haven-btn"
                      >
                        {loading ? "Loading" : "Confirm to Create"}
                      </button>
                      <button
                        type="button"
                        className="inline-flex justify-center haven-btn"
                        onClick={closeModal}
                      >
                        Close
                      </button>
                    </div>
                  </form>
                  {createErr && (
                    <div className="text-center text-red-600 mt-4">
                      <p>
                        <small>{createErr}</small>
                      </p>
                    </div>
                  )}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddCustomerModal;
