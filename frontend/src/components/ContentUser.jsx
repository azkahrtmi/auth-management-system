import { useState } from "react";
import { RiAccountCircleLine } from "react-icons/ri";
import { IoMail } from "react-icons/io5";
import { MdLock } from "react-icons/md";
import { LuEyeClosed } from "react-icons/lu";
import { LuEye } from "react-icons/lu";

function ContentUser() {
  const [showPassword, setShowPassword] = useState(false);
  const username = "Tsuga BAAP";
  const email = "Tsuga@mail.com";
  const password = "TsugaloveAlifa";
  const role = "User";

  return (
    <div className="border-red-500 flex flex-col gap-3">
      {/* username */}
      <div className="card-1 bg-[#EEE7F6] rounded-[20px] flex justify-between p-5 items-center">
        <div className="flex justify-center items-center gap-5">
          <RiAccountCircleLine className="text-5xl" />
          <div className="flex flex-col leading-tight self-center">
            <span className="text-gray-600 font-semibold text-xl">
              Username
            </span>
            <span className="text-black font-normal">{username}</span>
          </div>
        </div>
        <div className="bg-[#ADBADA] text-center content-center rounded-[10px] text-gray-600">
          <p className="mx-5 my-1 font-light text-lg">{role}</p>
        </div>
      </div>

      {/* Email */}
      <div className="card-2 bg-[#EEE7F6] rounded-[20px] flex p-5 items-center">
        <div className="flex justify-center items-center gap-5">
          <IoMail className="text-5xl" />
          <div className="flex flex-col leading-tight self-center">
            <span className="text-gray-600 font-semibold text-xl">Email</span>
            <span className="text-black font-normal ">{email}</span>
          </div>
        </div>
      </div>

      {/* Password */}
      <div className="card-3 bg-[#EEE7F6] rounded-[20px] flex justify-between p-5 items-center">
        <div className="flex justify-center items-center gap-5">
          <MdLock className="text-5xl" />
          <div className="flex flex-col leading-tight self-center">
            <span className="text-gray-600 font-semibold text-xl">
              Password
            </span>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              readOnly
              className="text-black font-normal text-xl bg-transparent outline-none"
            />
          </div>
        </div>
        <div
          className="w-[100px] h-[46px]  flex justify-center items-center text-xl rounded-[10px] cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        >
          {showPassword ? (
            <LuEyeClosed className="text-4xl text-black" />
          ) : (
            <LuEye className="text-4xl text-black" />
          )}
        </div>
      </div>
    </div>
  );
}

export default ContentUser;
