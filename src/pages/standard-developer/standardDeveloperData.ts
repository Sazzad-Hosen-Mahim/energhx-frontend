import { FaGraduationCap } from "react-icons/fa6";
import { FaBookOpen } from "react-icons/fa";
import { FaMedal } from "react-icons/fa";

import { generateRandomId } from "@/lib/utils";
// import graudationCap from "/public/server-intern-assets/bachelor-cap.svg";
// import bookIcon from "/public/server-intern-assets/book-open.svg";
// import medalIcon from "/public/server-intern-assets/gold-medal.svg";

import courseImage from "/public/server-intern-assets/course1.jpg";

export const courseFilterArray = [
  {
    id: generateRandomId(),
    icon: FaGraduationCap,
    // icon: graudationCap,
    label: "Enrolled Courses",
    number: "02",
    value: "enrolled",
  },
  {
    id: generateRandomId(),
    icon: FaBookOpen,
    // icon: bookIcon,
    label: "Active Courses",
    number: "01",
    value: "active",
  },
  {
    id: generateRandomId(),
    icon: FaMedal,
    // icon: medalIcon,
    label: "Completed Courses",
    number: "01",
    value: "completed",
  },
];

export const courseList = [
  {
    id: generateRandomId(),
    image: courseImage,
    rating: 4,
    review: 22,
    title: "Introduction to Energhx",
    totalLesson: 40,
    completedLesson: 3,
    status: "active",
  },
  {
    id: generateRandomId(),
    image: courseImage,
    rating: 3.5,
    review: 25,
    title: "Introduction to React",
    totalLesson: 35,
    completedLesson: 15,
    status: "enrolled",
  },
  {
    id: generateRandomId(),
    image: courseImage,
    rating: 3,
    review: 36,
    title: "Introduction to Node JS",
    label: "Completed Courses",
    totalLesson: 14,
    completedLesson: 14,
    status: "completed",
  },
];

export const singleCourse = [
  {
    id: 1,
    title: "Energhx Fan Fixing Course",
    description:
      "Upon successful completion of the course, you will be awarded this certificate.",
    totalModules: "08",
    moduleNo: 1,
    totalClass: 24,
    completedClass: 10,
    assignment: 14,
    completedAssignment: 7,
    rating: 4.0,
    reviews: 22,
    image: "/src/assets/courses/fan.png",
  },
  {
    id: 2,
    title: "Energhx Fan Fixing Course",
    description:
      "Upon successful completion of the course, you will be awarded this certificate.",
    totalModules: "05",
    moduleNo: 2,
    totalClass: 24,
    completedClass: 12,
    assignment: 14,
    completedAssignment: 9,
    rating: 5.0,
    reviews: 10,
    image: "/src/assets/courses/fan1.png",
  },
  {
    id: 3,
    title: "Energhx Fan Fixing Course",
    description:
      "Upon successful completion of the course, you will be awarded this certificate.",
    totalModules: "06",
    moduleNo: 3,
    totalClass: 24,
    completedClass: 14,
    assignment: 14,
    completedAssignment: 10,
    rating: 3.5,
    reviews: 11,
    image: "/src/assets/courses/fan2.png",
  },
  {
    id: 4,
    title: "Energhx Fan Fixing Course",
    description:
      "Upon successful completion of the course, you will be awarded this certificate.",
    totalModules: "06",
    moduleNo: 4,
    totalClass: 24,
    completedClass: 15,
    assignment: 14,
    completedAssignment: 11,
    rating: 3.5,
    reviews: 20,
    image: "/src/assets/courses/fan3.png",
  },
  {
    id: 5,
    title: "Energhx Fan Fixing Course",
    description:
      "Upon successful completion of the course, you will be awarded this certificate.",
    totalModules: "06",
    moduleNo: 5,
    totalClass: 24,
    completedClass: 18,
    assignment: 14,
    completedAssignment: 12,
    rating: 4.0,
    reviews: 22,
    image: "/src/assets/courses/fan4.png",
  },
  {
    id: 6,
    title: "Energhx Fan Fixing Course",
    description:
      "Upon successful completion of the course, you will be awarded this certificate.",
    totalModules: "06",
    moduleNo: 6,
    totalClass: 24,
    completedClass: 20,
    assignment: 14,
    completedAssignment: 13,
    rating: 4.0,
    reviews: 15,
    image: "/src/assets/courses/fan5.png",
  },
];
