const SocialProfile = () => {
  const handleSave = () => {
    // Handle save logic here
    console.log("Social profile info saved");
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <h2 className="text-2xl mb-10">Social Media</h2>
      <div className="space-y-10">
        <div className="flex items-center gap-6">
          <label className="w-32 text-lg font-medium text-[#758179]">
            Facebook:
          </label>
          <input
            type="text"
            className="flex-1 px-3 py-3 border border-gray-300 rounded-md"
            placeholder="https//facebook.com/username"
          />
        </div>
        <div className="flex items-center gap-6">
          <label className="w-32 text-lg font-medium text-[#758179]">
            Instagram:
          </label>
          <input
            type="text"
            className="flex-1 px-3 py-3 border border-gray-300 rounded-md"
            placeholder="https//instagram.com/username"
          />
        </div>
        <div className="flex items-center gap-6">
          <label className="w-32 text-lg font-medium text-[#758179]">
            YouTube:
          </label>
          <input
            type="text"
            className="flex-1 px-3 py-3 border border-gray-300 rounded-md"
            placeholder="https//youtube.com/username"
          />
        </div>
        <div className="flex items-center gap-6">
          <label className="w-32 text-lg font-medium text-[#758179]">
            LinkedIn:
          </label>
          <input
            type="text"
            className="flex-1 px-3 py-3 border border-gray-300 rounded-md"
            placeholder="https//linkedin.com/in/username"
          />
        </div>
      </div>
      <button
        onClick={handleSave}
        className="mt-14 px-4 py-3 bg-[#2DAD00] text-white rounded hover:bg-[#2ead00ee]"
      >
        Save Social Media
      </button>
    </div>
  );
};

export default SocialProfile;
