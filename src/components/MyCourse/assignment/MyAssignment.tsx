import StatusBadge from "@/components/ui/StatusBadge";

export interface CourseAssignment {
  id: string;
  name: string;
  submissionDate: Date;
  status: string;
}

interface MyAssignmentProps {
  assignmentList: CourseAssignment[];
}

const MyAssignment = ({ assignmentList }: MyAssignmentProps) => {
  return (
    <div>
      <div className="my-5"></div>
      <div>
        <table className="w-full">
          <thead className="">
            <tr className="bg-secondary text-[16px] text-#758179] text-left">
              <th className="py-4 px-6 font-normal">Service Name</th>
              <th className="py-4 px-6 font-normal">Submisson Date</th>
              <th className="py-4 px-6 font-normal">Status</th>
              <th className="py-4 px-6 font-normal">Option</th>
            </tr>
          </thead>
          <tbody>
            {assignmentList.map((item) => {
              return (
                <tr key={item.id} className="border-[1px] border-[#E7E9E8] ">
                  <td className="p-4 text-[18px] text-[#758179]">
                    {item.name}
                  </td>
                  <td className="p-4 text-[14px] text-[#758179]">
                    {item.submissionDate.toLocaleDateString()}
                  </td>
                  <td className="p-4">
                    {<StatusBadge status={item.status} />}
                  </td>
                  <td className="p-4">
                    <button
                      className={`px-4 py-2 text-sm font-normal border-[1px] rounded-full bg-[#FFFAE9] text-[#F1BB00] border-[#F1BB00] cursor-pointer`}
                    >
                      View
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyAssignment;
