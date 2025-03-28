import twing from "@/assets/twing.png";

const BasicDashboard = () => {
  return (
    <div className="p-6 bg-white rounded-lg ">
      <h2 className="text-lg  text-[#112518] font-primary">Overview</h2>

      <div className="mt-4">
        <h3 className="text-sm font-extrabold text-[#2DAD00] uppercase font-secondary">
          Upgrade Facilities
        </h3>
        <p className="text-[#112518] font-semibold pb-5">
          Here is our some lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>

        <ul className="mt-4 space-y-2 text-[#758179] mb-5">
          <li className="flex items-start">
            <span className="text-green-500 mr-2">
              <img src={twing} />
            </span>
            Cras egestas lectus tristique lectus mollis suscipit.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">
              <img src={twing} />
            </span>
            Sed vestibulum nibh sed odio rutrum, id pretium risus luctus.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">
              <img src={twing} />
            </span>
            Maecenas quis ligula sit amet ex dictum egestas.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">
              <img src={twing} />
            </span>
            Mauris nec lorem aliquet, maximus orci at, tristique eros.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">
              <img src={twing} />
            </span>
            Aenean a arcu eu magna interdum blandit non a arcu.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">
              <img src={twing} />
            </span>
            Nunc ut mauris maximus, interdum lectus sit amet, venenatis turpis.
          </li>
          <li className="flex items-start">
            <span className="text-green-500 mr-2">
              <img src={twing} />
            </span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </li>
        </ul>

        <p className="mt-4  text-[#758179]">
          <span className="text-[#2DAD00] font-semibold">Note:</span> Contrary
          to popular belief, Lorem Ipsum is not simply random text. It has roots
          in a piece of classical Latin literature from 45 BC, making it over
          2000 years old. Richard McClintock
        </p>

        <div className="mt-10 text-center">
          <button className="w-full py-3 bg-[#EAF7E6] text-green-700  rounded-lg hover:bg-green-200 hover:cursor-pointer">
            25$ - Upgrade Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default BasicDashboard;
