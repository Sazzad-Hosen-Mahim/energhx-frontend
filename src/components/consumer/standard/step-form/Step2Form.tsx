// Step2Form.tsx
import React from "react";

interface Step2FormProps {
  formData: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isStepTwoValid: () => boolean;
  setStep: React.Dispatch<React.SetStateAction<number>>;
  openModal: () => void;
}

const Step2Form: React.FC<Step2FormProps> = ({
  formData,
  handleChange,
  isStepTwoValid,
  setStep,
  openModal,
}) => {
  return (
    <div className="space-y-4">
      <div>
        <label className="block">Phone Number</label>
        <input
          type="text"
          name="phoneNumber"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block">Alternate Phone Number</label>
        <input
          type="text"
          name="alternatePhoneNumber"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block">Account Number</label>
        <input
          type="text"
          name="accountNumber"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
      </div>
      <div>
        <label className="block">Units</label>
        <input
          type="text"
          name="units"
          className="w-full p-2 border rounded"
          onChange={handleChange}
        />
      </div>

      {/* Buttons */}
      <div className="flex justify-between">
        <button
          className="bg-gray-500 text-white px-4 py-2 rounded"
          onClick={() => setStep(1)}
        >
          Previous
        </button>
        <button
          className="bg-green-600 text-white px-4 py-2 rounded"
          disabled={!isStepTwoValid()}
          onClick={openModal}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default Step2Form;
