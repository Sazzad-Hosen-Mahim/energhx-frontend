import { singleCourse } from "../../standard-developer/standardDeveloperData";
import { FaLongArrowAltRight } from "react-icons/fa";

const MyCourseDetails = () => {
  const [selectedFilter, setSelectedFilter] = useState("module");

  const filterArray = [
    { id: generateRandomId(), label: "Module", value: "module" },
    { id: generateRandomId(), label: "Class", value: "class" },
    { id: generateRandomId(), label: "Assignment", value: "assignment" },
    { id: generateRandomId(), label: "Certificate", value: "certificate" },
  ];
  return (
    <div>
      <p className="text-[18px] text-[#112518] flex items-center">
        My Course
        <span className="mx-3">
          <FaLongArrowAltRight />
        </span>
        <span className="font-semibold">Course Details</span>
      </p>
      <div className="flex gap-4 my-2">
        {filterArray.map((item) => {
          return (
            <button
              onClick={() => setSelectedFilter(item.value)}
              className={`px-3 py-2 border-[1px] cursor-pointer rounded-full ${
                item.value === selectedFilter
                  ? "bg-[#FFFAE9] text-[#F1BB00] border-[#F1BB00]"
                  : "bg-[#E7E9E8] text-[#9DA6A0] border-[#9DA6A0]"
              }`}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="flex gap-8 flex-wrap">
        {singleCourse.map((course) => (
          <SingleModuleCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};
export default MyCourseDetails;

import newspaperfolding from "/src/assets/courses/newspaper-folding.png";
import carouselvideo from "/src/assets/courses/carousel-video.png";
import { calculatePercentage, generateRandomId } from "@/lib/utils";
import ProgressBar from "@/components/ui/ProgressBar";
import StarRating from "@/components/ui/StarRating";
import { useState } from "react";

// Define the Course type
interface Course {
  id: number;
  title: string;
  description: string;
  totalModules: string;
  totalClass: number;
  assignment: number;
  rating: number;
  reviews: number;
  image: string;
  moduleNo: number;
  completedClass: number;
  completedAssignment: number;
}

// Define props type
interface CourseCardProps {
  course: Course;
}

const SingleModuleCard: React.FC<CourseCardProps> = ({ course }) => {
  const progressPercent = calculatePercentage(
    course.completedAssignment + course.completedClass,
    course.totalClass + parseInt(course.totalModules)
  );
  return (
    <div className=" p-4 rounded-lg shadow-md w-76 relative">
      {/* Image Wrapper with Absolute Badge */}
      <div className="relative">
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-40 object-cover rounded-md"
        />
        <span className="absolute bottom-2 left-2 bg-[#FFFAE9] text-[#F1BB00] px-2 py-1 rounded text-sm">
          Module {course.moduleNo}
        </span>
      </div>

      {/* Course Details */}
      <p className="text-[18px] text-[#394A3F] mt-3">{course.title}</p>

      <div className="flex flex-col space-y-3">
        <div className="flex justify-between items-center mt-3 text-gray-700 text-sm">
          <span className="flex gap-2">
            <img src={carouselvideo} /> Total Classe: {course.totalClass}
          </span>
          <span className="flex gap-2">
            {" "}
            <img src={newspaperfolding} /> Assignment: {course.assignment}
          </span>
        </div>

        <div className="flex justify-between text-[12px] text-[#758179]">
          <p>
            {course.completedAssignment}/{course.assignment}
          </p>
          <p>{progressPercent}% Completed</p>
        </div>
        <div>
          <ProgressBar percent={progressPercent} />
        </div>

        {/* Star Ratings */}
        <div className="flex gap-3">
          <StarRating rating={course.rating} />
          <p className="text-[16px] text-[#394A3F]">{course.rating}</p>
          <p className="text-[16px] text-[#394A3F]">
            (Review {course.reviews})
          </p>
        </div>
      </div>

      <button className="bg-[#E7E9E8] text-[#758179] border-[1px] border-[#758179]  w-full py-2 text-[18px] rounded-sm mt-2 cursor-pointer hover:bg-[#EAF7E6] hover:text-[#2DAD00] hover:border-[#2DAD00]">
        Start Now
      </button>
    </div>
  );
};
