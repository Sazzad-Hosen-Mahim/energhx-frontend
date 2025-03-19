const Password = () => {
    const handleSave = () => {
      // Handle save logic here
      console.log("Password info saved");
    };
  
    return (
      <div className="p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">Password</h2>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Old Password:</label>
            <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">New Password:</label>
            <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Re-type New Password:</label>
            <input type="password" className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md" />
          </div>
        </div>
        <button
          onClick={handleSave}
          className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Save Info
        </button>
      </div>
    );
  };
  
  export default Password;