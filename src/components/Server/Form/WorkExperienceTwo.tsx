import CommonWrapper from "@/common/CommonWrapper";
import { Button } from "@/components/ui/button";
import {
  workExperienceTwoSchema,
  workExperienceTwoType,
} from "@/pages/Server/ValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { CiSquarePlus } from "react-icons/ci";
import { FaAngleDoubleRight, FaAngleLeft } from "react-icons/fa";
import { MdOutlineFileUpload } from "react-icons/md";
import { toast } from "react-toastify";

interface WorkExperienceTwoProps {
  formData: any;
  updateFormData: (field: string, value: string | number | File) => void;
  nextStep: () => void;
  prevStep: () => void;
}

const WorkExperienceTwo: React.FC<WorkExperienceTwoProps> = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<workExperienceTwoType>({
    resolver: zodResolver(workExperienceTwoSchema),
    defaultValues: { ...formData },
  });

  const onSubmit = (data: workExperienceTwoType) => {
    console.log(data, "data in work experience two");

    Object.entries(data).forEach(([field, value]) => {
      updateFormData(field, value);
    });
    nextStep();
    toast.success("Form Submitted successfully");
  };

  const handlePrevious = () => {
    prevStep();
  };

  const validateFileType = (file: File, allowedTypes: string[]) => {
    return allowedTypes.includes(file.type);
  };
  return (
    <div>
      <CommonWrapper>
        <div>
          <h1 className="text-primary-green text-xl font-semibold mt-5">
            Work Experience
          </h1>

          <p className="mt-5 text-primary-gray">
            Provide the needed qualifications and details needed.
          </p>
          <p className="mt-5 text-primary-gray">work details</p>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center gap-6 mt-3 mb-3">
              <div className="flex flex-col">
                <label
                  htmlFor="workEngagementThree"
                  className="text-primary-gray text-md mb-3"
                >
                  Name of work engagement
                </label>
                <input
                  type="text"
                  id="workEngagementThree"
                  {...register("workEngagementThree")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.workEngagementThree && (
                  <p className="text-red-500">
                    {errors.workEngagementThree.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="addressOfWorkEngagement"
                  className="text-primary-gray text-md mb-3"
                >
                  Address of work engagement
                </label>
                <input
                  type="text"
                  id="addressOfWorkEngagement"
                  {...register("addressOfWorkEngagement")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.addressOfWorkEngagement && (
                  <p className="text-red-500">
                    {errors.addressOfWorkEngagement.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="jobStatus"
                  className="text-primary-gray text-md mb-3"
                >
                  Title or job status
                </label>
                <input
                  type="text"
                  id="jobStatus"
                  {...register("jobStatus")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.jobStatus && (
                  <p className="text-red-500">{errors.jobStatus.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="startPeriod"
                  className="text-primary-gray text-md mb-3"
                >
                  Period
                </label>
                <input
                  type="text"
                  id="startPeriod"
                  placeholder="Start Date"
                  {...register("startPeriod")}
                  className="w-[238px] p-2 border border-primary-gray"
                />
                {errors.startPeriod && (
                  <p className="text-red-500">{errors.startPeriod.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="stopPeriod"
                  className="text-primary-gray text-md mb-3"
                >
                  Period
                </label>
                <input
                  type="text"
                  id="stopPeriod"
                  placeholder="End Date"
                  {...register("stopPeriod")}
                  className="w-[238px] p-2 border border-primary-gray"
                />
                {errors.stopPeriod && (
                  <p className="text-red-500">{errors.stopPeriod.message}</p>
                )}
              </div>
            </div>
            <Button
              className=" bg-primary-green text-white my-5 h-[48px]"
              type="button"
            >
              <span>
                <CiSquarePlus />
              </span>
              Add Experience
            </Button>
            <p className="my-12 text-primary-gray text-sm font-semibold">
              Publications & References
            </p>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="publisher"
                  className="text-primary-gray text-md mb-3"
                >
                  Publisher
                </label>
                <input
                  type="text"
                  id="publisher"
                  placeholder="End Date"
                  {...register("publisher")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.publisher && (
                  <p className="text-red-500">{errors.publisher.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="titleOfPublication"
                  className="text-primary-gray text-md mb-3"
                >
                  Title of publication
                </label>
                <input
                  type="text"
                  id="titleOfPublication"
                  {...register("titleOfPublication")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.titleOfPublication && (
                  <p className="text-red-500">
                    {errors.titleOfPublication.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="listOfAuthors"
                className="text-primary-gray text-md mb-3"
              >
                List of authors
              </label>
              <input
                type="text"
                id="listOfAuthors"
                {...register("listOfAuthors")}
                className="w-full h-[140px] p-2 border border-primary-gray"
              />
              {errors.listOfAuthors && (
                <p className="text-red-500">{errors.listOfAuthors.message}</p>
              )}
            </div>
            <div className="flex items-center gap-6">
              <div className="flex flex-col">
                <label
                  htmlFor="pages"
                  className="text-primary-gray text-md mb-3"
                >
                  Pages
                </label>
                <input
                  type="text"
                  id="pages"
                  {...register("pages")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.pages && (
                  <p className="text-red-500">{errors.pages.message}</p>
                )}
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="yearOfPublication"
                  className="text-primary-gray text-md mb-3"
                >
                  Year of Publication
                </label>
                <input
                  type="number"
                  id="yearOfPublication"
                  {...register("yearOfPublication")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.yearOfPublication && (
                  <p className="text-red-500">
                    {errors.yearOfPublication.message}
                  </p>
                )}
              </div>
            </div>
            <Button
              className=" bg-primary-green text-white my-5 h-[48px]"
              type="button"
            >
              <span>
                <CiSquarePlus />
              </span>
              Add Experience
            </Button>

            <p className="text-primary-gray text-xm  my-10">
              References & Job recommendation
            </p>
            <div className="flex flex-col">
              <label
                htmlFor="nameOfPersonOrCompany"
                className="text-primary-gray text-md mb-3"
              >
                Name of person of company
              </label>
              <input
                type="text"
                id="nameOfPersonOrCompany"
                placeholder="Type here"
                {...register("nameOfPersonOrCompany")}
                className="w-[486px] p-2 border border-primary-gray"
              />
              {errors.nameOfPersonOrCompany && (
                <p className="text-red-500">
                  {errors.nameOfPersonOrCompany.message}
                </p>
              )}
            </div>
            <p className="text-primary-gray text-xm  my-10">
              Reference/ recommendation letter, if applicable
            </p>

            <div className="my-5">
              <label
                htmlFor="recommendationLetter"
                className="flex items-center justify-center gap-2 w-[236px] p-2 bg-light-green text-primary-green border border-primary-green rounded cursor-pointer hover:bg-gray-100"
              >
                <MdOutlineFileUpload className="text-primary-green text-2xl" />
                <span>Upload Documents</span>
              </label>

              <input
                type="file"
                id="recommendationLetter"
                {...register("recommendationLetter")}
                onChange={(e) => {
                  const file = e.target.files?.[0];
                  if (file) {
                    if (validateFileType(file, ["application/pdf"])) {
                      setValue("recommendationLetter", file);
                    } else {
                      toast.error("Only PDF files are allowed for Document 1");
                    }
                  }
                }}
                className="hidden"
              />

              {errors.recommendationLetter && (
                <p className="text-red-500">
                  {errors.recommendationLetter.message}
                </p>
              )}
            </div>

            <Button
              className=" bg-primary-green text-white my-5 w-[204px] h-[48px]"
              type="button"
            >
              <span>
                <CiSquarePlus />
              </span>
              Add Experience
            </Button>
            <div className="flex items-center gap-5 mb-[200px]">
              <Button
                variant="outline"
                onClick={handlePrevious}
                className="bg-light-green border-primary-green text-primary-green py-5 rounded-md"
              >
                <FaAngleLeft />
                Previous
              </Button>
              <Button
                type="submit"
                className="bg-primary-green text-white py-5 rounded-md"
              >
                Continue <FaAngleDoubleRight />
              </Button>
            </div>
          </form>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default WorkExperienceTwo;
