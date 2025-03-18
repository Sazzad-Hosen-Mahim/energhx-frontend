import React, { useState } from "react";

interface ElectricMobilityProps {
  closeElectricMobilityModal: () => void;
  onAddElectricMobility: (data: {
    evCharger: string;
    powerRating: string;
    numOfEV: string;
    charging: string;
  }) => void;
}

const ElectricMobility: React.FC<ElectricMobilityProps> = ({
  closeElectricMobilityModal,
  onAddElectricMobility,
}) => {
  const [electricMobilityData, setElectricMobilityData] = useState({
    evCharger: "",
    powerRating: "",
    numOfEV: "",
    charging: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setElectricMobilityData({
      ...electricMobilityData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    onAddElectricMobility(electricMobilityData);
    closeElectricMobilityModal(); // Close modal after submitting
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h3 className="text-lg font-semibold mb-4">Add Electric Mobility</h3>

        {/* Form Inputs */}
        <div className="space-y-3">
          <label className="block">
            EV Charger
            <input
              type="text"
              name="evCharger"
              className="w-full p-2 border rounded"
              onChange={handleChange}
            />
          </label>
          <label className="block">
            Power Rating of EV Charger
            <input
              type="text"
              name="powerRating"
              className="w-full p-2 border rounded"
              onChange={handleChange}
            />
          </label>
          <label className="block">
            Number of EVs
            <input
              type="text"
              name="numOfEV"
              className="w-full p-2 border rounded"
              onChange={handleChange}
            />
          </label>
          <label className="block">
            Charging
            <input
              type="text"
              name="charging"
              className="w-full p-2 border rounded"
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Buttons */}
        <div className="mt-4 flex justify-between">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={closeElectricMobilityModal}
          >
            Cancel
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ElectricMobility;
