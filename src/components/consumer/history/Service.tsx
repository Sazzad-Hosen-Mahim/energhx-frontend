import service from "../../../assets/Profile/service.png";
import Star from "./Star";

import light from "../../../assets/Profile/light.svg";
import Review from "./Review";

const features = [
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Cras egestas lectus tristique lectus mollis suscipit.",
  "Maecenas quis ligula sit amet ex dictum egestas.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Cras egestas lectus tristique lectus mollis suscipit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Cras egestas lectus tristique lectus mollis suscipit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Cras egestas lectus tristique lectus mollis suscipit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
];
const Service = () => {
  return (
    <div className="p-5 font-primary">
      <div className=" flex items-center justify-between">
        <h2 className="text-xl font-semibold  ">Service Details</h2>

        <button className=" bg-[#E8F4EB] border border-primary text-primary px-4 py-2 rounded-full">
          Completed
        </button>
      </div>

      <div className=" flex items-center gap-4 py-8">
        <div className=" min-w-70 min-h-48">
          <img className=" w-full h-full" src={service} alt="service" />
        </div>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-1">
            <Star />
            <p className="text-accent">4.3</p>
            <p className="text-accent">(Review 22)</p>
          </div>
          <h2 className="font-semibold  text-[#394A3F] text-lg">
            Introduction Energhx
          </h2>
          <p className="text-accent ">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don't look even slightly
            believable.
          </p>
        </div>
      </div>
      <div>
        <h2 className="text-sm font-extrabold  text-primary font-secondary  pb-4">
          Facilities
        </h2>
        <p className="text-[#112518]">
          Here is our some lorem ipsum dolor sit amet, consectetur adipiscing
          elit, sed do eiusmod tempor incididunt ut labore et dolore magna
          aliqua.
        </p>
      </div>

      <div className="flex flex-col gap-4 py-8">
        {features.map((item, i) => (
          <div className="flex items-center gap-1" key={i}>
            <img src={light} alt="light" />
            <p className="text-accent">{item}</p>
          </div>
        ))}
      </div>
      <p className="text-accent">
        Note: Contrary to popular belief, Lorem Ipsum is not simply random text.
        It has roots in a piece of classical Latin literature from 45 BC, making
        it over 2000 years old. Richard McClintock
      </p>

      <Review />
    </div>
  );
};

export default Service;
