import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Password = () => {
  const [showPassword, setShowPassword] = useState({
    old: false,
    new: false,
    confirm: false,
  });

  const togglePasswordVisibility = (field) => {
    setShowPassword((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleSave = () => {
    console.log("Password info saved");
  };

  return (
    <div className="p-6 bg-white rounded-lg ">
      <h2 className="text-2xl  mb-10">Password</h2>
      <div className="space-y-10">
        
        {/* Old Password */}
        <div className="relative">
          <label className="block text-lg  text-[#758179]">Old Password:</label>
          <input
            type={showPassword.old ? "text" : "password"}
            className="mt-1  block w-full px-3 py-3 border border-gray-300 rounded-md"
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility("old")}
            className="absolute right-3 top-12 text-gray-600 "
          >
            {showPassword.old ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* New Password */}
        <div className="relative">
          <label className="block text-lg text-[#758179]">New Password:</label>
          <input
            type={showPassword.new ? "text" : "password"}
            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md"
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility("new")}
            className="absolute right-3 top-12 text-gray-600"
          >
            {showPassword.new ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Confirm Password */}
        <div className="relative">
          <label className="block text-lg text-[#758179]">Re-type New Password:</label>
          <input
            type={showPassword.confirm ? "text" : "password"}
            className="mt-1 block w-full px-3 py-3 border border-gray-300 rounded-md"
          />
          <button
            type="button"
            onClick={() => togglePasswordVisibility("confirm")}
            className="absolute right-3 top-12 text-gray-600"
          >
            {showPassword.confirm ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="mt-6 px-6 py-4 bg-[#2DAD00] text-white rounded hover:bg-[#314629] cursor-pointer"
      >
        Save Password
      </button>
    </div>
  );
};

export default Password;
