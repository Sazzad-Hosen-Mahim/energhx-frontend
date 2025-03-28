import banner from "@/assets/courses/banner.png";
import newspaperfolding from "/src/assets/courses/newspaper-folding.png";
import carouselvideo from "/src/assets/courses/carousel-video.png";
import videoFile from "@/assets/courses/videoFile.png";
import { IoIosStar, IoIosStarOutline } from "react-icons/io";


const renderStars = (rating: number) => {
  return (
    <div className="flex text-yellow-500 text-lg">
      {/* Filled Stars */}
      {Array.from({ length: Math.floor(rating) }, (_, i) => (
        <IoIosStar key={`filled-${i}`} />
      ))}
      {/* Empty Stars */}
      {Array.from({ length: 5 - Math.floor(rating) }, (_, i) => (
        <IoIosStarOutline key={`empty-${i}`} />
      ))}
    </div>
  );
};

const CourseDetails = () => {
  return (
    <div className="p-6 bg-white rounded-lg">
      {/* Service Details Header */}
      <h2 className="text-xl font-bold text-gray-800">Service Details</h2>

      {/* Course Banner */}
      <div className="mt-4">
        <img
          src={banner}
          alt="Course Banner"
          className="w-full h-64 object-cover rounded-lg"
        />
      </div>

      {/* Course Info */}
      <div className="mt-6">
       <div className="flex justify-between"> <h3 className="text-lg font-bold text-gray-900">Introduction EnergHx</h3> <button className="bg-[#2DAD00] text-white px-6 py-3 rounded">Book Now</button></div>
        <div className="flex items-center text-gray-600 text-sm mt-4 gap-4 mb-5 ">
          <span className="flex gap-2"><img src={carouselvideo}/> Total Class: 24</span>
          <span className="flex gap-2"><img src={newspaperfolding}/> Assignment: 14</span>
          <span className="flex gap-2"><img src={videoFile}/> Module: 06</span>
        </div>

        <p className="mt-3 text-[#758179]">
          There are many variations of passages of Lorem Ipsum available, but the
          majority have suffered alteration in some form, by injected humour, or
          randomised words.
        </p>

        {/* Ratings */}
        <div className="flex items-center mt-4">
        {renderStars(5)}
        {/* <span className="text-gray-500 text-sm ml-2">
          (Review {course.reviews})
        </span> */}
      </div>

    

      </div>

      {/* Course List */}
      <div className="mt-8">
        {[1, 2, 3].map((classNum) => (
          <div key={classNum} className="flex items-center bg-gray-100 p-4 rounded-lg mb-4">
            <img
              src={`/class-${classNum}.jpg`}
              alt="Class Thumbnail"
              className="w-24 h-24 object-cover rounded-lg"
            />
            <div className="ml-4 flex-1">
              <h4 className="text-green-700 font-bold">Class: 0{classNum} | 45 Minute</h4>
              <p className="text-gray-700">Orientation Class</p>
              <p className="text-gray-500 text-sm">
                Topic: Light Fitting, Fan Servicing, Fan Installation, etc.
              </p>
            </div>

            {/* Watch Again Button */}
            <button className="px-4 py-2 text-sm bg-green-100 text-green-700 rounded-lg">
              {classNum === 1 ? "Watch Again" : "Watch Now"}
            </button>
          </div>
        ))}
      </div>

      {/* Enrollment Section */}
      <div className="mt-8 text-center">
        <p className="text-gray-700">Enroll in this course to gain full access to all videos.</p>
        <button className="mt-4 px-6 py-3 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700">
          Book Now
        </button>
      </div>

      {/* Course Details Footer */}
      <div className="mt-8">
        <h3 className="text-lg font-bold text-green-700 uppercase">Course Details</h3>
        <p className="text-gray-700 mt-2">
          Here is our some lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </div>
  );
};

export default CourseDetails;
