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
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/order-summary",
        element: <OrderSummary />,
      },
      {
        path: "/dashboard/summary",
        element: <Summary />,
      },
      {
        path: "/dashboard/manage-customer",
        element: <ManageCustomer />,
      },
      {
        path: "/dashboard/manage-products",
        element: <ManageProducts />,
      },
      {
        path: "/dashboard/add-products",
        element: <AddProducts />,
      },
    ],
  },
]);

export default router;
