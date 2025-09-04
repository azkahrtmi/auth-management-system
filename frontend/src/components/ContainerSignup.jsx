import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function ContainerForm() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/auth/signup`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.message === "Email sudah terdaftar") {
          toast.error("Email sudah terdaftar");
          navigate("/signup");
          return;
        }
        toast.error(data.message || "Register gagal");
        return;
      }

      toast.success("Register berhasil!");
      navigate("/");
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("Terjadi kesalahan server");
    }
  };
  return (
    <>
      <form action="POST" onSubmit={handleSignup} className="">
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
            type="text"
            name="username"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
            <span>Already Have Account? </span>
            <Link to="/" className="underline font-bold">
              &nbsp;Login
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
          <p>REGISTER</p>
        </button>
      </form>
    </>
  );
}

export default ContainerForm;
