import DashboardLayout from "../layout/DashboardLayout";
import ContainerTable from "../components/ContainerTable";

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

function DashboardAdmin() {
  return (
    <DashboardLayout role="Admin">
      <ContainerTable
        text="Manage all users information."
        data={userData}
        role="Admin"
      />
    </DashboardLayout>
  );
}

export default DashboardAdmin;
