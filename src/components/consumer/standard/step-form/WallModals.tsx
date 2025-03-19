import React, { useState } from "react";
import { GrNext } from "react-icons/gr";

interface WallModalProps {
  closeWallModal: () => void;
  onAddWall: (length: string, width: string, type: string) => void;
}

const WallModal: React.FC<WallModalProps> = ({ closeWallModal, onAddWall }) => {
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");
  const [wallType, setWallType] = useState("");

  const handleSubmit = () => {
    onAddWall(length, width, wallType);
    closeWallModal();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50  bg-gray-50/0 bg-opacity-50 z-20 backdrop-blur-sm">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h3 className="text-xl font-semibold mb-4">Add Wall Information</h3>
        <div className="space-y-4">
          <div>
            <label>Length</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
          </div>
          <div>
            <label>Width</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
            />
          </div>
          <div>
            <label>Wall Type</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              value={wallType}
              onChange={(e) => setWallType(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="bg-[#EAF7E6] text-[#2DAD00] px-4 py-2 rounded"
            onClick={closeWallModal}
          >
            Cancel
          </button>
          <button
            className="bg-[#2DAD00] text-white px-4 py-2 rounded cursor-pointer"
            onClick={handleSubmit}
          >
          <div className="flex items-center gap-1"> Submit <span className=""><GrNext /></span><span className="ml-[-14px]"><GrNext /></span></div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WallModal;