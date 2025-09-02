import { useState } from "react";
import ContentUser from "./ContentUser";
import Table from "./TableAdmin";
import TotalUsers from "./TotalUsers";
import { IoPerson } from "react-icons/io5";
import ModalCreateUser from "./ModalCreateUser";
import toast from "react-hot-toast";

function ContainerTable({ data, role, onDelete, onEdit }) {
  const [openModal, setOpenModal] = useState(false);
  const [modalType, setModalType] = useState(null); // "admin" atau "user"

  const handleCreate = async (formData) => {
    try {
      const token = localStorage.getItem("token");
      const endpoint =
        modalType === "admin"
          ? "http://localhost:5000/admin/create-admin"
          : "http://localhost:5000/admin/users";

      const res = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.message || "Failed to create user");

      toast.success(
        `${modalType === "admin" ? "Admin" : "User"} baru berhasil dibuat!`
      );
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-white shadow-md rounded-lg overflow-hidden">
      <div className="p-4 flex justify-between items-center">
        <div className="pl-5">
          <h2 className="text-xl font-bold pb-2">
            <IoPerson className="inline-block mr-2 text-3xl" />
            Profile Information
          </h2>
          {role === "Admin" ? (
            <p className="text-sm text-gray-500">
              Manage All Users Information.
            </p>
          ) : (
            <p className="text-sm text-gray-500">
              Your Registered Profile Information.
            </p>
          )}
        </div>
        <TotalUsers data={data} role={role} />
      </div>

      {role === "Admin" && (
        <div className="pl-10 flex gap-5">
          <button
            className="bg-amber-300 p-2 rounded-xl cursor-pointer"
            onClick={() => {
              setModalType("admin");
              setOpenModal(true);
            }}
          >
            Create new Admin
          </button>
          <button
            className="bg-amber-500 p-2 rounded-xl cursor-pointer"
            onClick={() => {
              setModalType("user");
              setOpenModal(true);
            }}
          >
            Create new User
          </button>
        </div>
      )}

      <div className="p-8 rounded-lg shadow">
        {role === "Admin" ? (
          <Table data={data} onDelete={onDelete} onEdit={onEdit} />
        ) : (
          <ContentUser />
        )}
      </div>

      <ModalCreateUser
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleCreate}
        type={modalType}
      />
    </div>
  );
}

export default ContainerTable;
