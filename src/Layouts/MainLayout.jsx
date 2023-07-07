import { Outlet } from "react-router-dom";
import Footer from "../components/shered/Footer";
import Header from "../components/shered/Header";

const MainLayout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-[calc(100vh-90px)]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
