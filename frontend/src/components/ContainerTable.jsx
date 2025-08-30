import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Table from "./Table";

function ContainerTable({ data }) {
  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 border-b flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold">Profile Information</h2>
          <p className="text-sm text-gray-500">Manage all users information.</p>
        </div>
        <div>
          <span className="text-sm text-gray-500">
            {data.length} Total Users
          </span>
        </div>
      </div>
      <div className="p-8 rounded-lg shadow">
        <Table data={data} />
      </div>
    </div>
  );
}

export default ContainerTable;
