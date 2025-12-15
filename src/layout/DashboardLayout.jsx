import React from "react";
import Aside from "../Componets/Share/Aside";
import Anavvar from "../Componets/Share/Anavvar";
import { Outlet } from "react-router";

const DashboardLayout = ({ role, username }) => {
  return (
    <div className="flex min-h-screen">
      <Aside role={role} />
      <div className="flex-1 flex flex-col">
        <Anavvar role={role} username={username} />
        <main className="p-6 flex-1 bg-gray-100">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
