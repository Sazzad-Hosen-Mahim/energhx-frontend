import { useState } from "react";
import Step1Form from "@/components/consumer/standard/step-form/Step1Form";
import Step2Form from "@/components/consumer/standard/step-form/Step2Form";
import Modal from "@/components/consumer/standard/step-form/Modal";
import WallModal from "@/components/consumer/standard/step-form/WallModals";
import ElectricMobility from "@/components/consumer/standard/step-form/ElectricMobility";
import RoomModal from "@/components/consumer/standard/step-form/RoomModals";
import WindowModal from "@/components/consumer/standard/step-form/WindowModal";
import { IoMdAdd } from "react-icons/io";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";

const BasicBuildingInfo = () => {
  const [step, setStep] = useState(0); // Start at step 1 initially
  const [formData, setFormData] = useState<{
    building: string;
    subBuilding: string;
    country: string;
    street: string;
    commodity: string[];
    phoneNumber: string;
    alternatePhoneNumber: string;
    accountNumber: string;
    units: string;
    floorLength: string;
    floorBreadth: string;
    roofType: string;
    indoorTemperature: string;
  }>({
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

  const [showElectricMobilityModal, setShowElectricMobilityModal] =
    useState(false);
  const [electricMobilityData, setElectricMobilityData] = useState<
    {
      evCharger: string;
      powerRating: string;
      numOfEV: string;
      charging: string;
    }[]
  >([]);

  const [roomData, setRoomData] = useState<
    {
      length: string;
      width: string;
      height: string;
      people: string;
      humidity: string;
      temp: string;
      activity: string;
    }[]
  >([]);

  const [windowData, setWindowData] = useState<
    { width: string; height: string; type: string }[]
  >([]);

  const [showRoomModal, setShowRoomModal] = useState(false);
  const [showWindowModal, setShowWindowModal] = useState(false); // State for WindowModal

  //edit wall information
  const [editMode, setEditMode] = useState(false);

  const [editedWall, setEditedWall] = useState<Wall | null>(null);

  const [tempLength, setTempLength] = useState("");
  const [tempWidth, setTempWidth] = useState("");
  const [tempType, setTempType] = useState("");

  interface Wall {
    direction: string;
    length: string;
    width: string;
    type: string;
  }

  const handleEditClick = (wall: Wall): void => {
    setEditedWall(wall);
    setTempLength(wall.length);
    setTempWidth(wall.width);
    setTempType(wall.type);
    setEditMode(true);
  };

  const handleSaveClick = () => {
    // updateWall(editedWall, {
    //   length: tempLength,
    //   width: tempWidth,
    //   type: tempType,
    // });
    setEditMode(false);
    setEditedWall(null);
  };

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
    return !!(
      formData.building &&
      formData.subBuilding &&
      formData.country &&
      formData.street &&
      formData.commodity.length > 0
    );
  };

  const isStepTwoValid = () => {
    return !!(formData.phoneNumber && formData.accountNumber && formData.units);
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

      {/* step 0: terms and conditon modal */}
      {step === 0 && (
        <Modal
          closeModal={() => {
            setIsModalOpen(false);
            setStep(1);
          }}
          onSubmit={() => {
            setIsModalOpen(false);
            setStep(1);
          }}
        />
      )}

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
        <div className="mt-4 ">
          <h3 className="text-lg  mb-5">Wall Information</h3>

          {/* Display walls for all four directions */}
          {["North", "South", "East", "West"].map((direction) => (
            <div key={direction} className="mb-4">
              <div className="flex items-center gap-4">
                <h4 className="text-md w-20">{direction}</h4>
                {walls.filter((wall) => wall.direction === direction).length >
                0 ? (
                  <div className="space-y-2">
                    {walls
                      .filter((wall) => wall.direction === direction)
                      .map((wall, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-4 p-2 border rounded-md cursor-pointer"
                          onClick={() => handleEditClick(wall)} // Enable edit mode on click
                        >
                          {editMode && editedWall === wall ? (
                            <div className="space-y-2">
                              <div className="flex items-center gap-2">
                                <label>Length:</label>
                                <input
                                  type="text"
                                  value={tempLength}
                                  onChange={(e) =>
                                    setTempLength(e.target.value)
                                  }
                                  className="border rounded-md p-1 w-20"
                                />
                              </div>
                              <div className="flex items-center gap-2">
                                <label>Width:</label>
                                <input
                                  type="text"
                                  value={tempWidth}
                                  onChange={(e) => setTempWidth(e.target.value)}
                                  className="border rounded-md p-1 w-20"
                                />
                              </div>
                              <div className="flex items-center gap-2">
                                <label>Type:</label>
                                <input
                                  type="text"
                                  value={tempType}
                                  onChange={(e) => setTempType(e.target.value)}
                                  className="border rounded-md p-1 w-20"
                                />
                              </div>
                              <button
                                className="bg-blue-500 text-white px-4 py-2 rounded mt-2"
                                onClick={handleSaveClick}
                              >
                                Save
                              </button>
                            </div>
                          ) : (
                            <div className=" flex flex-col gap-3 w-[300px] h-[150px] bg-gray-100 pt-3 pl-6 ">
                              <p className="">
                                <strong>Length:</strong> {wall.length}m
                              </p>
                              <p>
                                <strong>Width:</strong> {wall.width}m
                              </p>
                              <p>
                                <strong>Wall Type:</strong> {wall.type}
                              </p>
                              <p className="text-sm text-gray-500">
                                Click to edit
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                  </div>
                ) : (
                  <button
                    className="bg-[#2DAD00] text-white px-4 py-2 rounded "
                    onClick={() => {
                      setSelectedDirection(direction);
                      setShowWallModal(true);
                    }}
                  >
                    <div className="flex items-center gap-1">
                      Add{" "}
                      <span>
                        <IoMdAdd />
                      </span>
                    </div>
                  </button>
                )}
              </div>
            </div>
          ))}

          {/* Roof Information */}
          <div className="mt-6 w-[80%]">
            <h3 className="text-lg font-semibold mb-3 mt-10">
              Roof Information
            </h3>
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
          <div className="mt-6 flex gap-4">
            <button
              className="bg-[#EAF7E6] text-[#2DAD00] px-4 py-2 rounded"
              onClick={() => setStep(2)}
            >
              <div className="flex items-center gap-1">
                {" "}
                <span className="">
                  <GrPrevious />
                </span>
                Previous
              </div>
            </button>
            <button
              className="bg-[#2DAD00] text-white px-4 py-2 rounded"
              onClick={() => setStep(4)}
            >
              <div className="flex items-center gap-1">
                {" "}
                continue{" "}
                <span className="">
                  <GrNext />
                </span>
                <span className="ml-[-14px]">
                  <GrNext />
                </span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Review & Additional Input */}
      {step === 4 && (
        <div className="mt-4">
          {/* <h3 className="text-lg font-semibold mb-3">Review Information</h3> */}
          <div className="p-4 rounded-md flex flex-col gap-4">
            {/* <h3 className="text-lg font-semibold mb-2">Building Information</h3> */}
            <div className="flex flex-col gap-6">
              {/* Building */}
              <div className="flex gap-4">
                <span className="w-48 text-[#758179]">Building</span>
                <span>: {formData.building}</span>
              </div>

              {/* Sub Building */}
              <div className="flex gap-4">
                <span className="w-48 text-[#758179]">Sub Building</span>
                <span>: {formData.subBuilding}</span>
              </div>

              {/* Country */}
              <div className="flex gap-4">
                <span className="w-48 text-[#758179]">Country</span>
                <span>: {formData.country}</span>
              </div>

              {/* Street Number */}
              <div className="flex gap-4">
                <span className="w-48 text-[#758179]">Street</span>
                <span>: {formData.street}</span>
              </div>

              {/* Street Address */}
              <div className="flex gap-4">
                <span className="w-48 text-[#758179]">Phone Number</span>
                <span>: {formData.phoneNumber}</span>
              </div>

              {/* City */}
              <div className="flex gap-4">
                <span className="w-48 text-[#758179]">Account Number</span>
                <span>: {formData.accountNumber}</span>
              </div>

              {/* Postal Code */}
              <div className="flex gap-4">
                <span className="w-48 text-[#758179]">Units</span>
                <span>: {formData.units}</span>
              </div>

              {/* Number of Occupants */}
              <div className="flex gap-4">
                <span className="w-48 text-[#758179]">Number of Occupants</span>
                <span>: {formData.commodity.length}</span>
              </div>
            </div>
          </div>

          {/* Indoor Temperature */}
          <div className="mt-4">
            <label className="block text-sm font-medium pb-4">
              Indoor (Room) Temperature
            </label>
            <input
              type="text"
              name="indoorTemperature"
              value={formData.indoorTemperature}
              onChange={handleChange}
              className="p-2 border rounded-md w-[30%]"
            />
          </div>

          {/* Electricity Mobility / Vehicle */}
          <div className="mt-4">
            <h3 className="text-md font-semibold">
              Electricity Mobility / Vehicle
            </h3>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded mt-2"
              onClick={() => setShowElectricMobilityModal(true)}
            >
              <div className="flex items-center gap-1">
                Add{" "}
                <span>
                  <IoMdAdd />
                </span>
              </div>
            </button>

            {/* Display Electric Mobility Data */}
            {electricMobilityData.length > 0 && (
              <div className="mt-3 p-3 bg-gray-300 rounded-md w-[40%]">
                {electricMobilityData.map((ev, index) => (
                  <div key={index} className="p-2 border-b last:border-none">
                    <p>
                      <strong>EV Charger:</strong> {ev.evCharger}
                    </p>
                    <p>
                      <strong>Power Rating:</strong> {ev.powerRating}
                    </p>
                    <p>
                      <strong>Number of EVs:</strong> {ev.numOfEV}
                    </p>
                    <p>
                      <strong>Charging:</strong> {ev.charging}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Continue to Step 5 or Add Room */}
          <div className="mt-6 flex gap-4">
            <button
              className="bg-[#EAF7E6] text-[#2DAD00] px-4 py-2 rounded"
              onClick={() => setStep(3)}
            >
              <div className="flex items-center gap-1">
                {" "}
                <span className="">
                  <GrPrevious />
                </span>
                Previous
              </div>
            </button>
            <button
              className="bg-[#2DAD00] text-white px-4 py-2 rounded"
              onClick={() => setStep(5)}
            >
              <div className="flex items-center gap-1">
                {" "}
                continue{" "}
                <span className="">
                  <GrNext />
                </span>
                <span className="ml-[-14px]">
                  <GrNext />
                </span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Step 5: Room Information & Window Information */}
      {step === 5 && (
        <div className="mt-12">
          <h3 className="text-lg font-semibold mb-3">Room Information</h3>
          <div className="space-y-3">
            {roomData.map((room, index) => (
              <div key={index} className="p-3 bg-gray-300 w-[30%] rounded-md">
                <p>
                  <strong>Room {index + 1}</strong>
                </p>
                <p>
                  <strong>Dimensions:</strong> {room.length} x {room.width} x{" "}
                  {room.height}
                </p>
                <p>
                  <strong>Occupants:</strong> {room.people}
                </p>
                <p>
                  <strong>Humidity:</strong> {room.humidity}
                </p>
                <p>
                  <strong>Temperature:</strong> {room.temp}
                </p>
                <p>
                  <strong>Activity:</strong> {room.activity}
                </p>
              </div>
            ))}
          </div>

          <button
            className="bg-[#2DAD00] text-white px-4 py-2 rounded mt-2"
            onClick={() => setShowRoomModal(true)}
          >
            <div className="flex items-center gap-1 ">
              Add
              <span>
                <IoMdAdd />
              </span>
            </div>
          </button>

          <div className="mt-10">
            <h3 className="text-lg font-semibold mb-3">Window Information</h3>
            <div className="space-y-3">
              {windowData.map((window, index) => (
                <div
                  key={index}
                  className="p-3 bg-gray-300 w-[30%]  rounded-md"
                >
                  <p>
                    <strong>Window {index + 1}</strong>
                  </p>
                  <p>
                    <strong>Dimensions:</strong> {window.width} x{" "}
                    {window.height}
                  </p>
                  <p>
                    <strong>Type:</strong> {window.type}
                  </p>
                </div>
              ))}
            </div>
            <button
              className="bg-[#2DAD00] text-white px-4 py-2 rounded mt-2"
              onClick={() => setShowWindowModal(true)}
            >
              <div className="flex items-center gap-1 ">
                Add
                <span>
                  <IoMdAdd />
                </span>
              </div>
            </button>
          </div>

          {/* Continue to Final Step or Review */}
          <div className="mt-16 flex gap-6">
            <button
              className="bg-[#EAF7E6] text-[#2DAD00] px-4 py-2 rounded"
              onClick={() => setStep(4)}
            >
              <div className="flex items-center gap-1">
                {" "}
                <span className="">
                  <GrPrevious />
                </span>
                Previous
              </div>
            </button>
            <button
              className="bg-[#2DAD00] text-white px-4 py-2 rounded"
              onClick={() => setStep(6)} // Assuming step 6 is the final step or review
            >
              <div className="flex items-center gap-1">
                {" "}
                continue{" "}
                <span className="">
                  <GrNext />
                </span>
                <span className="ml-[-14px]">
                  <GrNext />
                </span>
              </div>
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      {isModalOpen && (
        <Modal
          closeModal={() => setIsModalOpen(false)}
          onSubmit={handleSubmit}
        />
      )}

      {showWallModal && (
        <WallModal
          closeWallModal={() => setShowWallModal(false)}
          onAddWall={handleAddWall}
        />
      )}

      {showElectricMobilityModal && (
        <ElectricMobility
          closeElectricMobilityModal={() => setShowElectricMobilityModal(false)} // Updated prop name
          onAddElectricMobility={handleAddElectricMobility}
        />
      )}

      {showRoomModal && (
        <RoomModal
          closeModal={() => setShowRoomModal(false)}
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

export default BasicBuildingInfo;
// function updateWall(
//   editedWall: Wall | null,
//   updatedValues: { length: string; width: string; type: string }
// ) {
//   if (!editedWall) return;

//   setWalls((prevWalls) =>
//     prevWalls.map((wall) =>
//       wall === editedWall ? { ...wall, ...updatedValues } : wall
//     )
//   );
// }
