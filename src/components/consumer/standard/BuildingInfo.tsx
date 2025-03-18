import { useState } from "react";
import Step1Form from "@/components/consumer/standard/step-form/Step1Form";
import Step2Form from "@/components/consumer/standard/step-form/Step2Form";
import Modal from "@/components/consumer/standard/step-form/Modal";
import WallModal from "@/components/consumer/standard/step-form/WallModals";
import ElectricMobility from "@/components/consumer/standard/step-form/ElectricMobility";
import RoomModal from "@/components/consumer/standard/step-form/RoomModals";
import WindowModal from "@/components/consumer/standard/step-form/WindowModal";


const BuildingInfo = () => {
  const [step, setStep] = useState(1); // Start at step 1 initially
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
    floorLength: "",
    floorBreadth: "",
    roofType: "",
    indoorTemperature: "",
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showWallModal, setShowWallModal] = useState(false);
  const [selectedDirection, setSelectedDirection] = useState("");
  const [walls, setWalls] = useState<
    { direction: string; length: string; width: string; type: string }[]
  >([]);

  const [showElectricMobilityModal, setShowElectricMobilityModal] = useState(false);
  const [electricMobilityData, setElectricMobilityData] = useState<
    { evCharger: string; powerRating: string; numOfEV: string; charging: string }[]
  >([]);

  const [roomData, setRoomData] = useState<
    { length: string; width: string; height: string; people: string; humidity: string; temp: string; activity: string }[]
  >([]);
  
  const [windowData, setWindowData] = useState<
  { width: string; height: string; type: string }[]
