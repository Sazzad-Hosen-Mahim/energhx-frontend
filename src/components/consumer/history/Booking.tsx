import { Link } from "react-router-dom";
import Star from "./Star";

const Booking = () => {
  const body = [
    {
      service: "Energhx New LED Light Fix",
      date: "12:45 PM 20 February2024",
      price: "free",
      status: "On Going",
      option: "View",
      rating: 4.3,
    },
    {
      service: "Energhx New LED Light Fix",
      time: "12:45",
      date: "PM 20 February2024",
      price: 1050,
      status: "Completed",
      option: "View",
      rating: 4.3,
    },
  ];
  const head = ["SL.", "Service name", "Date", "Price", "Status", "Option"];
  return (
    <div className="p-5 font-primary">
      <h2 className="text-xl font-semibold  pb-4">Booking History</h2>

      <div className=" border border-[#E7E9E8]   w-full ">
        <div className=" bg-[#EAF7E6] grid grid-cols-7 px-4 text-accent">
          {head.map((item, i) => (
            <h2 className="py-4 nth-[2]:col-span-2" key={i}>
              {item}
            </h2>
          ))}
        </div>
        <div>
          {body.map((item, i) => (
            <div className="border-b border-[#E7E9E8] last:border-0 grid grid-cols-7 px-4 ">
              <div className="text-accent">#{i + 100}</div>
              <div className="flex flex-col  col-span-2 text-accent">
                <h2> {item.service}</h2>

                <div className="flex items-center gap-1">
                  <Star />
                  <p className="text-accent">4.3</p>
                </div>
              </div>
              <div className="flex items-center py-4 text-accent">
                {item.date}
              </div>
              <div className="flex items-center py-4 text-accent">
                {item.price}
              </div>
              <div className={`flex items-center py-4 `}>
                <button
                  className={
                    item.status === "Completed"
                      ? " bg-[#E8F4EB] border border-[#1C9237] text-[#1C9237] px-4 py-2 rounded-full"
                      : "border border-[#F1BB00] text-[#F1BB00] px-4 py-2 rounded-full bg-[#FFFAE9]"
                  }
                >
                  {item.status}
                </button>
              </div>
              <Link to="5" className="flex items-center py-4">
                <button className="px-4 py-2 rounded-full bg-[#FFFAE9] border border-[#F1BB00] text-[#F1BB00]   cursor-pointer">
                  {item.option}
                </button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Booking;
