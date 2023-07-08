import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import PrivateRoute from "./PrivateRoute";
import AllProducts from "../Pages/AllProducts/AllProducts";
import ShoppingCarts from "../Pages/ShoppingCarts/ShoppingCarts";
import Checkout from "../Pages/Checkout/Checkout";
import OrderSummary from "../Pages/Dashboard/CustomerDashboard/OrderSummary";
import Summary from "../Pages/Dashboard/AdminDasboard/Summary";
import ManageCustomer from "../Pages/Dashboard/AdminDasboard/ManageCustomer";
import ManageProducts from "../Pages/Dashboard/AdminDasboard/ManageProducts";
import AddProducts from "../Pages/Dashboard/AdminDasboard/AddProducts";
import PrivateAdmin from "./PrivateAdmin";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <MainLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "allproducts",
        element: <AllProducts />,
      },
      {
        path: "carts",
        element: <ShoppingCarts />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard/order-summary",
        element: <OrderSummary />,
      },
      {
        path: "/dashboard/summary",
        element: (
          <PrivateAdmin>
            <Summary />
          </PrivateAdmin>
        ),
      },
      {
        path: "/dashboard/manage-customer",
        element: (
          <PrivateAdmin>
            <ManageCustomer />
          </PrivateAdmin>
        ),
      },
      {
        path: "/dashboard/manage-products",
        element: (
          <PrivateAdmin>
            <ManageProducts />
          </PrivateAdmin>
        ),
      },
      {
        path: "/dashboard/add-products",
        element: (
          <PrivateAdmin>
            <AddProducts />
          </PrivateAdmin>
        ),
      },
    ],
  },
]);

export default router;
