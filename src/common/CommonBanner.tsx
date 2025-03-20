
interface CoverBannerProps {
    name: string;
    role: string;
    imageUrl: string;
  }
const CommonBanner = ({ name, role, imageUrl }: CoverBannerProps) => {
  return (
    <div className=" flex items-center justify-items-start space-x-4 p-4 bg-white rounded-lg py-10">
        <div className="w-[1440px] mx-auto">

     <div className="flex items-center gap-4">
     <img
        src={imageUrl}
        alt={name}
        className="w-32 h-32 rounded-full border-2 border-gray-300"
      />
      <div>
        <h2 className="lg:text-[24px]  font-bold text-gray-900">{name}</h2>
        <p className="text-[18px] text-green-600">{role}</p>
      </div>
     </div>
        </div>
    </div>
  )
}

export default CommonBanner;
