import DashboardLayout from "../layout/DashboardLayout";
import ContainerTable from "../components/ContainerTable";

function DashboardUser() {
  return (
    <DashboardLayout role="User">
      <ContainerTable role="User" />
    </DashboardLayout>
  );
}

export default DashboardUser;
