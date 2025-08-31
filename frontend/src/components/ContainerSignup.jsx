import React from "react";
import { Link } from "react-router-dom";

function ContainerForm() {
  return (
    <>
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
            type="email"
            name="email"
            placeholder="Enter Email"
          />
          <input
            className="bg-white border w-100 border-gray-300 rounded-xl p-4 mb-4"
            type="text"
            name="username"
            placeholder="Enter username"
          />
          <input
            className="bg-white border w-100 border-gray-300 rounded-xl p-4 mb-4"
            type="password"
            name="password"
            placeholder="Enter Password"
          />
          <div className="flex flex-row justify-center w-full text-sm text-white">
            <span>Already Have Account? </span>
            <Link to="/" className="underline font-bold">
              &nbsp;Sign In
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
