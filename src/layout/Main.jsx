import Footer from "@/components/shared/Footer";
import Nav from "@/components/shared/Nav";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
};

export default Main;
