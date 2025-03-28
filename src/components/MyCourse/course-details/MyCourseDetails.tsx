import {
  singleCourseModuleList,
  singleCourseClassList,
  singleCourseAssignmentList,
} from "../../../pages/standard-developer/standardDeveloperData";
import { FaLongArrowAltRight } from "react-icons/fa";
import MyModule from "../module/MyModue";
import { generateRandomId } from "@/lib/utils";
import { useState } from "react";
import MyClassDetails from "../class/MyClass";
import MyAssignment from "../assignment/MyAssignment";
import MyCertificate from "../certificate/MyCertificate";

const MyCourseDetails = () => {
  const [selectedFilter, setSelectedFilter] = useState("module");

  const filterArray = [
    { id: generateRandomId, label: "Module", value: "module" },
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
      <div className="flex flex-col md:flex-row gap-4 my-2">
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

      {selectedFilter === "module" && (
        <MyModule moduleList={singleCourseModuleList} />
      )}
      {selectedFilter === "class" && (
        <MyClassDetails classList={singleCourseClassList} />
      )}
      {selectedFilter === "assignment" && (
        <MyAssignment assignmentList={singleCourseAssignmentList} />
      )}
      {selectedFilter === "certificate" && <MyCertificate />}
    </div>
  );
};
export default MyCourseDetails;
