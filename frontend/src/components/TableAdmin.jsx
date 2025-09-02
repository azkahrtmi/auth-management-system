import React, { useState } from "react";
import { MdEdit, MdDelete } from "react-icons/md";
import ModalEdit from "./ModalEdit";
import toast from "react-hot-toast";

function Table({ data, onDelete, onEdit }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const [userToEdit, setUserToEdit] = useState(null); // simpan user yang akan diedit
  const [userToDelete, setUserToDelete] = useState(null); // simpan user yang
  const [openModalEdit, setOpenEdit] = useState(false);

  // Hitung jumlah halaman
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Data untuk halaman current
  const currentData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Pindah Halaman
  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handler delete setelah konfirmasi
  const confirmDelete = () => {
    if (onDelete && userToDelete) {
      onDelete(userToDelete.id);
      toast.success(`Data ${userToDelete.username} berhasil dihapus`);
    }
    setUserToDelete(null); // tutup modal
  };

  return (
    <>
      <table className="w-full text-left rounded-lg overflow-auto shadow">
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
          {currentData.map((user, index) => (
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
                    user.status === "active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-600"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="p-4 border-b flex gap-2">
                <button
                  onClick={() => {
                    setUserToEdit(user);
                    setOpenEdit(true);
                  }}
                  className="p-2 bg-blue-100 hover:bg-blue-200 rounded-lg cursor-pointer"
                >
                  <MdEdit />
                </button>
                <button
                  className="p-2 bg-red-100 hover:bg-red-200 rounded-lg cursor-pointer"
                  onClick={() => setUserToDelete(user)} // simpan user yang dipilih
                >
                  <MdDelete />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-3 mt-4">
        <button
          className="p-2 text-white bg-blue-500 rounded cursor-pointer hover:opacity-50"
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`p-2 rounded ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
            onClick={() => goToPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className="p-2 text-white bg-blue-500 rounded cursor-pointer hover:opacity-50"
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>

      {/* Modal Konfirmasi */}
      {userToDelete && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-sm">
            <h2 className="text-lg font-semibold">Konfirmasi Hapus</h2>
            <p className="text-sm text-gray-600 mt-2">
              Apakah anda yakin ingin menghapus username{" "}
              <span className="font-bold">{userToDelete.username}</span>?
            </p>
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="px-3 py-1 rounded-lg bg-gray-200 hover:bg-gray-300"
                onClick={() => setUserToDelete(null)}
              >
                Tidak
              </button>
              <button
                className="px-3 py-1 rounded-lg bg-red-500 text-white hover:bg-red-600"
                onClick={confirmDelete}
              >
                Iya
              </button>
            </div>
          </div>
        </div>
      )}
      <ModalEdit
        user={userToEdit}
        open={openModalEdit}
        onClose={() => setOpenEdit(false)}
        onEdit={onEdit}
      />
    </>
  );
}

export default Table;
