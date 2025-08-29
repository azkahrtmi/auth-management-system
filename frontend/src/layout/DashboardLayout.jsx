import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Table from "../components/Table";

const userData = [
  {
    username: "RezaPahlevi",
    email: "rezapahlevi@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    username: "AzkaHartami",
    email: "azkahartami@gmail.com",
    role: "Admin",
    status: "Active",
  },
  {
    username: "AfdhalHartami",
    email: "afdhalhartami@gmail.com",
    role: "User",
    status: "Active",
  },
  {
    username: "RajaHartami",
    email: "rajahartami@gmail.com",
    role: "Admin",
    status: "Inactive",
  },
];

function DashboardLayout({ children, role }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar role={role} />
      <div className="flex-1 bg-[#EEE7F6] p-4 flex flex-col justify-center items-center">
        <Table data={userData} />
        {children}
      </div>
      <Footer />
    </div>
  );
}

export default DashboardLayout;
