import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

interface Step2FormProps {
  formData: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void; // Updated to include select
  isStepTwoValid: () => boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  openModal?: () => void; // Optional if not used
}

const Step2Form: React.FC<Step2FormProps> = ({
  formData,
  handleChange,
  isStepTwoValid,
  setStep,
}) => {
  return (
    <div className="space-y-6 pt-4 w-[80%] ">
      <p>Add Information for Electricity</p>

      {/* Grid layout for input fields */}
      <div className="grid grid-cols-3 gap-4">
        {/* Dropdown for Utility */}
        <div>
          <label className="block text-[#758179]">Utility*</label>
          <select
            name="utility"
            value={formData.utility}
            className="w-full p-2 border rounded"
            onChange={handleChange}
          >
            <option value="">Select Utility</option>
            <option value="Electricity">Electricity</option>
            <option value="Water">Water</option>
            <option value="Gas">Gas</option>
          </select>
        </div>
        <div>
          <label className="block text-[#758179]">Phone Number*</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-[#758179]">
            Alternate Phone Number*
          </label>
          <input
            type="text"
            name="alternatePhoneNumber"
            value={formData.alternatePhoneNumber}
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>

        <div>
          <label className="block text-[#758179]">Account Number*</label>
          <input
            type="text"
            name="accountNumber"
            value={formData.accountNumber}
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>
        <div>
          <label className="block text-[#758179]">Units*</label>
          <input
            type="text"
            name="units"
            value={formData.units}
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          className="bg-[#EAF7E6] text-[#2DAD00] px-4 py-2 rounded"
          onClick={() => setStep(1)}
        >
          <div className="flex items-center gap-1">
            {" "}
            <span className="">
              <GrPrevious />
            </span>
            Previous
          </div>
        </button>
        <button
          className="bg-[#2DAD00] text-white px-4 py-2 rounded"
          disabled={!isStepTwoValid()}
          onClick={() => {
            if (isStepTwoValid()) {
              setStep(3); // Move to Step 3 if the form is valid
            }
          }}
        >
          <div className="flex items-center gap-1">
            {" "}
            continue{" "}
            <span className="">
              <GrNext />
            </span>
            <span className="ml-[-14px]">
              <GrNext />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Step2Form;
