import CommonWrapper from "@/common/CommonWrapper";
import DashBoardHeader from "@/common/DashBoardHeader";
import ContinueButton from "@/common/ContinueButton";

interface SignUp {
  nextStep: () => void;
  prevStep: () => void;
}

const SignUp: React.FC<SignUp> = ({ nextStep, prevStep }) => {
  return (
    <CommonWrapper>
      <div className="pt-8">
        <DashBoardHeader>Personal Infomation</DashBoardHeader>
        <p className="mt-5 text-primary-gray text-md font-semibold">
          Personal Information
        </p>
        <form>
          <div className="flex gap-6 mt-5">
            <div className="flex-1">
              <label htmlFor="firstName" className="text-primary-gray text-md">
                First Name
              </label>
              <input
                type="text"
                id="firstName"
                placeholder="First Name"
                className="mt-1 w-full p-2 border border-primary-gray"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="lastName" className="text-primary-gray text-md">
                Last Name
              </label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter Last Name"
                className="mt-1 w-full p-2 border border-primary-gray"
              />
            </div>
          </div>

          {/* Second Part */}
          <div className="grid grid-cols-3 gap-6 mt-6 items-center">
            <div className="">
              <label className="text-primary-gray">Sex</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center cursor-pointer">
                  <input type="radio" value="male" className="hidden peer" />
                  <span className="w-5 h-5 inline-block border rounded-sm border-primary-gray bg-white peer-checked:bg-primary-green"></span>
                  <span className="ml-2 text-primary-gray">Male</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input type="radio" value="female" className="hidden peer" />
                  <span className="w-5 h-5 inline-block border rounded-sm border-primary-gray bg-white peer-checked:bg-primary-green"></span>
                  <span className="ml-2 text-primary-gray">Female</span>
                </label>
              </div>
            </div>

            <div className="">
              <label htmlFor="mail" className="text-primary-gray text-md">
                Mail
              </label>
              <input
                type="text"
                id="mail"
                placeholder="Enter Email"
                className="mt-1 w-full p-2 border border-primary-gray"
              />
            </div>
            <div className="">
              <label htmlFor="phone" className="text-primary-gray text-md">
                Phone
              </label>
              <input
                type="number"
                id="phone"
                placeholder="Enter Phone"
                className="mt-1 w-full p-2 border border-primary-gray"
              />
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
                placeholder="Enter Number"
                className="mt-1 w-full p-2 border border-primary-gray"
              />
            </div>
            <div className="">
              <label htmlFor="street" className="text-primary-gray text-md">
                Street
              </label>
              <input
                type="text"
                id="street"
                placeholder="Enter Street"
                className="mt-1 w-full p-2 border border-primary-gray"
              />
            </div>
            <div className="">
              <label htmlFor="city" className="text-primary-gray text-md">
                City
              </label>
              <input
                type="text"
                placeholder="Enter City"
                id="city"
                className="mt-1 w-full p-2 border border-primary-gray"
              />
            </div>
            <div className="">
              <label htmlFor="postalCode" className="text-primary-gray text-md">
                Postal Code
              </label>
              <input
                type="number"
                id="postalCode"
                placeholder="Enter Postal Code"
                className="mt-1 w-full p-2 border border-primary-gray"
              />
            </div>
            <div className="">
              <label htmlFor="province" className="text-primary-gray text-md">
                Province
              </label>
              <input
                type="text"
                id="province"
                placeholder="Enter Province "
                className="mt-1 w-full p-2 border border-primary-gray"
              />
            </div>
            <div className="">
              <label htmlFor="country" className="text-primary-gray text-md">
                Country
              </label>
              <input
                type="text"
                id="country"
                placeholder="Enter country"
                className="mt-1 w-full p-2 border border-primary-gray"
              />
            </div>
            <div className="">
              <label htmlFor="number" className="text-primary-gray text-md">
                Number of occupants
              </label>
              <input
                type="text"
                id="number"
                placeholder="Enter Number"
                className="mt-1 w-full p-2 border border-primary-gray"
              />
            </div>
          </div>

          <ContinueButton
            nextStep={nextStep}
            prevStep={prevStep}
            className="py-20"
          />
        </form>
      </div>
    </CommonWrapper>
  );
};

export default SignUp;
