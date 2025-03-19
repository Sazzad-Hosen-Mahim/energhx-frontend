import React, { useState } from 'react';

interface WindowModalProps {
  closeWindowModal: () => void;
  onAddWindow: (length: string, width: string) => void;
}

const WindowModal: React.FC<WindowModalProps> = ({ closeWindowModal, onAddWindow }) => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');

  const handleSubmit = () => {
    if (length && width) {
      onAddWindow(length, width);
      closeWindowModal();
    }
  };

  return (
    <div className=" bg-opacity-50 fixed  bg-opacity-50 flex justify-center items-center  inset-0 bg-gray-50/0 bg-opacity-50 z-20 backdrop-blur-sm">
      <div className="bg-white p-6 rounded-lg w-[40%]">
        <h3 className="text-lg font-semibold mb-4">Add Window Information</h3>
        <div className="space-y-4">
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Length</label>
            <input
              type="text"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              placeholder="Enter Here"
              className="p-2 border rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Width</label>
            <input
              type="text"
              value={width}
              onChange={(e) => setWidth(e.target.value)}
              placeholder="Enter Here"
              className="p-2 border rounded-md"
            />
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={closeWindowModal}
            className="bg-gray-300 text-gray-700 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-[#2DAD00] text-white px-4 py-2 rounded-md"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default WindowModal;