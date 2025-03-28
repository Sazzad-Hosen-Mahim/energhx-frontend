import CourseCard from "@/components/All-Course/CourseCard";
import React, { useEffect, useState } from "react";

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
}

const AllCourses: React.FC = () => {
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    fetch("/src/components/All-Course/courses.json")
      .then((response) => response.json())
      .then((data: Course[]) => setCourses(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl  mb-6">All Courses</h1>
      <div className="flex gap-8 flex-wrap">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
};

export default AllCourses;
