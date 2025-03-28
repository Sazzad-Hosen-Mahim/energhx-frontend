import LightBulb from "@/assets/bulb-animation.gif";

const ThankYou = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="uppercase text text-[32px] font-extrabold text-primary-green  my-5">
        Thank You
      </h1>
      <div className="">
        <img src={LightBulb} alt="" className="" />
      </div>
    </div>
  );
};

export default ThankYou;
