import CommonWrapper from "@/common/CommonWrapper";
import {
  verifySubmitSchema,
  verifySubmitType,
} from "@/pages/Server/ValidationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { Root, Indicator } from "@radix-ui/react-checkbox";
import LightBulb from "@/assets/Vector.svg";
import { Button } from "@/components/ui/button";
import { FaAngleDoubleRight, FaAngleLeft } from "react-icons/fa";

interface verifyAndSubmitProps {
  formData: any;
  updateFormData: (field: string, value: string | number | File) => void;
  nextStep: () => void;
  prevStep: () => void;
}
const VerifyAndSubmit: React.FC<verifyAndSubmitProps> = ({
  formData,
  updateFormData,
  nextStep,
  prevStep,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<verifySubmitType>({
    resolver: zodResolver(verifySubmitSchema),
    defaultValues: { ...formData },
  });

  const onSubmit = (data: verifySubmitType) => {
    Object.entries(data).forEach(([field, value]) => {
      updateFormData(field, value);
    });
    nextStep();
    toast.success("Form Submitted successfully");
    console.log(data, "data in work experience two");
  };

  const handlePrevious = () => {
    prevStep();
  };
  return (
    <div>
      <CommonWrapper>
        <div>
          <h1 className="text-primary-green text-xl font-semibold mt-5">
            Verify and Submit
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <p className="mt-5 text-primary-gray">
              Confirm the information provided
            </p>
            <div className="flex items-center gap-6 mt-12">
              <div className="flex flex-col">
                <label
                  htmlFor="verifyFirstName"
                  className="text-primary-gray text-md font-light mb-3"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="verifyFirstName"
                  {...register("verifyFirstName")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.verifyFirstName && (
                  <p className="text-red-500">
                    {errors.verifyFirstName.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="verifyLastName"
                  className="text-primary-gray text-md font-light mb-3 opacity-70"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="verifyLastName"
                  {...register("verifyLastName")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.verifyLastName && (
                  <p className="text-red-500">
                    {errors.verifyLastName.message}
                  </p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-6 my-12">
              <div className="flex flex-col">
                <label
                  htmlFor="verifyFirstName"
                  className="text-primary-gray text-md font-light mb-3"
                >
                  Home Tel
                </label>
                <input
                  type="text"
                  id="homeTel"
                  {...register("homeTel")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.homeTel && (
                  <p className="text-red-500">{errors.homeTel.message}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="altTel"
                  className="text-primary-gray text-md font-light mb-3"
                >
                  Alt Tel
                </label>
                <input
                  type="text"
                  id="altTel"
                  {...register("altTel")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.altTel && (
                  <p className="text-red-500">{errors.altTel.message}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-6 mb-5">
              <div className="flex flex-col">
                <label
                  htmlFor="verifyMail"
                  className="text-primary-gray text-md font-light mb-3"
                >
                  Mail
                </label>
                <input
                  type="text"
                  id="verifyMail"
                  {...register("verifyMail")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.verifyMail && (
                  <p className="text-red-500">{errors.verifyMail.message}</p>
                )}
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="companyName"
                  className="text-primary-gray text-md font-light mb-3"
                >
                  Add your company name (Optional)
                </label>
                <input
                  type="text"
                  id="companyName"
                  {...register("companyName")}
                  className="w-[486px] p-2 border border-primary-gray"
                />
                {errors.companyName && (
                  <p className="text-red-500">{errors.companyName.message}</p>
                )}
              </div>
            </div>
            {/* condition section  */}
            <div className="flex flex-col gap-6">
              <div className="flex items-center space-x-2">
                <Root
                  id="terms"
                  className="peer h-5 w-5 rounded-sm border border-primary-gray bg-transparent 
               data-[state=checked]:bg-primary-green 
               data-[state=checked]:border-primary-green 
               focus:ring-0 focus:outline-none"
                >
                  <Indicator className="hidden" />
                </Root>

                <label
                  htmlFor="terms"
                  className="text-sm font-medium text-primary-gray leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 opacity-70"
                >
                  I agree to the Non-Disclosure Agreement (NDA).{" "}
                  <span className="text-primary-green font-semibold">
                    See link
                  </span>
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <Root
                  id="terms"
                  className="peer h-5 w-5 rounded-sm border border-primary-gray bg-transparent 
               data-[state=checked]:bg-primary-green 
               data-[state=checked]:border-primary-green 
               focus:ring-0 focus:outline-none"
                >
                  <Indicator className="hidden" />
                </Root>

                <label
                  htmlFor="terms"
                  className="text-sm font-medium text-primary-gray leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 opacity-70"
                >
                  I agree to the Research Ethics Policy documents.{" "}
                  <span className="text-primary-green font-semibold">
                    See link
                  </span>
                </label>
              </div>
              <div className="flex gap-5">
                <img src={LightBulb} alt="light bulb" className="w-5 h-5" />
                <p className="text-sm font-medium text-primary-gray  leading-5 peer-disabled:cursor-not-allowed peer-disabled:opacity-70 opacity-70">
                  By clicking the "Submit" button, you will be electronically
                  signing this Application effective Monday March, 07, 2022. If
                  Energhx approves your Application, the Agreement between the
                  parties will take effect as of that date.
                </p>
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
                Continue <FaAngleDoubleRight />
              </Button>
            </div>
          </form>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default VerifyAndSubmit;
