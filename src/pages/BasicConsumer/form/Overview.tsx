import DashBoardHeader from "@/common/DashBoardHeader";

interface Overview {
  nextStep: () => void;
}

const overview = [
  "COOLING LOAD ANALYSIS",
  "LIGHTING",
  "APPLIANCES",
  "ZERO EMISSION RATIO (ZER)",
  "SOLAR ENERGY POTENTIAL & SIZING REPORT",
  "SOLAR ENERGY POTENTIAL & SIZING REPORT",
  "WIND ENERGY POTENTIAL & SIZING REPORT",
  "BIOMASS ENERGY POTENTIAL & SIZING REPORT",
];
const Overview: React.FC<Overview> = ({ nextStep }) => {
  return (
    <div className="w-full h-full fixed top-0 right-0 backdrop-blur-md  bg-black/30 flex items-center  justify-center font-primary overflow-scroll ">
      <div className="bg-white h-full rounded-xl p-8 max-w-2xl  flex flex-col gap-4 text-[#394A3F] mt-[10%] overflow-auto">
        <h2 className=" font-secondary font-extrabold text-2xl text-[#121212] ">
          BUILDING ENERGY AUDIT & ANALYSIS DATA REPORT
        </h2>
        <DashBoardHeader className="text-2xl">OVERVIEW</DashBoardHeader>
        <div>
          <h2 className="text-lg text-primary font-primary font-semibold    tracking-widest pb-4">
            BUILDING INFORMATION
          </h2>

          <table className=" min-w-full table-fixed border-collapse text-[#394A3F]">
            <thead>
              <tr>
                <th className="border border-slate-300 p-2">
                  <h2>Building Address</h2>
                </th>
                <th className="border border-slate-300 p-2">
                  <h2>Report Type: [Basic/Standard/Premium]</h2>
                </th>
                <th className="border border-slate-300 p-2">
                  <h2>Report Date: October, 20, 2024</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-2">
                  <h2>123 Main Street Washington, DC 20037</h2>
                </td>
                <td className="border border-slate-300 p-2">
                  <h2>Building Type: [Residential/Bungalow]</h2>
                </td>
                <td className="border border-slate-300 p-2">
                  <h2>Auditor’s ID: [Consumer/Server/Developer]</h2>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">
                  <h2>Building Address</h2>
                </td>
                <td className="border border-slate-300 p-2">
                  <h2>Building Address</h2>
                </td>
                <td className="border border-slate-300 p-2">
                  <h2>Building Address</h2>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-lg text-primary font-primary font-semibold    tracking-widest pb-4">
            DATA SUMMARY
          </h2>

          <table className=" min-w-full table-fixed border-collapse text-[#394A3F]">
            <thead>
              <tr>
                <th className="border border-slate-300 p-2">
                  <h2>Building Address</h2>
                </th>
                <th className="border border-slate-300 p-2">
                  <h2>Report Type: [Basic/Standard/Premium]</h2>
                </th>
                <th className="border border-slate-300 p-2">
                  <h2>Report Date: October, 20, 2024</h2>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-2">
                  <h2>123 Main Street Washington, DC 20037</h2>
                </td>
                <td className="border border-slate-300 p-2">
                  <h2>Building Type: [Residential/Bungalow]</h2>
                </td>
                <td className="border border-slate-300 p-2">
                  <h2>Auditor’s ID: [Consumer/Server/Developer]</h2>
                </td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">
                  <h2>Building Address</h2>
                </td>
                <td className="border border-slate-300 p-2">
                  <h2>Building Address</h2>
                </td>
                <td className="border border-slate-300 p-2">
                  <h2>Building Address</h2>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-lg text-primary font-primary font-semibold    tracking-widest pb-4">
            DATA SUMMARY
          </h2>

          <p className="text-[#394A3F] text-sm">
            This report was generated from by the EnerghxPlus tool, developed by
            Energhx Green Energy Corporation, Ottawa, Canada. EnerghxPlus is a
            digital energy management tool for monitoring of energy demand,
            management of energy utilization, designing of renewable energy
            system towards a net-zero energy management, and controlling thermal
            comfort & indoor air quality in residential and commercial building
            envelopes. It also facilitates third-party data collection and
            reporting from clients’ local distribution companies. This report
            follows the ASHRAE/ACCA Standard 211P, Standard for Residential and
            Commercial Building Energy Audits. It also includes additional data
            fields required by specific cities, where applicable. The audit team
            listed above is responsible for any information entered and reported
            through Asset Score. DOE and PNNL do not warranty data accuracy,
            completeness, legality, and reliability.
          </p>
        </div>
        <div>
          <h2 className=" font-secondary font-extrabold text-2xl text-[#121212] ">
            BUILDING ENERGY AUDIT & ANALYSIS DATA REPORT
          </h2>
          <h2 className="text-lg text-primary font-primary font-semibold    tracking-widest pb-4">
            CONTACT INFORMATION AND AUDIT DETAIL
          </h2>
        </div>
        <div>
          <h2 className="text-lg text-primary font-primary font-semibold    tracking-widest pb-4">
            BUILDING CONSTRUCTION & APPLIANCES
          </h2>
          <table className=" min-w-full table-fixed border-collapse text-[#394A3F]">
            <thead>
              <tr>
                <th className="border border-slate-300 p-2">
                  <h2>Number of Floors Above-Grades</h2>
                </th>
                <th className="border border-slate-300 p-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-2">
                  <h2>...</h2>
                </td>
                <td className="border border-slate-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">
                  <h2>Building Address</h2>
                </td>
                <td className="border border-slate-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">
                  <h2>Building Address</h2>
                </td>
                <td className="border border-slate-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">
                  <h2>Building Address</h2>
                </td>
                <td className="border border-slate-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">
                  <h2>Building Address</h2>
                </td>
                <td className="border border-slate-300 p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className="text-lg text-primary font-primary font-semibold    tracking-widest pb-4">
            BUILDING TYPE & BEHAVIOURAL CHARACTERISTICS
          </h2>
          <table className=" min-w-full table-fixed border-collapse text-[#394A3F]">
            <thead>
              <tr>
                <th className="border border-slate-300 p-2">
                  <h2>Gross Floor Area</h2>
                </th>
                <th className="border border-slate-300 p-2"></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-slate-300 p-2">
                  <h2>Number of Floors Above-Grade</h2>
                </td>
                <td className="border border-slate-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">
                  <h2>...</h2>
                </td>
                <td className="border border-slate-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">
                  <h2>...</h2>
                </td>
                <td className="border border-slate-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">
                  <h2>...</h2>
                </td>
                <td className="border border-slate-300 p-2"></td>
              </tr>
              <tr>
                <td className="border border-slate-300 p-2">
                  <h2>windows</h2>
                </td>
                <td className="border border-slate-300 p-2"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div>
          <h2 className=" font-secondary font-extrabold text-2xl text-[#121212] ">
            BUILDING ENERGY AUDIT & ANALYSIS DATA REPORT
          </h2>
          <h2 className="text-lg text-primary font-primary font-semibold    tracking-widest pb-4">
            CONTACT INFORMATION AND AUDIT DETAIL
          </h2>
        </div>
        <div>
          {overview.map((item, i) => (
            <div
              key={i}
              className={`${
                i === overview.length - 1
                  ? "pb-0 border-none"
                  : "pb-40 border-b border-accent"
              }`}
            >
              <p className="text-lg text-primary font-primary font-semibold   pt-2 ">
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className=" border-b border-accent ">
          <h2 className=" font-secondary font-extrabold text-2xl text-[#121212] ">
            BUILDING ENERGY AUDIT & ANALYSIS DATA REPORT
          </h2>
          <h2 className="text-lg text-primary font-primary font-semibold    tracking-widest pb-4">
            CONTACT INFORMATION AND AUDIT DETAIL
          </h2>
        </div>
        <div onClick={nextStep}>
          <h2 className="text-lg text-primary font-primary font-semibold    tracking-widest pb-4  cursor-pointer">
            RECOMMENDATIONS
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Overview;
