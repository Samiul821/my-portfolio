import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import { motion } from "framer-motion";
import OverlayLoader from "../Pages/Shared/OverlayLoader";

const RootLayout = () => {
  return (
    <>
      <OverlayLoader /> {/* ← loader will fade out after load */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="min-h-screen flex flex-col"
      >
        <header>
          <Navbar />
        </header>
        <main className="pt-16 flex-grow">
          <Outlet />
        </main>
        <footer>
          <Footer />
        </footer>
      </motion.div>
    </>
  );
};

export default RootLayout;
