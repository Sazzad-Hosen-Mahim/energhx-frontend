import CommonWrapper from "@/common/CommonWrapper";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";
import { toast } from "react-toastify";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormData, sungUpSchema } from "@/pages/Server/ValidationSchema";

interface SungUpProps {
  formData: any;
  updateFormData: (field: string, value: string | number) => void;
  nextStep: () => void;
}

const SungUp: React.FC<SungUpProps> = ({
  formData,
  updateFormData,
  nextStep,
}) => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(sungUpSchema),
    defaultValues: { ...formData },
  });

  const onSubmit = (data: FormData) => {
    Object.entries(data).forEach(([field, value]) => {
      updateFormData(field, value);
    });
    nextStep();
    toast.success("Form Submitted successfully");
    console.log(data, "formdata in sungup");
  };

  return (
    <div>
      <CommonWrapper>
        <div className="mt-20">
          <h1 className="text-primary-green font-bold text-xl">Sung Up</h1>
          <p className="mt-5 text-primary-gray text-md font-semibold">
            Personal Information
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex gap-6 mt-5">
              <div className="flex-1">
                <label
                  htmlFor="firstName"
                  className="text-primary-gray text-md"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  {...register("firstName")}
                  className="mt-1 w-full p-2 border border-primary-gray"
                />
                {errors.firstName && (
                  <p className="text-red-500">{errors.firstName.message}</p>
                )}
              </div>
              <div className="flex-1">
                <label htmlFor="lastName" className="text-primary-gray text-md">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  {...register("lastName")}
                  className="mt-1 w-full p-2 border border-primary-gray"
                />
                {errors.lastName && (
                  <p className="text-red-500">{errors.lastName.message}</p>
                )}
              </div>
            </div>

            {/* Second Part */}
            <div className="grid grid-cols-3 gap-6 mt-6 items-center">
              <div className="">
                <label className="text-primary-gray">Sex</label>
                <div className="flex gap-4 mt-2">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="male"
                      {...register("sex")}
                      className="hidden peer"
                    />
                    <span className="w-5 h-5 inline-block border rounded-sm border-primary-gray bg-white peer-checked:bg-primary-green"></span>
                    <span className="ml-2 text-primary-gray">Male</span>
                  </label>
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="radio"
                      value="female"
                      {...register("sex")}
                      className="hidden peer"
                    />
                    <span className="w-5 h-5 inline-block border rounded-sm border-primary-gray bg-white peer-checked:bg-primary-green"></span>
                    <span className="ml-2 text-primary-gray">Female</span>
                  </label>
                </div>
                {errors.sex && (
                  <p className="text-red-500">{errors.sex.message}</p>
                )}
              </div>

              <div className="">
                <label htmlFor="mail" className="text-primary-gray text-md">
                  Mail
                </label>
                <input
                  type="text"
                  id="mail"
                  {...register("mail")}
                  className="mt-1 w-full p-2 border border-primary-gray"
                />
                {errors.mail && (
                  <p className="text-red-500">{errors.mail.message}</p>
                )}
              </div>
              <div className="">
                <label htmlFor="phone" className="text-primary-gray text-md">
                  Phone
                </label>
                <input
                  type="number"
                  id="phone"
                  {...register("phone")}
                  className="mt-1 w-full p-2 border border-primary-gray"
                />
                {errors.phone && (
                  <p className="text-red-500">{errors.phone.message}</p>
                )}
              </div>
              <p className="col-span-3 my-5 text-primary-gray font-semibold">
                Street Address
              </p>
              <div className="">
                <label htmlFor="number" className="text-primary-gray text-md">
                  Number
                </label>
                <input
                  type="number"
                  id="number"
                  {...register("number")}
                  className="mt-1 w-full p-2 border border-primary-gray"
                />
                {errors.number && (
                  <p className="text-red-500">{errors.number.message}</p>
                )}
              </div>
              <div className="">
                <label htmlFor="street" className="text-primary-gray text-md">
                  Street
                </label>
                <input
                  type="text"
                  id="street"
                  {...register("street")}
                  className="mt-1 w-full p-2 border border-primary-gray"
                />
                {errors.street && (
                  <p className="text-red-500">{errors.street.message}</p>
                )}
              </div>
              <div className="">
                <label htmlFor="city" className="text-primary-gray text-md">
                  City
                </label>
                <input
                  type="text"
                  id="city"
                  {...register("city")}
                  className="mt-1 w-full p-2 border border-primary-gray"
                />
                {errors.city && (
                  <p className="text-red-500">{errors.city.message}</p>
                )}
              </div>
              <div className="">
                <label
                  htmlFor="postalCode"
                  className="text-primary-gray text-md"
                >
                  Postal Code
                </label>
                <input
                  type="number"
                  id="postalCode"
                  {...register("postalCode")}
                  className="mt-1 w-full p-2 border border-primary-gray"
                />
                {errors.postalCode && (
                  <p className="text-red-500">{errors.postalCode.message}</p>
                )}
              </div>
              <div className="">
                <label htmlFor="province" className="text-primary-gray text-md">
                  Province
                </label>
                <input
                  type="text"
                  id="province"
                  {...register("province")}
                  className="mt-1 w-full p-2 border border-primary-gray"
                />
                {errors.province && (
                  <p className="text-red-500">{errors.province.message}</p>
                )}
              </div>
              <div className="">
                <label htmlFor="country" className="text-primary-gray text-md">
                  Country
                </label>
                <input
                  type="text"
                  id="country"
                  {...register("country")}
                  className="mt-1 w-full p-2 border border-primary-gray"
                />
                {errors.country && (
                  <p className="text-red-500">{errors.country.message}</p>
                )}
              </div>
              <p className="col-span-3 flex flex-col mt-5 text-primary-gray font-semibold">
                Internship Interest
                <span className="text-primary-gray font-extralight mt-2">
                  Internship Interest (must select at least one)
                </span>
              </p>
              <div className="col-span-2 w-full mb-[50px]">
                <Controller
                  name="interest"
                  control={control}
                  render={({ field }) => (
                    <Select {...field} onValueChange={field.onChange}>
                      <SelectTrigger className="w-[486px] rounded-none border-primary-gray">
                        <SelectValue placeholder="Choose" />
                      </SelectTrigger>
                      <SelectContent className="bg-light-green">
                        <SelectItem
                          value="light"
                          className="hover:bg-primary-green hover:text-white"
                        >
                          Light
                        </SelectItem>
                        <SelectItem
                          value="dark"
                          className="hover:bg-primary-green hover:text-white"
                        >
                          Dark
                        </SelectItem>
                        <SelectItem
                          value="system"
                          className="hover:bg-primary-green hover:text-white"
                        >
                          System
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.interest && (
                  <p className="text-red-500">{errors.interest.message}</p>
                )}
              </div>
            </div>
            <div className="flex items-center gap-5 mb-[200px]">
              <Button
                variant="outline"
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

export default SungUp;
