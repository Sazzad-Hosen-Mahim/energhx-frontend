import Breadcrumbs from "@/common/Breadcrumbs";
import thanks from "../../../assets/Profile/thank.png";
import { Link } from "react-router-dom";

const ThanksForm = () => {
  return (
    <div>
      <div className="py-8">
        <Breadcrumbs />
      </div>
      <div className="flex flex-col items-center w-full gap-4">
        <h1 className=" uppercase text-3xl text-primary font-secondary font-extrabold    tracking-widest">
          Thank You
        </h1>
        <img src={thanks} alt="thanks" />
        <Link
          to="/basic/dashboard"
          className=" bg-primary text-white rounded-xl px-6 py-4 mt-10 cursor-pointer"
        >
          Save Profile
        </Link>
      </div>
    </div>
  );
};

export default ThanksForm;
