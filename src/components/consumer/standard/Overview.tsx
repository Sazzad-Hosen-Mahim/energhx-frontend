const Overview = () => {
  return (
    <div className="flex-1 p-5">
      <h2 className="text-xl font-semibold mb-5">Overview</h2>
      <div className="grid grid-cols-4 gap-4">
        <div className="bg-[#9ED98A] text-white p-5 rounded-lg text-center h-[200px]">
          <p className="text-6xl font-bold pt-6 text-[#1C9237] border-b-1 border-[#BEE6B0] pb-2 ">
            26
          </p>
          <p className="text-[#394A3F] pt-4 text-lg">
          Energy Audit & Analysis
          </p>
        </div>
        <div className="bg-[#9ED98A] text-white p-5 rounded-lg text-center h-[200px]">
          <p className="text-6xl font-bold pt-6 text-[#1C9237] border-b-1 border-[#BEE6B0] pb-2 ">
            306
          </p>
          <p className="text-[#394A3F] pt-4 text-lg">
          Solar Energy Sizing
          </p>
        </div>
        <div className="bg-[#9ED98A] text-white p-5 rounded-lg text-center h-[200px]">
          <p className="text-6xl font-bold pt-6 text-[#1C9237] border-b-1 border-[#BEE6B0] pb-2 ">
            24K
          </p>
          <p className="text-[#394A3F] pt-4 text-lg">
          Wind Energy Sizing
          </p>
        </div>
        <div className="bg-[#9ED98A] text-white p-5 rounded-lg text-center h-[200px]">
          <p className="text-6xl font-bold pt-6 text-[#1C9237] border-b-1 border-[#BEE6B0] pb-2 ">
            24K
          </p>
          <p className="text-[#394A3F] pt-4 text-lg">
          Biomass Energy Sizing
          </p>
        </div>
      </div>

      <table className="w-full mt-5 border-collapse">
        <thead>
          <tr className="bg-green-700 text-white text-lg ">
            <th className="p-3 text-left ">No</th>
            <th className="p-3 text-left">Service Name</th>
            <th className="p-3 text-left">Service Type</th>
            <th className="p-3 text-left">Action</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: "01", name: "Service One", type: "Solar" },
            { id: "02", name: "Service Two", type: "Biomass" },
            { id: "03", name: "Service Three", type: "Wind" },
            { id: "04", name: "Service Four", type: "Solar" },
            { id: "05", name: "Service Five", type: "Biomass" },
          ].map((service, index) => (
            <tr
              key={service.id}
              className={`border-b ${
                index % 2 === 0 ? "bg-[#E7E9E8]" : "bg-[#F8F8F8] "
              }`}
            >
              <td className="p-3">{service.id}</td>
              <td className="p-3">{service.name}</td>
              <td className="p-3">{service.type}</td>
              <td className="p-3">
                <button className="bg-green-600 text-white px-3 py-1 rounded">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Overview;
