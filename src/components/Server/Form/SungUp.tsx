import CommonWrapper from "@/common/CommonWrapper";

const SungUp: React.FC = () => {
  return (
    <div>
      <CommonWrapper>
        <div className="mt-20">
          <h1 className="text-primary-green font-bold text-xl">Sung Up</h1>
          <p className="mt-5 text-primary-gray text-md font-semibold">
            Personal Information
          </p>
          <div className="flex gap-6 mt-5">
            <div className="flex-1">
              <label htmlFor="first-name" className="text-primary-gray text-md">
                First Name
              </label>
              <input
                type="text"
                id="first-name"
                className="mt-1 w-full p-2 border border-primary-gray"
              />
            </div>
            <div className="flex-1">
              <label htmlFor="last-name" className="text-primary-gray text-md">
                Last Name
              </label>
              <input
                type="text"
                id="last-name"
                className="mt-1 w-full p-2 border border-primary-gray"
              />
            </div>
          </div>

          {/* Second Part */}
          <div className="flex gap-6 mt-6 items-center">
            <div className="w-full">
              <label className="text-primary-gray">Sex</label>
              <div className="flex gap-4 mt-2">
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="sex"
                    value="male"
                    className="hidden peer"
                  />
                  <span className="w-5 h-5 inline-block border rounded-sm border-primary-gray bg-white peer-checked:bg-primary-green"></span>
                  <span className="ml-2 text-primary-gray">Male</span>
                </label>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="radio"
                    name="sex"
                    value="female"
                    className="hidden peer"
                  />
                  <span className="w-5 h-5 inline-block border rounded-sm border-primary-gray bg-white peer-checked:bg-primary-green"></span>
                  <span className="ml-2 text-primary-gray">Female</span>
                </label>
              </div>
            </div>

            <div className="w-full">
              <label htmlFor="address" className="text-primary-gray text-md">
                Mail
              </label>
              <input
                type="text"
                id="address"
                className="mt-1 w-full p-2 border border-primary-gray"
              />
            </div>
            <div className="w-full">
              <label htmlFor="city" className="text-primary-gray text-md">
                Phone
              </label>
              <input
                type="number"
                id="city"
                className="mt-1 w-full p-2 border border-primary-gray"
              />
            </div>
          </div>
        </div>
      </CommonWrapper>
    </div>
  );
};

export default SungUp;
