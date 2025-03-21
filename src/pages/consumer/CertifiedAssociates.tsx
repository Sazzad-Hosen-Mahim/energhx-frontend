import DropdownInfo from "@/components/consumer/standard/certifiedAssociates/DropdownInfo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star } from "lucide-react";

const associates = [
  { id: "01", name: "Emmnauel Nonye", role: "Developer", rating: 4.3 },
  { id: "02", name: "Emmnauel Nonye", role: "Server", rating: 4.3 },
  { id: "03", name: "Emmnauel Nonye", role: "Developer", rating: 4.3 },
  { id: "04", name: "Emmnauel Nonye", role: "Server", rating: 4.3 },
];


const CertifiedAssociates = () => {
  return (
    <div className="p-5 mx-auto">
      <h2 className="text-xl font-semibold mb-4">Certified Associates</h2>

      <DropdownInfo/>
      <div className="space-y-4">
        {associates.map((associate) => (
         <Card key={associate.id} className="flex items-center justify-between p-4 shadow-sm rounded-[12px] bg-[#F5F5F5]">
         <div className="flex items-center justify-between gap-6">
           <span className="text-gray-500 text-sm">{associate.id}</span>
           <div>
             <h3 className="text-primary text-[18px] font-semibold text-base">{associate.name}</h3>
             <div className="flex items-center text-yellow-500">
               {[...Array(4)].map((_, i) => (
                 <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500" />
               ))}
               <Star className="w-4 h-4 fill-none text-yellow-500" />
               <span className="ml-1 text-accent text-sm">{associate.rating}</span>
             </div>
           </div>
           <p className="text-gray-700 font-semibold text-base">{associate.role}</p>
           <p className="text-gray-500 text-sm">Here is the current Location Lorem Ipsum used since the 1500</p>
        
         <Button className="bg-primary text-white rounded-[4px] px-[16px] py-[12px] shadow-md">View Profile</Button>
         </div>
       </Card>
        ))}
      </div>
    </div>
  )
}

export default CertifiedAssociates