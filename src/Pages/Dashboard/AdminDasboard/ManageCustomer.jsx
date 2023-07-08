import SectionHeading from "../../../components/shered/SectionHeading";
import useUsers from "../../../hooks/useUsers";

const ManageCustomer = () => {
  // customer data load
  const { users, uLoading } = useUsers();

  console.log(users);
  return (
    <div>
      <SectionHeading
        heading="Customer List"
        subHeading="Manage All Customer"
      ></SectionHeading>
    </div>
  );
};

export default ManageCustomer;
