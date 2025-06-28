import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import HeroBG from "../Pages/Shared/HeroBG";

const RootLayout = () => {
  return (
    <div>
      <header className="">
        <Navbar></Navbar>
      </header>
      <main className="pt-24 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
