// Step1Form.tsx
import React from "react";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

interface Step1FormProps {
  formData: any;
  handleChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isStepOneValid: () => boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Step1Form: React.FC<Step1FormProps> = ({
  handleChange,
  handleCheckboxChange,
  isStepOneValid,
  setStep,
}) => {
  return (
    <div className="space-y-6 pt-4 w-[80%]">
      {/* Building, Sub Building, Country */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-[#758179]">Building*</label>
          <select
            name="building"
            className="w-full p-2 border rounded text-[#758179] "
            onChange={handleChange}
          >
            <option value="">Select Building</option>
            <option value="Building A">Building A</option>
            <option value="Building B">Building B</option>
          </select>
        </div>
        <div>
          <label className="block text-[#758179]">Sub Building*</label>
          <select
            name="subBuilding"
            className="w-full p-2 border rounded text-[#758179]"
            onChange={handleChange}
          >
            <option value="">Select Sub Building</option>
            <option value="Sub A">Sub A</option>
            <option value="Sub B">Sub B</option>
          </select>
        </div>
        <div>
          <label className="block text-[#758179]">Country*</label>
          <select
            name="country"
            className="w-full p-2 border rounded text-[#758179]"
            onChange={handleChange}
          >
            <option value="">Select Country</option>
            <option value="USA">USA</option>
            <option value="Canada">Canada</option>
          </select>
        </div>
      </div>

      {/* Street, City, Postal Code */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block text-[#758179]">Street*</label>
          <select
            name="street"
            className="w-full p-2 border rounded text-[#758179]"
            onChange={handleChange}
          >
            <option value="">Select Street</option>
            <option value="Street 1">Street 1</option>
            <option value="Street 2">Street 2</option>
          </select>
        </div>
        <div>
          <label className="block text-[#758179]">City*</label>
          <select
            name="city"
            className="w-full p-2 border rounded text-[#758179]"
            onChange={handleChange}
          >
            <option value="">Select City</option>
            <option value="City 1">City 1</option>
            <option value="City 2">City 2</option>
          </select>
        </div>
        <div>
          <label className="block text-[#758179]">Postal Code*</label>
          <input
            type="text"
            name="zipCode"
            className="w-full p-2 border rounded text-[#758179]"
            onChange={handleChange}
            placeholder="123"
          />
        </div>
      </div>
      <div>
        <label className="block text-[#758179]">Number of Occupant*</label>
        <input
          type="text"
          name="occupant"
          className=" p-2 border rounded text-[#758179]"
          onChange={handleChange}
          placeholder="Type Occupant"
        />
      </div>

      {/* Commodity Checkboxes */}
      <div>
        <label className="block text-[#758179]">Commodity*</label>
        <div className="flex space-x-6">
          <label className="text-[#758179]">
            <input
              type="checkbox"
              value="Electricity"
              onChange={handleCheckboxChange}
            />{" "}
            Electricity
          </label>
          <label className="text-[#758179]">
            <input
              type="checkbox"
              value="Natural Gas"
              onChange={handleCheckboxChange}
            />{" "}
            Natural Gas
          </label>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex gap-4 mt-4">
        <button
          className="bg-[#EAF7E6] text-[#2DAD00] px-4 py-2 rounded"
          disabled
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
          disabled={!isStepOneValid()}
          onClick={() => setStep(2)}
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

export default Step1Form;
