import { Star } from "lucide-react";

const AssociateProfile = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <h2 className="text-gray-700 font-medium text-lg">
        Certified Associates{" "}
        <span className="text-black font-semibold">→ Emmanuel Nonye</span>
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-[3fr_1fr] gap-8 mt-6">
        {/* Services Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {/* Service Card */}
          {Array(4)
            .fill(0)
            .map((_) => (
              <div className="bg-white shadow-md rounded-xl border p-4">
                {/* Image */}
                <img
                  src="https://source.unsplash.com/400x250/?wind-turbine"
                  alt="Service"
                  className="w-full h-44 object-cover rounded-lg"
                />

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-800 mt-3">
                  Energhx New Fan Light Fix
                </h3>

                {/* Rating */}
                <div className="flex items-center text-yellow-500 mt-1">
                  {[...Array(4)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-500 text-yellow-500"
                    />
                  ))}
                  <Star className="w-5 h-5 fill-none text-yellow-500" />
                  <span className="ml-1 text-gray-600 font-medium">4.3</span>
                  <span className="text-gray-500 text-sm ml-1">
                    (Review 22)
                  </span>
                </div>

                {/* Button */}
                <button className="w-full mt-4 bg-secondary text-primary py-2 rounded-md font-semibold border border-green-500 hover:bg-primary hover:text-white transition">
                  Book Now
                </button>
              </div>
            ))}
        </div>

        {/* Profile Section */}
        <div className="bg-secondary p-6 rounded-xl shadow-md">
          {/* Profile Header */}
          <div className="flex flex-col items-center text-center">
            <img
              src="https://source.unsplash.com/100x100/?portrait"
              alt="Profile"
              className="w-20 h-20 rounded-full border-2 border-gray-300"
            />
            <span className="mt-2 px-3 py-1 bg-green-200 text-green-800 text-xs font-semibold rounded-full">
              Available
            </span>
            <h3 className="mt-2 text-lg font-semibold">EMMANUEL NONYE</h3>
            <p className="text-gray-600 font-medium">Developer</p>
            <div className="flex items-center text-yellow-500 mt-1">
              {[...Array(4)].map((_, i) => (
                <Star
                  key={i}
                  className="w-4 h-4 fill-yellow-500 text-yellow-500"
                />
              ))}
              <Star className="w-4 h-4 fill-none text-yellow-500" />
              <span className="ml-1 text-gray-600 text-sm">4.3</span>
            </div>
            <button className="w-full mt-3 bg-primary text-white py-2 rounded-md font-semibold">
              Appointment
            </button>
            <p className="text-gray-500 text-sm mt-3">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout.
            </p>
          </div>

          {/* Contact Info */}
          <div className="mt-6 border-t pt-4">
            <h4 className="text-gray-700 font-semibold text-sm">
              Contact Info
            </h4>
            <p className="flex items-center text-gray-600 mt-1">
              📞 888 888 8888
            </p>
            <p className="flex items-center text-gray-600 mt-1">
              📧 yourmail@mail.com
            </p>
            <p className="flex items-center text-gray-600 mt-1">
              📍 Here is the current Location Lorem Ipsum used since 1200
            </p>
          </div>

          {/* Certificates */}
          <div className="mt-6 border-t pt-4">
            <h4 className="text-gray-700 font-semibold text-sm">
              Certificates
            </h4>
            <p className="text-gray-600 text-sm mt-2 flex items-center">
              🏅{" "}
              <span className="ml-2 text-red-500 font-medium">
                Developer Certificate 2024
              </span>
            </p>
            <p className="text-gray-500 text-xs ml-6">
              Here is the current Location Lorem Ipsum used since 1200
            </p>

            <p className="text-gray-600 text-sm mt-2 flex items-center">
              🏅{" "}
              <span className="ml-2 text-green-500 font-medium">
                Server Certificate 2023
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssociateProfile;
