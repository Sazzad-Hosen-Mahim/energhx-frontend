import { MdOutlineStarBorder } from "react-icons/md";

const Review = () => {
  return (
    <div className=" py-10">
      <form className=" flex flex-col gap-4 font-primary bg-secondary p-10 rounded-2xl shadow-[0px_0px_15px_0px_rgba(0,0,0,.4)] border border-[#E7E9E8]">
        <h2 className=" font-secondary font-extrabold text-xl">
          Send me Your Review
        </h2>

        <div className="w-full">
          <p className="text-accent text-lg pb-1">
            Enter your valuable comment here.
          </p>

          <textarea
            className=" w-full border border-accent rounded-xs outline-none bg-white p-4"
            rows={10}
            placeholder="Your name or user name here"
          />
        </div>
        <div className=" text-accent text-4xl flex items-center gap-2">
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
          <MdOutlineStarBorder />
        </div>
        <button className="bg-primary text-white rounded-xs p-2">Review</button>
      </form>
    </div>
  );
};

export default Review;
