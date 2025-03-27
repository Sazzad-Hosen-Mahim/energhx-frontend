import lightGreen from "../../../assets/Profile/lightGreen.svg";
interface HydroForm {
  nextStep: () => void;
}
const HydroForm: React.FC<HydroForm> = ({ nextStep }) => {
  return (
    <div className="w-full h-screen fixed top-0 right-0 backdrop-blur-md  bg-black/30 flex items-center  justify-center">
      <div className="bg-white rounded-xl p-8 max-w-2xl  flex flex-col gap-4 text-[#394A3F]">
        <h2 className=" font-secondary font-extrabold text-2xl text-[#121212]">
          Products for " Hydro Ottawa Limited" Utility
        </h2>
        <div className="flex   items-start gap-1">
          <img src={lightGreen} alt="light" />
          <p>
            5 Year Demand Side Monitoring Plan at the Ontario Energy Board (OEB)
            - approved Regulated Price Plan (RPP) or Market Price, throughout
            the period of the Contract. You will also continue to pay the
            standard delivery charges, regulatory charges, utility charges and
            debt retirement charge to your utility every month.
          </p>
        </div>

        <div className="flex  items-start gap-1">
          <img src={lightGreen} alt="light" />
          <p>
            You will also be responsible for a one-time enrolment/re-enrolment
            fee of $1.50 and an 80¢ per month billing fee. As always you will be
            responsible for regulated delivery, regulatory, debt retirement and
            other costs billed by your utility. You will also remain entitled
            to/bound by the Global Adjustment billed by your utility. The
            following documents are available to be printed or downloaded
            without any obligation to enter a contract and contain more
            information about the offer.
          </p>
        </div>
        <button
          onClick={nextStep}
          className="bg-primary text-white rounded-md w-fit px-4 py-2 cursor-pointer mx-auto mt-40 "
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HydroForm;
