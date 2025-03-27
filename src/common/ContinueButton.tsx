import { Button } from "@/components/ui/button";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleDoubleRight } from "react-icons/fa";

interface ContinueButton {
  nextStep: () => void;
  prevStep: () => void;
  className?: string;
}

const ContinueButton: React.FC<ContinueButton> = ({
  nextStep,
  prevStep,
  className,
}) => {
  return (
    <div className={`flex items-center gap-5 ${className}`}>
      <Button
        onClick={prevStep}
        variant="outline"
        className="bg-light-green border-primary-green text-primary-green py-5 rounded-md"
      >
        <FaAngleLeft />
        Previous
      </Button>
      <Button
        onClick={nextStep}
        type="submit"
        className="bg-primary-green text-white py-5 rounded-md"
      >
        Continue <FaAngleDoubleRight />
      </Button>
    </div>
  );
};

export default ContinueButton;
