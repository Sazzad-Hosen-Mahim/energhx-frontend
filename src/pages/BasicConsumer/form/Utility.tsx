import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import DashBoardHeader from "@/common/DashBoardHeader";
import ContinueButton from "@/common/ContinueButton";
import Breadcrumbs from "@/common/Breadcrumbs";
import lightGreen from "../../../assets/Profile/lightGreen.svg";
interface Utility {
  nextStep: () => void;
  prevStep: () => void;
}

const Utility: React.FC<Utility> = ({ prevStep, nextStep }) => {
  return (
    <div className="py-8">
      <Breadcrumbs />
      <div className="py-10">
        <DashBoardHeader className="pb-6">Utility selection</DashBoardHeader>

        <p className="text-accent">
          Welcome to our secure service activation centre!
        </p>
        <p className="text-accent">
          Congratulations for choosing to monitor your energy consumption with
          EnerghxPlus.
        </p>
        <div className=" flex gap-2 text-primary">
          <img src={lightGreen} alt="" />
          <p>
            To make your enrolment process as easy as possible, please have your
            electricity and/or natural gas bill with you.
          </p>
        </div>
      </div>

      <div className="flex  items-center gap-4 ">
        <Select>
          <SelectTrigger className="w-[180px] rounded-none border-primary-gray">
            <SelectValue placeholder="Select service" />
          </SelectTrigger>
          <SelectContent className="bg-light-green">
            <SelectGroup>
              <SelectLabel>Select commodity</SelectLabel>
              <SelectItem
                className=" hover:text-white hover:bg-primary"
                value="Select service"
              >
                Ramjan
              </SelectItem>
              <SelectItem
                className="hover:bg-primary-green hover:text-white"
                value="banana"
              >
                Ramjan
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px] rounded-none border-primary-gray">
            <SelectValue placeholder="Select commodity" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Select commodity</SelectLabel>
              <SelectItem
                className="hover:bg-primary-green hover:text-white"
                value="Select commodity"
              >
                Ramjan{" "}
              </SelectItem>
              <SelectItem
                className="hover:bg-primary-green hover:text-white"
                value="banana"
              >
                Ramjan
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <ContinueButton
        nextStep={nextStep}
        prevStep={prevStep}
        className="pt-80"
      />
    </div>
  );
};

export default Utility;
