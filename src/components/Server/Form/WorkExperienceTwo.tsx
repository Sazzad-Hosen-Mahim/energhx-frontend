import CommonWrapper from "@/common/CommonWrapper";
import { Button } from "@/components/ui/button";
import {
  workExperienceTwoSchema,
  workExperienceTwoType,
} from "@/pages/Server/ValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<workExperienceTwoType>({
    resolver: zodResolver(workExperienceTwoSchema),
    defaultValues: formData,
  });

  const onSubmit = (data: workExperienceTwoType) => {
    Object.entries(data).forEach(([field, value]) => {
      updateFormData(field, value);
    });
    nextStep();
    toast.success("Form Submittes successfully");
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
            <div className="flex items-center gap-12 mt-3 mb-3">
              <div className="flex flex-col">
                <label
                  htmlFor="workEngagement"
                  className="text-primary-gray text-md mb-3"
                >
                  Name of work engagement
                </label>
                <input
                  type="text"
                  id="workEngagement"
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
            <div className="flex items-center gap-12">
              <div className="flex flex-col">
                <label
                  htmlFor="addressOfWorkEngagement"
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
                  htmlFor="addressOfWorkEngagement"
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
                  htmlFor="addressOfWorkEngagement"
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
            <Button className="bg-primary-green text-white mt-5 w-[204px] h-[48px]">
              Add Experience
            </Button>
            <p className="my-12 text-primary-gray text-sm font-semibold">
              Publications & References
            </p>
          </form>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default WorkExperienceTwo;
