
import RequestList from "@/components/Appointment/RequestList";

import React from "react";


const AppointmentRequest = () => {
  const appointments = [
    { id: 1, service: "Service A", name: "Sophia Bennett", location: "15 Greenway Street, New York, NY 10001", status: "Pending" },
    { id: 2, service: "Service B", name: "Daniel Foster", location: "27 Maple Avenue, Los Angeles, CA 90012", status: "Working" },
    { id: 3, service: "Service C", name: "Michael Reynolds", location: "89 River Road, Miami, FL 33101", status: "Completed" },
    { id: 4, service: "Service D", name: "Emma Collins", location: "101 Sunset Boulevard, San Francisco, CA 94110", status: "Working" },
    { id: 5, service: "Service E", name: "John Carter", location: "36 Hilltop Drive, Chicago, IL 60614", status: "Completed" },
  ];

  
  const statusColors = {
    Pending: "bg-blue-100 text-blue-600 border border-blue-400  text-center px-[16px] py-[8px] ",
    Working: "bg-green-100 text-green-600 border border-green-400  text-center px-[16px] py-[8px]",
    Completed: "bg-yellow-100 text-yellow-600 border border-yellow-400  text-center px-[16px] py-[8px]",
  };

  return (

    <div>
     <RequestList/>

    <div className="p-6 min-h-screen">
      <h2 className="text-xl font-semibold mb-4">Overview</h2>
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="p-6 bg-green-600 shadow-md text-white rounded-lg text-center text-2xl font-md h-[175px] flex flex-col items-center justify-center gap-2">04<br /><span className="text-lg border-t-1 pt-2">Recent Appointment List</span></div>
        <div className="p-6 bg-[#EAF7E6] shadow-md text-green-800 rounded-lg text-center text-2xl font-md h-[175px] flex flex-col items-center justify-center gap-2">02<br /><span className="text-lg border-t-1 pt-2">Running Appointment List</span></div>
        <div className="p-6 bg-[#EAF7E6] shadow-md text-green-800 rounded-lg text-center text-2xl font-md h-[175px] flex flex-col items-center justify-center gap-2">33<br /><span className="text-lg border-t-1 pt-2">Completed Appointment List</span></div>
      </div>
      <div className="bg-green-600 text-white p-4 rounded-t-md grid grid-cols-5 font-semibold">
        <span>No</span>
        <span>Service</span>
        <span>Consumer Name</span>
        <span>Location</span>
        <span>Action</span>
      </div>
      {appointments.map((appointment, index) => (
        <div key={appointment.id} className="grid grid-cols-5 p-4 bg-white border-b border-gray-200 items-center">
          <span>{String(index + 1).padStart(2, "0")}</span>
          <span>{appointment.service}</span>
          <span>{appointment.name}</span>
          <span>{appointment.location}</span>
          <span className={`px-3 py-1 rounded-full text-sm font-semibold ${statusColors[appointment.status]}`}>{appointment.status}</span>
        </div>
      ))}
      

    </div>
  );
};

export default AppointmentRequest;
