import React from "react";
import Navvar from "../Componets/Share/Navvar.jsx";
import Footer from "../Componets/Share/Footer.jsx";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navvar></Navvar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
