import { useState } from "react";
import { courseFilterArray, courseList } from "./serverInternData";
import StarRating from "@/components/ui/StarRating";
import StatusBadge from "@/components/ui/StatusBadge";
import ProgressBar from "@/components/ui/ProgressBar";
import { calculatePercentage } from "@/lib/utils";

const ServerInternDasboard = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>("enrolled");
  return (
    <div>
      <p className="text-[18px] text-[#112518]">Overview</p>
      {/* filter section======= */}
      <div className="w-full flex flex-col justify-center md:justify-start md:flex-row gap-6 my-6">
        {courseFilterArray.map((item) => {
          const IconElement = item.icon;
          return (
            <div
              className={`max-w-[282px] w-full p-6 rounded-3xl border-[#9ED98A] cursor-pointer ${
                item.value === selectedFilter
                  ? "bg-[#2DAD00]"
                  : "bg-light-green border"
              } `}
              onClick={() => setSelectedFilter(item.value)}
              key={item.id}
            >
              <div className="flex justify-center mb-3">
                <span
                  className={`text-6xl ${
                    item.value === selectedFilter
                      ? "text-white"
                      : "text-[#2DAD00]"
                  } `}
                >
                  <IconElement />
                </span>
              </div>
              <div className="text-center">
                <p
                  className={`${
                    item.value === selectedFilter
                      ? "text-[#FFFFFF]"
                      : "text-[#1C9237]"
                  } text-2xl font-extrabold font-akira`}
                >
                  {item.number}
                </p>
                <p
                  className={`text-[18px] ${
                    item.value === selectedFilter
                      ? "text-[#FFFFFF]"
                      : "text-[#394A3F]"
                  }`}
                >
                  {item.label}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* course list section======= */}
      <div className="flex flex-col gap-10">
        {courseList.map((course) => {
          const progressPercent = calculatePercentage(
            course.completedLesson,
            course.totalLesson
          );
          return (
            <div
              key={course.id}
              className={`max-w-[894px] w-full flex flex-col justify-center md:flex-row gap-6 shadow-[0px_0px_15px_0px_rgba(0,0,0,0.04)] border-[1px] border-[#E7E9E8] rounded-[8px] `}
            >
              <div className="flex justify-center">
                <img
                  src={course.image}
                  alt=""
                  className="rounded-lg max-w-[282px] w-full h-auto "
                />
              </div>
              <div className="p-2 w-full flex flex-col gap-2 md:pr-6">
                <div className="flex justify-between items-center mt-2">
                  <StarRating rating={course.rating} />
                  <StatusBadge status={course.status} />
                </div>
                <p className="text-[18px] text-[#394A3F]">{course.title}</p>
                <p>
                  <span className="text-[#758179] text-[14px]">
                    Completed lesson:
                  </span>
                  <span className="text-[#394A3F] text-[14px] ml-1">
                    {course.completedLesson} of {course.totalLesson} lessons
                  </span>
                </p>
                <div className="flex items-center gap-5">
                  <ProgressBar percent={progressPercent} />
                  {progressPercent < 100 ? (
                    <p className="text-[#758179] text-[12px]">
                      {progressPercent}% completed
                    </p>
                  ) : (
                    <button className="text-[#394A3F] text-[12px] border-b cursor-pointer">
                      Get Certificate
                    </button>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ServerInternDasboard;
