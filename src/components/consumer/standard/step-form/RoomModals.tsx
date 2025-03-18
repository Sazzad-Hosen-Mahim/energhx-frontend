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
    <div className="modal">
      <h3>Add Room Information</h3>
      <input type="text" value={length} onChange={(e) => setLength(e.target.value)} placeholder="Length" />
      <input type="text" value={width} onChange={(e) => setWidth(e.target.value)} placeholder="Width" />
      <input type="text" value={height} onChange={(e) => setHeight(e.target.value)} placeholder="Height" />
      <input type="text" value={people} onChange={(e) => setPeople(e.target.value)} placeholder="No of People" />
      <input type="text" value={humidity} onChange={(e) => setHumidity(e.target.value)} placeholder="Relative Humidity" />
      <input type="text" value={temp} onChange={(e) => setTemp(e.target.value)} placeholder="Indoor Temperature" />
      
      {/* Dropdown for Room Activity */}
      <select value={activity} onChange={(e) => setActivity(e.target.value)}>
        <option value="">Select Activity</option>
        <option value="Living">Living</option>
        <option value="Office">Office</option>
        <option value="Storage">Storage</option>
      </select>

      <div className="mt-3">
        <button onClick={handleSubmit}>Add Room</button>
        <button onClick={closeModal}>Cancel</button>
      </div>
    </div>
  );
};

export default RoomModal;
