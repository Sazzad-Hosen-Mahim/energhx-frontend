import { IoEyeOutline } from "react-icons/io5";
import { IoCheckmarkDoneOutline } from "react-icons/io5";

interface MyClass {
  id: string;
  title: string;
  topic: string;
  timeInMinutes: number;
  classNumber: number;
  isCompleted: boolean;
  isWatching: boolean;
  files: string[];
  image: string;
}

interface MyClassDetailsProps {
  classList: MyClass[];
}

const MyClassDetails = ({ classList }: MyClassDetailsProps) => {
  return (
    <div className="flex flex-col gap-7">
      {classList.map((singleClass) => {
        return (
          <div className="flex flex-col justify-center items-center gap-6 md:flex-row md:justify-start border-[1px] border-secondary pb-2">
            {/* image section */}
            <div>
              <img src={singleClass.image} alt="" className="max-w-[180px]" />
            </div>

            {/* details section */}
            <div className="max-w-[530px] w-full flex flex-col items-center  md:justify-start md:items-start">
              <div className="flex items-center space-x-2 text-gray-700 text-lg">
                <span className="text-[14px] text-primary">
                  Class:
                  <span className="font-normal">{singleClass.classNumber}</span>
                </span>
                <span>|</span>
                <span className="text-[394A3F] text-[14px]">
                  {singleClass.timeInMinutes} Minute
                </span>
              </div>
              <p className="text-[#394A3F] text-[18px]">{singleClass.title}</p>
              <p className="text-[14px] text-[#394A3F]">{singleClass.topic}</p>
              <p className="flex gap-3">
                {singleClass.files.map((item) => {
                  return (
                    <span className="text-[14px] text-[9DA6A0] cursor-pointer">
                      {item}
                    </span>
                  );
                })}
              </p>
            </div>

            {/* watching information */}
            <div className="flex flex-col gap-2">
              {singleClass.isCompleted && (
                <button className="flex items-center justify-center gap-2 bg-secondary text-primary text-[16px] border-[1px] border-primary rounded-full px-3 py-1 cursor-pointer">
                  <span>
                    <IoEyeOutline />
                  </span>{" "}
                  Watch again
                </button>
              )}
              {singleClass.isCompleted && (
                <button className="flex items-center justify-center gap-2 bg-[#E6F7FF] text-[#00ADFF] text-[16px] border-[1px] border-[#00ADFF] rounded-full px-3 py-1 cursor-pointer">
                  Completed
                </button>
              )}

              {!singleClass.isCompleted && (
                <button
                  className={`flex items-center justify-center gap-2 text-[16px] border-[1px] rounded-full px-3 py-1 cursor-pointer ${
                    singleClass.isWatching
                      ? "bg-secondary text-primary border-primary"
                      : "bg-[#E7E9E8] text-[#758179] border-[#758179]"
                  }`}
                >
                  <span>
                    {singleClass.isWatching ? (
                      <IoCheckmarkDoneOutline />
                    ) : (
                      <IoEyeOutline />
                    )}
                  </span>
                  Watch now
                </button>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default MyClassDetails;
