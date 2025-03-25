import React, { useState } from "react";
import BookingModal from "./BookingModal";

const Billing = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    state: "",
    city: "",
    postcode: "",
    phone: "",
  });

  const [modalOpen, setModalOpen] = useState(false);

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle save and show modal
  const handleSave = () => {
    console.log("Billing Info:", formData);
    setModalOpen(true);
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-2xl mb-12">Billing</h2>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium text-[#758179]">First Name:</label>
            <input type="text" name="firstName" className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Consumer" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-lg font-medium text-[#758179]">Last Name:</label>
            <input type="text" name="lastName" className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="Demo" onChange={handleChange} />
          </div>
        </div>
        <div>
          <label className="block text-lg font-medium text-[#758179]">Email Address:</label>
          <input type="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="yourmail@mail.com" onChange={handleChange} />
        </div>
        <div>
          <label className="block text-lg font-medium text-[#758179]">Country:</label>
          <input type="text" name="country" className="w-full px-3 py-2 border border-gray-300 rounded-md"
            placeholder="Your Country" onChange={handleChange} />
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium text-[#758179]">State:</label>
            <input type="text" name="state" className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="State Name" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-lg font-medium text-[#758179]">City:</label>
            <input type="text" name="city" className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="City Name" onChange={handleChange} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-lg font-medium text-[#758179]">Postcode:</label>
            <input type="text" name="postcode" className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="123" onChange={handleChange} />
          </div>
          <div>
            <label className="block text-lg font-medium text-[#758179]">Phone:</label>
            <input type="text" name="phone" className="w-full px-3 py-2 border border-gray-300 rounded-md"
              placeholder="000 000 000 00" onChange={handleChange} />
          </div>
        </div>
      </div>
      <button
        onClick={handleSave}
        className="mt-6 px-6 py-3 bg-[#2DAD00] text-white rounded hover:bg-[#2DAD00]"
      >
        Save Billing
      </button>

      {/* Show modal if modalOpen is true */}
      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default Billing;
