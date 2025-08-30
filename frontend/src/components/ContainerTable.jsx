import ContentUser from "./ContentUser";
import Table from "./TableAdmin";
import TotalUsers from "./TotalUsers";

function ContainerTable({ data, role }) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Profile Information</h2>
          {role === "Admin" ? (
            <p className="text-sm text-gray-500">
              Manage All Users Information.{" "}
            </p>
          ) : (
            <p className="text-sm text-gray-500">
              Your Registered Profile Information.{" "}
            </p>
          )}
        </div>
        <TotalUsers data={data} role={role} />
      </div>
      <div className="p-8 rounded-lg shadow">
        {role === "Admin" ? <Table data={data} /> : <ContentUser />}
      </div>
    </div>
  );
}

export default ContainerTable;
