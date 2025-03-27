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
