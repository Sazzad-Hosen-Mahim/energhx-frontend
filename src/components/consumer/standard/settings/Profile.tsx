import { useState } from "react";
import { FaCamera, FaTrash } from "react-icons/fa";
// import cover from "@/assets/Profile/cover.png"
// import profile from "@/assets/Profile/profile.png"

const Profile = () => {
  const [coverPhoto, setCoverPhoto] = useState("/default-cover.jpg");
  const [profilePhoto, setProfilePhoto] = useState("/default-profile.jpg");
  const cover = "https://s3-alpha-sig.figma.com/img/341f/d7a9/cebda61add750063246364df7353e3a4?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SqWfzayEn6BVUjzR-~Y~YWz-0PV~k7DwIvZ3ur67RTv0vvtUA0L~DABQjeU8FnE31Wui7Y3qnIX9o3bhd1CG-SixyzWysIf5qx1tXImvcXiYBypxLL3YhB0Ft8wP1k4qEFmG419BOM7vsCAuqaG6~SiwDwfCSzk1VnGrj7vKlsnt8JWmKQL4KH0bKE4KcWQG5K4bz5RZ8hFkvXCbW4qE93e23LHx53dryvaIi8Yx9tG1BBjWR0gHDFpCoZSUn-2r8-o5Uukz69TXof~IBFfJKtA8-Zj4xXgm4sO2XfDBHwOQO4~ArFF19I5llpo8JkoGBlm7MuWFaH2MFvBAJSGthA__"
  const profile = "https://s3-alpha-sig.figma.com/img/51a2/6677/88ebcdbeeab9f107b69a80d1053e1aa1?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=d0KgRGrzO9u8FnWl315PSCWxq5lxU2Z2CqPGatsAUhJDn6vlJk0E0cLY4W4W9Vz6V1r7gs0Uqyizc2Bfwr3UTHJisRhKC1XDm-XdG5PCg5g6i9HFF-Y-a5fEQkBwrlYbzbO9pBTPvY6xlQMG2N2fjWABfE-48okK4ad3C4NAWeqJYG443VGZJwdK-KX6Ca0pFfFGkoO2pYvUgjy6h6pf7jSrYeV7pw-EqGn5~F7lFG6knvwpc4v6E3d2EDYRWPqOAYl32By6lRoPYX-Mk3nH5EFw2dYEBS11Ngmnmr5Lh3A-f6XaZJ06927l7L-9~obCCCIyyvIeOoa1WBawMdM5mA__"
  const handleCoverPhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setCoverPhoto(URL.createObjectURL(file));
    }
  };

  const handleProfilePhotoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setProfilePhoto(URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    console.log("Profile info saved");
  };

  return (
    <div className=" bg-white rounded-lg ">
      {/* <h2 className="text-2xl font-bold mb-4">Profile</h2> */}

      {/* Cover Photo Section */}
      <div className="relative">
        <img src={cover} alt="Cover" className="w-full h-70 object-cover rounded-lg" />
        <label className="absolute bottom-4 right-4 bg-green-500 text-white p-2 rounded cursor-pointer flex items-center">
          <FaCamera className="mr-2" />
          Upload Cover Photo
          <input type="file" accept="image/*" className="hidden" onChange={handleCoverPhotoUpload} />
        </label>
        <button className="absolute top-2 right-2 bg-gray-800 text-white p-2 rounded-full hover:bg-red-500 transition">
          <FaTrash />
        </button>
      </div>

      {/* Profile Picture */}
      <div className="relative flex justify-start -mt-30 ">
        <div className="relative">
          <img src={profile} alt="Profile" className="w-40 h-40 object-cover  rounded-full border-4 border-white shadow-lg" />
          <label className="absolute bottom-0 right-0 bg-gray-800 text-white p-1 rounded-full cursor-pointer">
            <FaCamera />
            <input type="file" accept="image/*" className="hidden" onChange={handleProfilePhotoUpload} />
          </label>
        </div>
      </div>

      {/* Profile Information Form */}
      <div className="mt-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">First Name:</label>
            <input className="mt-1 w-full p-2 border rounded" defaultValue="Consumer" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Last Name:</label>
            <input className="mt-1 w-full p-2 border rounded" defaultValue="Demo" />
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">User Name:</label>
          <input className="mt-1 w-full p-2 border rounded" defaultValue="consumerDemo" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Phone Number:</label>
          <input className="mt-1 w-full p-2 border rounded" defaultValue="000 000 0000 0000" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Skill/Occupation:</label>
          <input className="mt-1 w-full p-2 border rounded" defaultValue="Consumer" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Time zone:</label>
          <input className="mt-1 w-full p-2 border rounded" defaultValue="Your Location" />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Bio:</label>
          <textarea className="mt-1 w-full p-2 border rounded" placeholder="Type your bio"></textarea>
        </div>
      </div>

      <button
        onClick={handleSave}
        className="mt-6 px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
      >
        Save Profile
      </button>
    </div>
  );
};

export default Profile;
