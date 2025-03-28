import Breadcrumbs from "@/common/Breadcrumbs";
import thanks from "../../../assets/Profile/thank.png";
interface ThanksForm {
  nextStep: () => void;
}
const ThanksForm: React.FC<ThanksForm> = ({ nextStep }) => {
  return (
    <div>
      <div className="py-8">
        <Breadcrumbs />
      </div>
      <div className="flex flex-col items-center w-full gap-4">
        <h1 className=" uppercase text-3xl text-primary font-secondary font-extrabold    tracking-widest">
          Thank You
        </h1>
        <img src={thanks} alt="thanks" />
        <button
          onClick={nextStep}
          className=" bg-primary text-white rounded-xl px-6 py-4 mt-10 cursor-pointer"
        >
          Save Profile
        </button>
      </div>
    </div>
  );
};

export default ThanksForm;
