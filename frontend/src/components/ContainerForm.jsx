import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function ContainerForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("${import.meta.env.VITE_API_URL}/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.message === "Email atau password tidak sesuai") {
          toast.error("Email atau password tidak sesuai");
        } else {
          toast.error(data.message || "Login gagal");
        }
        return;
      }

      // simpan token & role
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);

      toast.success("Login berhasil!");

      // redirect sesuai role
      if (data.user.role === "admin") {
        navigate("/admin");
      } else {
        navigate("/user");
      }
    } catch (error) {
      console.error("Login error:", error);
      toast.error("Terjadi kesalahan server");
    }
  };

  return (
    <>
      <div className="flex flex-col text-center absolute top-5">
        <h1 className="text-[#3D52A1] text-[56px] font-bold">AUTH APP</h1>
        <h3 className="text-[#3D52A1] font-semibold">Welcome to Auth App</h3>
      </div>

      <form onSubmit={handleLogin} className="">
        <div
          style={{
            background:
              "linear-gradient(to bottom, rgb(113, 145, 230, 0.7), rgb(61, 82, 161))",
          }}
          className="w-[500px] rounded-xl shadow overflow-hidden flex flex-col p-10 justify-center items-center content-center h-auto gap-4"
        >
          <input
            className="bg-white border w-100 border-gray-300 rounded-xl p-4 mb-4"
            type="email"
            name="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className="bg-white border w-100 border-gray-300 rounded-xl p-4 mb-4"
            type="password"
            name="password"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex flex-row justify-center w-full text-sm text-white">
            <span>Doesnt have account?</span>
            <Link to="/signup" className="underline font-bold">
              &nbsp;Register Here
            </Link>
          </div>
        </div>
        <button
          style={{
            background:
              "linear-gradient(to bottom, rgb(113, 145, 230, 0.7), rgb(61, 82, 161))",
          }}
          className="w-[500px] h-[55px] rounded-xl mt-5 font-bold text-[25px] text-white cursor-pointer shadow hover:opacity-90"
          type="submit"
        >
          <p>LOGIN</p>
        </button>
      </form>

      <Toaster position="top-right" />
    </>
  );
}

export default ContainerForm;
