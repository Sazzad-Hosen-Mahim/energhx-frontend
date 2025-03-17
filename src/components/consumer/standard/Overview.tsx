const Overview = () => {
    return (
      <div className="flex-1 p-5">
        <h2 className="text-xl font-semibold mb-5">Overview</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-green-700 text-white p-5 rounded-lg text-center">
            <p className="text-3xl font-bold">26</p>
            <p>Available Certified Server</p>
          </div>
          <div className="bg-green-200 p-5 rounded-lg text-center">
            <p className="text-3xl font-bold">306</p>
            <p>Available Certified Developers</p>
          </div>
          <div className="bg-green-100 p-5 rounded-lg text-center">
            <p className="text-3xl font-bold">24K</p>
            <p>Available Regular Customers</p>
          </div>
        </div>
  
        <table className="w-full mt-5 border-collapse">
          <thead>
            <tr className="bg-green-700 text-white">
              <th className="p-3">No</th>
              <th className="p-3">Service Name</th>
              <th className="p-3">Service Type</th>
              <th className="p-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {[
              { id: "01", name: "Service One", type: "Solar" },
              { id: "02", name: "Service Two", type: "Biomass" },
              { id: "03", name: "Service Three", type: "Wind" },
              { id: "04", name: "Service Four", type: "Solar" },
              { id: "05", name: "Service Five", type: "Biomass" },
            ].map((service) => (
              <tr key={service.id} className="border-b">
                <td className="p-3">{service.id}</td>
                <td className="p-3">{service.name}</td>
                <td className="p-3">{service.type}</td>
                <td className="p-3">
                  <button className="bg-green-600 text-white px-3 py-1 rounded">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };
  
  export default Overview;
  