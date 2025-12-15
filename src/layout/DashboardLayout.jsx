import React from 'react';
import Aside from '../Componets/Share/Aside';
import Anavvar from '../Componets/Share/Anavvar';
import { Outlet } from 'react-router';

const DashboardLayout = () => {
  return (
    <div>
      <Aside/>
      <Anavvar/>
      <Outlet/>
    </div>
  );
};

export default DashboardLayout;