// DashboardAdmin.jsx
import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import ContainerTable from "../components/ContainerTable";
import Spinner from "../components/Spinner";
import toast from "react-hot-toast";

function DashboardAdmin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(`${import.meta.env.VITE_API_URL}/admin/users`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch users");

        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error(err.message);
      } finally {
        setTimeout(() => setLoading(false), 1500); // waktu spinner
      }
    };

    fetchUsers();
  }, []);

  // DELETE handler
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/users/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Failed to delete user");
      }

      setUsers((prev) => prev.filter((u) => u.id !== id));
    } catch (err) {
      console.error("Delete error:", err);
      alert(err.message || "Gagal menghapus user");
    }
  };

  // Edit Handler
  const handleEdit = async (id, updatedUser) => {
    try {
      const token = localStorage.getItem("token");
      const res = await fetch(
        `${import.meta.env.VITE_API_URL}/admin/users/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(updatedUser),
        }
      );

      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.message || "Failed to edit user");
      }
      // const data = await res.json();
      // update state dengan data user yang baru
      setUsers((prev) =>
        prev.map((u) => (u.id === id ? { ...u, ...updatedUser } : u))
      );
      // setUsers((prev) => prev.filter((u) => u.id !== id));
      toast.success("Update data berhasil");
    } catch (err) {
      console.error("Edit error:", err);
      toast.error(err.message || "Gagal mengedit user");
    }
  };

  return (
    <DashboardLayout role="Admin">
      {loading ? (
        <Spinner />
      ) : (
        <ContainerTable
          text="Manage all users information."
          data={users}
          role="Admin"
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      )}
    </DashboardLayout>
  );
}

export default DashboardAdmin;
