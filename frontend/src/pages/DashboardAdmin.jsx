// DashboardAdmin.jsx
import { useEffect, useState } from "react";
import DashboardLayout from "../layout/DashboardLayout";
import ContainerTable from "../components/ContainerTable";
import Spinner from "../components/Spinner";

function DashboardAdmin() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch("http://localhost:5000/admin/users", {
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
      const res = await fetch(`http://localhost:5000/admin/users/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

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
        />
      )}
    </DashboardLayout>
  );
}

export default DashboardAdmin;
