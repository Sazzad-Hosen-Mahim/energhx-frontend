const Billing = () => {
    const handleSave = () => {
      // Handle save logic here
      console.log("Billing info saved");
    };
  
    return (
      <div className="p-6 bg-white rounded-lg ">
        <h2 className="text-2xl  mb-12">Billing</h2>
        <div className="space-y-6">
         <div className="grid grid-cols-2 gap-4">
         <div>
            <label className="block text-lg font-medium text-[#758179]">First Name:</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Consumer" />
          </div>
          <div>
            <label className="block text-lg font-medium text-[#758179]">Last Name:</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Demo" />
          </div>
         </div>
          <div>
            <label className="block text-lg font-medium text-[#758179]">Email Address:</label>
            <input type="email" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="yourmail@mail.com" />
          </div>
          <div>
            <label className="block text-lg font-medium text-[#758179]">Country:</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="Your Country" />
          </div>
        <div className="grid grid-cols-2 gap-4">
        <div>
            <label className="block text-lg font-medium text-[#758179]">State:</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="State Name" />
          </div>
          <div>
            <label className="block text-lg font-medium text-[#758179]">City:</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="City Name" />
          </div>
        </div>
         <div className="grid grid-cols-2 gap-4">
         <div>
            <label className="block text-lg font-medium text-[#758179]">Postcode:</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="123" />
          </div>
          <div>
            <label className="block text-lg font-medium text-[#758179]">Phone:</label>
            <input type="text" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" placeholder="000 000 000 00" />
          </div>
         </div>
        </div>
        <button
          onClick={handleSave}
          className="mt-6 px-6 py-3 bg-[#2DAD00] text-white rounded hover:bg-[#2DAD00]"
        >
          Save Billing
        </button>
      </div>
    );
  };
  
  export default Billing;