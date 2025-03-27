import { FaCrown } from "react-icons/fa";
interface CoverBannerProps {
  name: string;
  role: string;
  imageUrl: string;
  onUpgrade?: () => void;
}

const CommonBanner = ({ name, role, imageUrl, onUpgrade }: CoverBannerProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg py-10 w-[1440px] mx-auto">
      <div className="flex items-center gap-4">
        <img
          src={imageUrl}
          alt={name}
          className="w-32 h-32 rounded-full border-2 border-gray-300"
        />
        <div>
          <h2 className="lg:text-[24px] font-secondary font-bold text-[#112518]">{name}</h2>
          <p className="text-[18px] text-primary font-primary">{role}</p>
        </div>
      </div>
      
      {onUpgrade && (
        <button
          onClick={onUpgrade}
          className="px-4 py-2 bg-[#2DAD00] text-white rounded-lg font-medium hover:bg-[#2DAD00] transition duration-300"
        >
         
        </button>
      )}
    </div>
  );
};

export default CommonBanner;
