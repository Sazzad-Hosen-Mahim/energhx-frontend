import { useDispatch, useSelector } from "react-redux";
import CommonWrapper from "../common/CommonWrapper";
import type { RootState, AppDispatch } from "../store/store";
import home1 from "@/assets/home1.png";
import home2 from "@/assets/home2.png";
import home3 from "@/assets/home3.png";
import { motion } from "framer-motion";
import twing from "@/assets/twing.png";
import { useState } from "react";
import MultiStepForm from "@/components/Server/Form/MultiStepForm";
import Signup from "./Signup";
import WorkExperience from "@/components/Server/Form/WorkExperience";
import WorkExperienceTwo from "@/components/Server/Form/WorkExperienceTwo";

const Home = () => {
  const [main, setMain] = useState(true);
  const [form, setForm] = useState(" ");

  const handleMultiform = (item: string) => {
    setForm(item);
    setMain(false);
  };
  return (
    <CommonWrapper>
      {/* Personal Information Section */}

      {main && (
        <section className="p-6">
          <h2 className="text-[#2DAD00] font-bold text-lg mb-8 uppercase">
            Personal Information
          </h2>
          <div className="flex gap-6">
            {/* Energy Intern */}
            <motion.div
              onClick={() => {
                handleMultiform("person");
              }}
              className="p-6 border border-green-300 bg-[#EAF7E6] rounded-lg text-center w-[250px] h-[250px] flex flex-col justify-center items-center cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: "#C3E6C0" }}
            >
              <div className="bg-[#BEE6B0] p-3 rounded-lg flex justify-center items-center w-[72px] h-[72px]">
                <img
                  src={home1}
                  alt="Energy Intern"
                  className="w-[48px] h-[48px]"
                />
              </div>
              <p className="text-[#2DAD00] font-medium mt-2">Energy intern</p>
            </motion.div>

            {/* Energy User */}
            <motion.div
              className="p-6 border border-green-300 bg-[#EAF7E6] rounded-lg text-center w-[250px] h-[250px] flex flex-col justify-center items-center cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: "#C3E6C0" }}
            >
              <div className="bg-[#BEE6B0] p-3 rounded-lg flex justify-center items-center w-[72px] h-[72px]">
                <img
                  src={home2}
                  alt="Energy User"
                  className="w-[48px] h-[48px]"
                />
              </div>
              <p className="text-[#2DAD00] font-medium mt-2">Energy user</p>
            </motion.div>

            {/* Energy Installer */}
            <motion.div
              className="p-6 border border-green-300 bg-[#EAF7E6] rounded-lg text-center w-[250px] h-[250px] flex flex-col justify-center items-center cursor-pointer"
              whileHover={{ scale: 1.1, backgroundColor: "#C3E6C0" }}
            >
              <div className="bg-[#BEE6B0] p-3 rounded-lg flex justify-center items-center w-[72px] h-[72px]">
                <img
                  src={home3}
                  alt="Energy Installer"
                  className="w-[48px] h-[48px]"
                />
              </div>
              <p className="text-[#2DAD00] font-medium mt-2">
                Energy installer
              </p>
            </motion.div>
          </div>
        </section>
      )}

      {/* Sign Up Eligibility Section */}
      {main && (
        <section className="p-6 mt-8">
          <h2 className="text-[#2DAD00] font-bold text-lg mb-8 uppercase">
            Sign Up Eligibility
          </h2>
          <ul className="text-gray-700 space-y-2">
            <li className="flex items-start">
              <span className="text-green-500 mr-2">
                <img src={twing} />
              </span>
              Not having an existing contract from any other retailer and/or
              energy marketer for this property.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">
                <img src={twing} />
              </span>
              You do have an existing contract with another retailer and/or
              energy marketer and request Energhx to consider your application
              for Demand Side Monitoring Plan.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">
                <img src={twing} />
              </span>
              Your plan with another retailer and/or energy marketer has
              recently expired.
            </li>
            <li className="flex items-start">
              <span className="text-green-500 mr-2">
                <img src={twing} />
              </span>
              You have previously cancelled your contract with Energhx.
            </li>
          </ul>
        </section>
      )}

      {form === "person" && <MultiStepForm handleMultiform={handleMultiform} />}
      {form === "signup" && <Signup />}
      {form === "experience" && <WorkExperience />}
      {form === "experienceTwo" && <WorkExperienceTwo />}
    </CommonWrapper>
  );
};

export default Home;
