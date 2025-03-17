import React, { useState } from "react";

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
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 backdrop-blur-lg">
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
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={closeWallModal}
          >
            Cancel
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default WallModal;