>([]);

  const [showRoomModal, setShowRoomModal] = useState(false);
  const [showWindowModal, setShowWindowModal] = useState(false); // State for WindowModal

  const handleAddElectricMobility = (data: {
    evCharger: string;
    powerRating: string;
    numOfEV: string;
    charging: string;
  }) => {
    setElectricMobilityData([...electricMobilityData, data]);
    setShowElectricMobilityModal(false);
  };

  const handleAddWindow = (length: string, width: string) => {
    setWindowData([...windowData, { width, height: length, type: "Standard" }]); // Add type if needed
    setShowWindowModal(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      commodity: checked
        ? [...prevState.commodity, value]
        : prevState.commodity.filter((item) => item !== value),
    }));
  };

  const isStepOneValid = () => {
    return (
      formData.building &&
      formData.subBuilding &&
      formData.country &&
      formData.street &&
      formData.commodity.length > 0
    );
  };

  const isStepTwoValid = () => {
    return formData.phoneNumber && formData.accountNumber && formData.units;
  };

  const handleSubmit = () => {
    setStep(3);
    setIsModalOpen(false);
  };

  const handleAddWall = (length: string, width: string, type: string) => {
    setWalls([...walls, { direction: selectedDirection, length, width, type }]);
    setShowWallModal(false);
  };

  const handleAddRoom = (data: {
    length: string;
    width: string;
    height: string;
    people: string;
    humidity: string;
    temp: string;
    activity: string;
  }) => {
    setRoomData([...roomData, data]);
    setShowRoomModal(false);
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
  
      {/* Step 3: Wall & Roof Information */}
      {step === 3 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-3">Wall Information</h3>
  
          {/* Display walls for all four directions */}
          {["North", "South", "East", "West"].map((direction) => (
            <div key={direction} className="mb-4">
              <h4 className="text-md font-semibold">{direction}</h4>
              {walls.filter((wall) => wall.direction === direction).length >
              0 ? (
                <div className="space-y-2">
                  {walls
                    .filter((wall) => wall.direction === direction)
                    .map((wall, index) => (
                      <div
                        key={index}
                        className="flex items-center space-x-4 p-2 border rounded-md"
                      >
                        <span>{`Wall ${index + 1}: ${wall.length} x ${
                          wall.width
                        } (${wall.type})`}</span>
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
  
          {/* Roof Information */}
          <div className="mt-6">
            <h3 className="text-lg font-semibold mb-3">Roof Information</h3>
            <div className="grid grid-cols-3 gap-4">
              <input
                type="text"
                name="floorLength"
                value={formData.floorLength}
                onChange={handleChange}
                placeholder="Floor Length"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                name="floorBreadth"
                value={formData.floorBreadth}
                onChange={handleChange}
                placeholder="Floor Breadth"
                className="p-2 border rounded-md"
              />
              <input
                type="text"
                name="roofType"
                value={formData.roofType}
                onChange={handleChange}
                placeholder="Roof Type"
                className="p-2 border rounded-md"
              />
            </div>
          </div>
  
          {/* Navigation Buttons */}
          <div className="mt-6 flex justify-between">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setStep(2)}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setStep(4)}
            >
              Continue
            </button>
          </div>
        </div>
      )}
  
      {/* Step 4: Review & Additional Input */}
      {step === 4 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-3">Review Information</h3>
          <div className="border p-4 rounded-md">
            <p>
              <strong>Building:</strong> {formData.building}
            </p>
            <p>
              <strong>Sub-Building:</strong> {formData.subBuilding}
            </p>
            <p>
              <strong>Country:</strong> {formData.country}
            </p>
            <p>
              <strong>Street:</strong> {formData.street}
            </p>
            <p>
              <strong>Phone Number:</strong> {formData.phoneNumber}
            </p>
            <p>
              <strong>Account Number:</strong> {formData.accountNumber}
            </p>
            <p>
              <strong>Units:</strong> {formData.units}
            </p>
            <p>
              <strong>Number of Occupants:</strong> {formData.commodity.length}
            </p>
          </div>
  
          {/* Indoor Temperature */}
          <div className="mt-4">
            <label className="block text-sm font-medium">Indoor (Room) Temperature</label>
            <input
              type="text"
              name="indoorTemperature"
              value={formData.indoorTemperature}
              onChange={handleChange}
              className="p-2 border rounded-md w-full"
            />
          </div>
  
          {/* Electricity Mobility / Vehicle */}
          <div className="mt-4">
            <h3 className="text-md font-semibold">Electricity Mobility / Vehicle</h3>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
              onClick={() => setShowElectricMobilityModal(true)}
            >
              Add
            </button>
  
            {/* Display Electric Mobility Data */}
            {electricMobilityData.length > 0 && (
              <div className="mt-3 p-3 border rounded-md">
                {electricMobilityData.map((ev, index) => (
                  <div key={index} className="p-2 border-b last:border-none">
                    <p><strong>EV Charger:</strong> {ev.evCharger}</p>
                    <p><strong>Power Rating:</strong> {ev.powerRating}</p>
                    <p><strong>Number of EVs:</strong> {ev.numOfEV}</p>
                    <p><strong>Charging:</strong> {ev.charging}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
  
          {/* Continue to Step 5 or Add Room */}
          <div className="mt-6 flex justify-between">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setStep(3)}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setStep(5)}
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Room Information & Window Information */}
      {step === 5 && (
        <div className="mt-4">
          <h3 className="text-lg font-semibold mb-3">Room Information</h3>
          <div className="space-y-3">
            {roomData.map((room, index) => (
              <div key={index} className="p-3 border rounded-md">
                <p><strong>Room {index + 1}</strong></p>
                <p><strong>Dimensions:</strong> {room.length} x {room.width} x {room.height}</p>
                <p><strong>Occupants:</strong> {room.people}</p>
                <p><strong>Humidity:</strong> {room.humidity}</p>
                <p><strong>Temperature:</strong> {room.temp}</p>
                <p><strong>Activity:</strong> {room.activity}</p>
              </div>
            ))}
          </div>

          <button
            className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
            onClick={() => setShowRoomModal(true)}
          >
            Add Room
          </button>

          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-3">Window Information</h3>
            <div className="space-y-3">
              {windowData.map((window, index) => (
                <div key={index} className="p-3 border rounded-md">
                  <p><strong>Window {index + 1}</strong></p>
                  <p><strong>Dimensions:</strong> {window.width} x {window.height}</p>
                  <p><strong>Type:</strong> {window.type}</p>
                </div>
              ))}
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
              onClick={() => setShowWindowModal(true)}
            >
              Add Window
            </button>
          </div>

          {/* Continue to Final Step or Review */}
          <div className="mt-6 flex justify-between">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={() => setStep(4)}
            >
              Previous
            </button>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded"
              onClick={() => setStep(6)} // Assuming step 6 is the final step or review
            >
              Continue
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      {isModalOpen && (
        <Modal closeModal={() => setIsModalOpen(false)} onSubmit={handleSubmit} />
      )}

      {showWallModal && (
        <WallModal
          closeWallModal={() => setShowWallModal(false)}
          onAddWall={handleAddWall}
        />
      )}

      {showElectricMobilityModal && (
        <ElectricMobility
          closeModal={() => setShowElectricMobilityModal(false)}
          onAddElectricMobility={handleAddElectricMobility}
        />
      )}

      {showRoomModal && (
        <RoomModal
          closeRoomModal={() => setShowRoomModal(false)}
          onAddRoom={handleAddRoom}
        />
      )}
      {/* Window Modal */}
      {showWindowModal && (
        <WindowModal
          closeWindowModal={() => setShowWindowModal(false)}
          onAddWindow={handleAddWindow}
        />
      )}
    </div>
  );
};

export default BuildingInfo;