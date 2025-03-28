import Breadcrumbs from "@/common/Breadcrumbs";
import ContinueButton from "@/common/ContinueButton";
import DashBoardHeader from "@/common/DashBoardHeader";
interface Commodity {
  nextStep: () => void;
  prevStep: () => void;
}

const Commodity: React.FC<Commodity> = ({ prevStep, nextStep }) => {
  return (
    <div className="py-8">
      <Breadcrumbs />
      <DashBoardHeader className="py-10">Selected COMMODITY</DashBoardHeader>
      <p className="text-primary-gray">Program</p>

      <div className="flex flex-col gap-2">
        <label className="flex   items-center cursor-pointer">
          <input type="radio" value="male" className="hidden peer" />
          <span className="w-4 h-4 inline-block border rounded-sm border-primary-gray bg-white peer-checked:bg-primary-green"></span>
          <span className=" text-primary ml-1">
            You have read and understood the Price Comparison sheet and the
            Disclosure Statement.
          </span>
        </label>
        <label className="flex  items-center cursor-pointer">
          <input type="radio" value="female" className="hidden peer" />
          <span className="w-4 h-4 inline-block border rounded-sm border-primary-gray bg-white peer-checked:bg-primary-green"></span>
          <span className=" text-primary ml-1">
            You are either the account holder, or the authorized agent of the
            account holder.
          </span>
        </label>
      </div>

      <ContinueButton
        prevStep={prevStep}
        nextStep={nextStep}
        className="pt-80"
      />
    </div>
  );
};

export default Commodity;
