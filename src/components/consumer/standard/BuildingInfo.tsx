import { useState } from "react";
import Step1Form from "@/components/consumer/standard/step-form/Step1Form";
import Step2Form from "@/components/consumer/standard/step-form/Step2Form";
import Modal from "@/components/consumer/standard/step-form/Modal";
import WallModal from "@/components/consumer/standard/step-form/WallModal"; // New WallModal component

const BuildingInfo = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    building: "",
    subBuilding: "",
    country: "",
    street: "",
    commodity: [],
    phoneNumber: "",
    alternatePhoneNumber: "",
    accountNumber: "",
    units: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWallModal, setShowWallModal] = useState(false);
  const [selectedDirection, setSelectedDirection] = useState(""); // Store selected wall direction
  const [walls, setWalls] = useState<{ direction: string, length: string, width: string, type: string }[]>([]);

  // Handle input change for form fields
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle checkbox change
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      commodity: checked
        ? [...prevState.commodity, value]
        : prevState.commodity.filter((item) => item !== value),
    }));
  };

  // Validation for Step 1
  const isStepOneValid = () => {
    return (
      formData.building &&
      formData.subBuilding &&
      formData.country &&
      formData.street &&
      formData.commodity.length > 0
    );
  };

  // Validation for Step 2
  const isStepTwoValid = () => {
    return formData.phoneNumber && formData.accountNumber && formData.units;
  };

  // Open the modal
  const openModal = () => {
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
  };

  // Handle form submission (move to Step 3 instead of alert)
  const handleSubmit = () => {
    setStep(3);
    closeModal();
  };

  // Add a new wall to the selected direction
  const handleAddWall = (length: string, width: string, type: string) => {
    setWalls([...walls, { direction: selectedDirection, length, width, type }]);
    setShowWallModal(false);
  };

  return (
    <div className="p-5">
      <h2 className="text-xl font-semibold mb-5">Building Information</h2>

      {/* Step 1: Basic Information */}
      {step === 1 && (
        <Step1Form
          formData={formData}
          handleChange={handleChange}
          handleCheckboxChange={handleCheckboxChange}
          isStepOneValid={isStepOneValid}
          setStep={setStep}
        />
      )}

      {/* Step 2: Contact and Account Information */}
      {step === 2 && (
        <Step2Form
          formData={formData}
          handleChange={handleChange}
          isStepTwoValid={isStepTwoValid}
          setStep={setStep}
          openModal={openModal}
        />
      )}

      {/* Step 3: Wall Information */}
      {step === 3 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-3">Wall Information</h3>

          {/* Display walls for all four directions */}
          {["North", "South", "East", "West"].map((direction) => (
            <div key={direction} className="mb-4">
              <h4 className="text-md font-semibold">{direction}</h4>
              {walls.filter(wall => wall.direction === direction).length > 0 ? (
                <div className="space-y-2">
                  {walls
                    .filter(wall => wall.direction === direction)
                    .map((wall, index) => (
                      <div key={index} className="flex items-center space-x-4 p-2 border rounded-md">
                        <span>{`Wall ${index + 1}: ${wall.length} x ${wall.width} (${wall.type})`}</span>
                      </div>
                    ))}
                </div>
              ) : (
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                  onClick={() => {
                    setSelectedDirection(direction);
                    setShowWallModal(true);
                  }}
                >
                  Add {direction} Wall
                </button>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Terms & Conditions Modal */}
      {isModalOpen && (
        <Modal closeModal={closeModal} onSubmit={handleSubmit} />
      )}

      {/* Wall Modal for Adding Walls */}
      {showWallModal && (
        <WallModal
          closeWallModal={() => setShowWallModal(false)}
          onAddWall={handleAddWall}
        />
      )}
    </div>
  );
};

export default BuildingInfo;
