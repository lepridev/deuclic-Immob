import Footer from "@/ui/design-system/footer/Footer";
import Navbar from "@/ui/design-system/navbar/Navbar";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    // <div className="flex flex-col justify-between h-screen">
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
