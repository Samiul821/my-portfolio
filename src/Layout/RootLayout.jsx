import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";

const RootLayout = () => {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      {/* Assuming navbar height is 64px (4rem), so padding-top: 16 (4*4) */}
      <main className="pt-16 min-h-screen">
        <Outlet />
      </main>
    </div>
  );
};

export default RootLayout;
