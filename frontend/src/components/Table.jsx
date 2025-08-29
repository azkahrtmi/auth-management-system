import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";

function Table({ data }) {
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
      <div className="p-8">
        <table className="w-full text-left border-collapse rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#EEE7F6] text-gray-700">
              <th className="p-4 border-b">Username</th>
              <th className="p-4 border-b">Email</th>
              <th className="p-4 border-b">Role</th>
              <th className="p-4 border-b">Status</th>
              <th className="p-4 border-b">Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-4 border-b font-bold">{user.username}</td>
                <td className="p-4 border-b font-light">{user.email}</td>
                <td className="p-4 border-b">
                  <span className="px-2 py-1 rounded-full bg-blue-100 text-blue-600 text-sm">
                    {user.role}
                  </span>
                </td>
                <td className="p-4 border-b">
                  <span
                    className={`px-2 py-1 rounded-full text-sm ${
                      user.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {user.status}
                  </span>
                </td>
                <td className="p-4 border-b flex gap-2">
                  <button className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg">
                    <MdEdit />
                  </button>
                  <button className="p-2 bg-red-100 hover:bg-red-200 rounded-lg">
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
