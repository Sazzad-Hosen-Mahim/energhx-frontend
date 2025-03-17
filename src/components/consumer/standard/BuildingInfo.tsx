import { useState } from "react";

const BuildingInfo = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    building: "",
    subBuilding: "",
    country: "",
    street: "",
    commodity: [],
    phoneNumber: "",
    alternatePhoneNumber: "",
    accountNumber: "",
    units: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      commodity: checked
        ? [...prevState.commodity, value]
        : prevState.commodity.filter((item) => item !== value),
    }));
  };

  const isStepOneValid = () => {
    return (
      formData.building &&
      formData.subBuilding &&
      formData.country &&
      formData.street &&
      formData.commodity.length > 0
    );
  };

  const isStepTwoValid = () => {
    return formData.phoneNumber && formData.accountNumber && formData.units;
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-5">Building Information</h2>

      {step === 1 && (
        <div className="space-y-4">
          {/* First Row */}
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

          {/* Second Row */}
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

          {/* Third Row */}
          <div className="grid grid-cols-3 gap-4">
            <div>
              <label className="block">Number of Occupation</label>
              <input
                type="text"
                name="occupation"
                className="w-full p-2 border rounded"
                onChange={handleChange}
                placeholder="Type Occupation"
              />
            </div>
          
          </div>
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
      )}

      {step === 2 && (
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
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BuildingInfo;
