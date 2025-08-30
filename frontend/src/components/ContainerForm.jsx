import React from "react";

function ContainerForm() {
  return (
    <>
      <div className="flex flex-col text-center absolute top-5">
        <h1 className="text-[#3D52A1] text-[56px] font-bold">AUTH APP</h1>
        <h3 className="text-[#3D52A1] font-semibold">Welcome to Auth App</h3>
      </div>
      <form action="POST" className="">
        <div
          style={{
            background:
              "linear-gradient(to bottom, rgb(113, 145, 230, 0.7), rgb(61, 82, 161))",
          }}
          className="w-[500px] rounded-xl shadow overflow-hidden flex flex-col p-10 justify-center items-center content-center h-auto gap-4"
        >
          <input
            className="bg-white border w-100 border-gray-300 rounded-xl p-4 mb-4"
            type="text"
            name="username"
            placeholder="Enter Email"
          />
          <input
            className="bg-white border w-100 border-gray-300 rounded-xl p-4 mb-4"
            type="password"
            name="password"
            placeholder="Enter Password"
          />
          <div className="flex flex-row justify-between w-full text-sm text-white">
            <a href="#">Register</a>
            <a href="#">Forgot Password?</a>
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
    </>
  );
}

export default ContainerForm;
