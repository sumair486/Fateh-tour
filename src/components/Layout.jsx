import React from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import MasterHeader from "./MasterHeader";

export default function Layout({ children }) {
  
  const location = useLocation();
  const hideMasterHeaderPaths = ["/about", "/service", "/contact"];

  return (
    <div className="min-h-screen flex flex-col">
      
      {!hideMasterHeaderPaths.includes(location.pathname) && <MasterHeader />}
      <Header />
      <div className="flex flex-1">
        <main className="flex-1 p-4">{children}</main>
      </div>
      <Footer />
    </div>
  );
}
