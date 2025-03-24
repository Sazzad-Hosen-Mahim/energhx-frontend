import { useState } from "react";
import CommonWrapper from "@/common/CommonWrapper";

// import StepTwo from "./StepTwo";
// import StepThree from "./StepThree";
import { Button } from "@/components/ui/button";
import { FaAngleLeft, FaAngleDoubleRight } from "react-icons/fa";
import SungUp from "./SungUp";
import WorkExperience from "./WorkExperience";
import WorkExperienceTwo from "./WorkExperienceTwo";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    sex: "",
    mail: "",
    phone: "",
    number: "",
    street: "",
    city: "",
    postalCode: "",
    province: "",
    country: "",
    interest: "",
    workEngagement: "",
    workEngagementTwo: "",
    workEngagementThree: "",
    passportPhotograph: "",
    countryOfResidence: "",
    addressOfWorkEngagement: "",
    jobStatus: "",
    startPeriod: "",
    stopPeriod: "",
    publisher: "",
    titleOfPublication: "",
    listOfAuthors: "",
    pages: "",
    yearOfPublication: "",
    personOrCompany: "",
    reference: "",
    homeTel: "",
    altTel: "",
    companyName: "",
    uploadDocone: "",
    uploadDocTwo: "",
    uploadDocThree: "",
  });

  const nextStep = () => {
    setStep((prev) => prev + 1);
  };
  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  const updateFormData = (field: string, value: string | number | File) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Form Data Submitted:", formData);
    // Here you can send the formData to the backend
  };
  // console.log(formData, "formdata in multistepform");

  return (
    <CommonWrapper>
      <div className="mt-20">
        <h1 className="text-primary-green font-bold text-xl">Sign Up</h1>

        {step === 1 && (
          <SungUp
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <WorkExperience
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <WorkExperienceTwo
            formData={formData}
            updateFormData={updateFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}

        <div className="flex items-center gap-5 mt-10">
          {step < 4 ? (
            ""
          ) : (
            <Button
              className="bg-primary-green text-white"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
        </div>
      </div>
    </CommonWrapper>
  );
};

export default MultiStepForm;
