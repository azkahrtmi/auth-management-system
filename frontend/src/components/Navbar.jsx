import { MdLogout } from "react-icons/md";
import { useNavigate } from "react-router-dom";

function Navbar({ role }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    // hapus token
    localStorage.removeItem("token");

    // redirect ke login
    navigate("/");
  };

  return (
    <nav
      style={{
        background:
          "linear-gradient(to bottom, rgba(173, 186, 218, 0.8), rgba(61, 82, 161, 0.6))",
        color: "white",
        padding: "16px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
      className="flex justify-between items-center text-black px-6 py-4 shadow-md"
    >
      <div>
        <h1 className="text-xl font-bold text-black">{role} Dashboard</h1>
        <p className="text-sm text-black">Welcome, {role}</p>
      </div>
      <button
        onClick={handleLogout}
        className="bg-[#EEE7F6] hover:bg-[#ADBADA] cursor-pointer text-black font-semibold px-4 py-2 rounded-lg transition flex justify-center items-center gap-2"
      >
        <MdLogout className="font-bold" />
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
