import { MdLogout } from "react-icons/md";

function Navbar({ role }) {
  return (
    <nav className="flex justify-between items-center bg-green-50 text-black px-6 py-4 shadow-md">
      <div>
        <h1 className="text-xl font-bold">{role} Dashboard</h1>
        <p className="text-sm text-black">Welcome, {role}</p>
      </div>
      <button className="bg-[#EEE7F6] hover:bg-[#ADBADA] cursor-pointer text-black font-semibold px-4 py-2 rounded-lg transition flex justify-center items-center gap-2">
        <MdLogout className="font-bold" />
        Logout
      </button>
    </nav>
  );
}

export default Navbar;
