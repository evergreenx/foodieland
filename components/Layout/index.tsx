import React from "react";
import Footer from "../footer";
import Navbar from "../navbar";

type LayoutProps = {
  children: React.ReactNode;
};

function index({ children }: LayoutProps) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}

export default index;
