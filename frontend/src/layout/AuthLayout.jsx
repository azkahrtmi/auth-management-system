import React from "react";
import Footer from "../components/Footer";

function AuthLayout({ children }) {
  return (
    <div
      style={{
        background:
          "linear-gradient(to bottom, rgb(238, 231, 246, 0.9), rgb(173, 186, 218, 0.9))",
      }}
      className="flex flex-col min-h-screen"
    >
      <div className="flex-1 p-4 flex flex-col justify-center items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default AuthLayout;
