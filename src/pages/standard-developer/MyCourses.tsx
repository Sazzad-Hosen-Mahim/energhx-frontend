import ProgressBar from "@/components/ui/ProgressBar";
import { courseList } from "./standardDeveloperData";
import StarRating from "@/components/ui/StarRating";
import StatusBadge from "@/components/ui/StatusBadge";
import { calculatePercentage } from "@/lib/utils";
const MyCourses = () => {
  return (
    <div>
      <p className="text-[18px] text-[#112518]">My Courses</p>
      <div className="mt-4"></div>
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

export default MyCourses;
