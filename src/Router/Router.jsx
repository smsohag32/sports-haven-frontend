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
import Orders from "../Pages/Dashboard/AdminDasboard/Orders";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Customer from "../Pages/Dashboard/AdminDasboard/Customer";
import AdminProductDetails from "../Pages/Dashboard/AdminDasboard/AdminProductDetails";
import OrderDetails from "../Pages/Dashboard/AdminDasboard/OrderDetails";

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
        path: "products/:id",
        element: <ProductDetails />,
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
        path: "/dashboard/customer/:id",
        element: (
          <PrivateAdmin>
            <Customer />
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
        path: "/dashboard/products/:id",
        element: (
          <PrivateAdmin>
            <AdminProductDetails />
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
      {
        path: "/dashboard/orders",
        element: (
          <PrivateAdmin>
            <Orders />
          </PrivateAdmin>
        ),
      },
      {
        path: "/dashboard/orders/:id",
        element: (
          <PrivateAdmin>
            <OrderDetails />
          </PrivateAdmin>
        ),
      },
    ],
  },
]);

export default router;
