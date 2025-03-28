import Light from "@/assets/Vector.svg";
import { Button } from "@/components/ui/button";

const paragraphData = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Cras egestas lectus tristique lectus mollis suscipit.",
  "Sed vestibulum nibh sed odio rutrum, id pretium risus luctus.",
  "Maecenas quis ligula sit amet ex dictum egestas.",
  "Mauris nec lorem aliquet, maximus orci at, tristique eros.",
  "Aenean a arcu eu magna interdum blandit non a arcu.",
  "Nunc ut mauris maximus, interdum lectus sit amet, venenatis turpis.",
];

const ServerInternDashboard = () => {
  return (
    <div className="m-10 ">
      <p className="text-black mb-5">Overview</p>
      <h1 className="text-primary-green font-bold text-lg mb-5">
        Upgrade Facilities
      </h1>
      <p>
        Here is our some lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      {/* <div className="mt-10 flex items-center gap-3 mx-5">
        <div className="">
          <img src={Light} alt="" className="w-4 h-4" />
        </div>
        <p className="text-primary-gray/80">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div> */}
      {paragraphData.map((text, index) => (
        <div key={index} className="mt-5 flex items-center gap-3 mx-5">
          <div>
            <img src={Light} alt="" className="w-4 h-4" />
          </div>
          <p className="text-primary-gray/80">{text}</p>
        </div>
      ))}
      <p className="text-primary-gray/80 mt-5">
        Note: Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock
      </p>
      <Button className="bg-light-green text-primary-green w-full h-[61px] mt-12 hover:text-white">
        25$-Upgrade Now
      </Button>
    </div>
  );
};

export default ServerInternDashboard;
