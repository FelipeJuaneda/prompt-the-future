import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Landing/Header";
import Footer from "../components/Landing/Footer";

function LandingLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
export default LandingLayout;
