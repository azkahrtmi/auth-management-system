import DashboardLayout from "../layout/DashboardLayout";

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
      <Table data={userData} />
    </DashboardLayout>
  );
}

export default DashboardAdmin;
