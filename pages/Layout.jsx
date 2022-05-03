import React from "react";
import { NavBar, Footer } from "../library/Components";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      {children}
      <Footer />
    </>
  );
}
