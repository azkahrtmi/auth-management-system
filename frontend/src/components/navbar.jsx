import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center bg-gray-800 text-white px-6 py-4 shadow-md">
      <div>
        <h1 className="text-xl font-bold">User Dashboard</h1>
        <p className="text-sm text-gray-300">Welcome, User</p>
      </div>

      <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition">
        Logout
      </button>
    </nav>
  );
}
export default Navbar;
