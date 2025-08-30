import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

function DashboardLayout({ children, role }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar role={role} />
      <div className="flex-1 bg-[#EEE7F6] p-4 flex flex-col justify-center items-center">
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
