// Step1Form.tsx
import React from "react";

interface Step1FormProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleCheckboxChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isStepOneValid: () => boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const Step1Form: React.FC<Step1FormProps> = ({
  formData,
  handleChange,
  handleCheckboxChange,
  isStepOneValid,
  setStep,
}) => {
  return (
    <div className="space-y-4">
      {/* Building, Sub Building, Country */}
      <div className="grid grid-cols-3 gap-4">
        <div>
          <label className="block">Building</label>
          <select
            name="building"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          >
            <option value="">Select Building</option>
            <option value="Building A">Building A</option>
            <option value="Building B">Building B</option>
          </select>
        </div>
        <div>
          <label className="block">Sub Building</label>
          <select
            name="subBuilding"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          >
            <option value="">Select Sub Building</option>
            <option value="Sub A">Sub A</option>
            <option value="Sub B">Sub B</option>
          </select>
        </div>
        <div>
          <label className="block">Country</label>
          <select
            name="country"
            className="w-full p-2 border rounded"
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
          <label className="block">Street</label>
          <select
            name="street"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          >
            <option value="">Select Street</option>
            <option value="Street 1">Street 1</option>
            <option value="Street 2">Street 2</option>
          </select>
        </div>
        <div>
          <label className="block">City</label>
          <select
            name="city"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          >
            <option value="">Select City</option>
            <option value="City 1">City 1</option>
            <option value="City 2">City 2</option>
          </select>
        </div>
        <div>
          <label className="block">Postal Code</label>
          <input
            type="text"
            name="zipCode"
            className="w-full p-2 border rounded"
            onChange={handleChange}
          />
        </div>
      </div>

      {/* Commodity Checkboxes */}
      <div>
        <label className="block">Commodity</label>
        <div className="flex space-x-4">
          <label>
            <input
              type="checkbox"
              value="Electricity"
              onChange={handleCheckboxChange}
            />{" "}
            Electricity
          </label>
          <label>
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
      <div className="flex justify-between mt-4">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          disabled
        >
          Previous
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          disabled={!isStepOneValid()}
          onClick={() => setStep(2)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step1Form;
