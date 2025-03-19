import React, { useState } from 'react';

interface RoomModalProps {
  closeModal: () => void;
  onAddRoom: (data: { length: string; width: string; height: string; people: string; humidity: string; temp: string; activity: string }) => void;
}

const RoomModal: React.FC<RoomModalProps> = ({ closeModal, onAddRoom }) => {
  const [length, setLength] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [people, setPeople] = useState('');
  const [humidity, setHumidity] = useState('');
  const [temp, setTemp] = useState('');
  const [activity, setActivity] = useState('');

  const handleSubmit = () => {
    onAddRoom({ length, width, height, people, humidity, temp, activity });
    closeModal();
  };

  return (
    <div className="fixed  bg-opacity-50 flex justify-center items-center  inset-0 bg-gray-50/0 bg-opacity-50 z-20 backdrop-blur-sm">
      <div className=" p-6 rounded-lg w-[40%]">
        <h3 className="text-lg font-semibold mb-4">Add Room Information</h3>
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
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Height</label>
            <input
              type="text"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Enter Here"
              className="p-2 border rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">No of People</label>
            <input
              type="text"
              value={people}
              onChange={(e) => setPeople(e.target.value)}
              placeholder="Enter Here"
              className="p-2 border rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Relative Humidity</label>
            <input
              type="text"
              value={humidity}
              onChange={(e) => setHumidity(e.target.value)}
              placeholder="Enter Here"
              className="p-2 border rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Indoor Temperature</label>
            <input
              type="text"
              value={temp}
              onChange={(e) => setTemp(e.target.value)}
              placeholder="Enter Here"
              className="p-2 border rounded-md"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm text-gray-600">Room Activity</label>
            <select
              value={activity}
              onChange={(e) => setActivity(e.target.value)}
              className="p-2 border rounded-md"
            >
              <option value="">Select Activity</option>
              <option value="Living">Living</option>
              <option value="Office">Office</option>
              <option value="Storage">Storage</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={closeModal}
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

export default RoomModal;