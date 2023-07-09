import UserRow from "../../../components/TableRow/UserRow";
import SectionHeading from "../../../components/shered/SectionHeading";
import useUsers from "../../../hooks/useUsers";
import Spinner from "../../../components/Spinner/Spinner";
import AddCustomerModal from "../../../components/Modal/AddCustomerModal";
import { useState } from "react";

const ManageCustomer = () => {
  // customer data load
  const { users, uLoading, refetch } = useUsers();
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => {
    setIsOpen(false);
  };

  if (uLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <SectionHeading
        heading="Customer List"
        subHeading="Manage All Customer"
      ></SectionHeading>

      <div>
        <div className="text-right px-10 pt-4">
          <button onClick={() => setIsOpen(true)} className="haven-btn ">
            Add Customer
          </button>
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
                        Customer
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      >
                        Email
                      </th>
                      <th
                        scope="col"
                        className="px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal"
                      ></th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((user, index) => (
                      <UserRow
                        key={user?._id}
                        index={index}
                        user={user}
                      ></UserRow>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AddCustomerModal
        isOpen={isOpen}
        closeModal={closeModal}
        refetch={refetch}
        users={users}
        uLoading={uLoading}
      />
    </div>
  );
};

export default ManageCustomer;
