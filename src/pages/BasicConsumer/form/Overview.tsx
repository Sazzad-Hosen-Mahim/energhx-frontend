import DashBoardHeader from "@/common/DashBoardHeader";

interface Overview {
  nextStep: () => void;
}
const Overview: React.FC<Overview> = ({ nextStep }) => {
  return (
    <div className="w-full h-screen fixed top-0 right-0 backdrop-blur-md  bg-black/30 flex items-center  justify-center">
      <div className="bg-white rounded-xl p-8 max-w-2xl  flex flex-col gap-4 text-[#394A3F]">
        <h2 className=" font-secondary font-extrabold text-2xl text-[#121212]">
          BUILDING ENERGY AUDIT & ANALYSIS DATA REPORT
        </h2>

        <DashBoardHeader className="text-2xl">OVERVIEW</DashBoardHeader>
        <h2 className="text-lg text-primary font-primary font-semibold">
          BUILDING INFORMATION
        </h2>
      </div>
    </div>
  );
};

export default Overview;
