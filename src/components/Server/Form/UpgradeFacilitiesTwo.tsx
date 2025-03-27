import CommonWrapper from "@/common/CommonWrapper";
import { Button } from "@/components/ui/button";
import {
  upgradeFacilitesSchemaTwo,
  upgradeFacilitiesTwoType,
} from "@/pages/Server/ValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaAngleDoubleRight, FaAngleLeft } from "react-icons/fa";

interface upgradeFacilitiesProps {
  formData: any;
  updateFormData: (field: string, value: string | number | File) => void;
  nextStep: () => void;
  prevStep: () => void;
  handleSubmitParent: () => void;
}

const UpgradeFacilitiesTwo: React.FC<upgradeFacilitiesProps> = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
  handleSubmitParent,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(upgradeFacilitesSchemaTwo),
    defaultValues: { ...formData },
  });

  const onSubmit = (data: upgradeFacilitiesTwoType) => {
    Object.entries(data).forEach(([field, value]) => {
      updateFormData(field, value);
    });

    console.log("Form Data in UpgradeFacilitiesTwo (Before Timeout):", data);

    // Delay to ensure state is updated before logging and submission
    setTimeout(() => {
      console.log("Form Data in Parent (After Timeout):", formData); // Check if updated
      handleSubmitParent(); // Submit or log data after ensuring state is updated
      nextStep(); // Then move to the next step
    }, 200);
  };

  const handlePrevious = () => {
    prevStep();
  };
  return (
    <div>
      <CommonWrapper>
        <div>
          <h1 className="text-primary-green text-xl font-semibold mt-5">
            Upgrade Facilities
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex items-center gap-6 mt-12">
              <div className="flex flex-col">
                <label
                  htmlFor="upgradeFacilitiesFirstName"
                  className="text-primary-gray text-md font-light mb-3"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="upgradeFacilitiesFirstName"
                  {...register("upgradeFacilitiesFirstName")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.upgradeFacilitiesFirstName && (
                  <p className="text-red-500">
                    {errors?.upgradeFacilitiesFirstName?.message?.toString()}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="upgradeFacilitiesLastName"
                  className="text-primary-gray text-md font-light mb-3 opacity-70"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="upgradeFacilitiesLastName"
                  {...register("upgradeFacilitiesLastName")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.upgradeFacilitiesLastName && (
                  <p className="text-red-500">
                    {errors.upgradeFacilitiesLastName.message?.toString() ||
                      "Invalid input"}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-6 my-12">
              <div className="flex flex-col">
                <label
                  htmlFor="upgradeFacilitiesHomeTelTwo"
                  className="text-primary-gray text-md font-light mb-3"
                >
                  Home Tel
                </label>
                <input
                  type="text"
                  id="upgradeFacilitiesHomeTelTwo"
                  {...register("upgradeFacilitiesHomeTelTwo")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.upgradeFacilitiesHomeTelTwo && (
                  <p className="text-red-500">
                    {errors.upgradeFacilitiesHomeTelTwo.message?.toString()}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="upgradeFacilitiesAltTelTwo"
                  className="text-primary-gray text-md font-light mb-3"
                >
                  Alt Tel
                </label>
                <input
                  type="text"
                  id="upgradeFacilitiesAltTelTwo"
                  {...register("upgradeFacilitiesAltTelTwo")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.upgradeFacilitiesAltTelTwo && (
                  <p className="text-red-500">
                    {errors.upgradeFacilitiesAltTelTwo.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-6 mb-5">
              <div className="flex flex-col">
                <label
                  htmlFor="upgradeFacilitiesMailTwo"
                  className="text-primary-gray text-md font-light mb-3"
                >
                  Mail
                </label>
                <input
                  type="text"
                  id="upgradeFacilitiesMailTwo"
                  {...register("upgradeFacilitiesMailTwo")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.upgradeFacilitiesMailTwo && (
                  <p className="text-red-500">
                    {errors.upgradeFacilitiesMailTwo.message?.toString()}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="upgradeFacilitiesCompanyName"
                  className="text-primary-gray text-md font-light mb-3"
                >
                  Add your company name (Optional)
                </label>
                <input
                  type="text"
                  id="upgradeFacilitiesCompanyName"
                  {...register("upgradeFacilitiesCompanyName")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.upgradeFacilitiesCompanyName && (
                  <p className="text-red-500">
                    {errors.upgradeFacilitiesCompanyName.message?.toString()}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-5 mt-10">
              <Button
                variant="outline"
                className="bg-light-green border-primary-green text-primary-green py-5 rounded-md"
                onClick={handlePrevious}
              >
                <FaAngleLeft />
                Previous
              </Button>
              <Button
                type="submit"
                className="bg-primary-green text-white py-5 rounded-md"
              >
                Submit <FaAngleDoubleRight />
              </Button>
            </div>
          </form>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default UpgradeFacilitiesTwo;
