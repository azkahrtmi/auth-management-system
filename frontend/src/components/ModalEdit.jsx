import React from "react";
import { useState, useEffect } from "react";

function ModalEdit({ open, onClose, user, onEdit }) {
  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  // Set nilai awal ketika modal dibuka
  useEffect(() => {
    if (user) {
      setUsername(user.username || "");
      setRole(user.role || "user");
      setStatus(user.status || "active");
    }
  }, [user]);

  const handleEdit = async () => {
    const updatedUser = { ...user, username, role, status };
    console.log("Updated User:", updatedUser); // Debugging
    if (onEdit) {
      onEdit(updatedUser.id, updatedUser);
    }
    onClose(); // Tutup modal setelah menyimpan
  };
  if (!open) return null;
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-xl font-bold mb-4">Edit Data</h2>
        <form className="pt-5">
          <div className="mb-4">
            <input
              type="text"
              className="w-full border px-3 py-2 rounded"
              placeholder="Edit username"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
          </div>
          <div className="mb-4">
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 cursor-pointer"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>
          <div className="mb-4">
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 cursor-pointer"
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
        </form>
        <div className="flex justify-end gap-2 pt-3">
          <button
            type="button"
            className="px-3 py-2 rounded bg-gray-200 cursor-pointer"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            type="submit"
            onClick={handleEdit}
            className="px-3 py-2 rounded bg-blue-500 text-white cursor-pointer"
          >
            Edit
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalEdit;
