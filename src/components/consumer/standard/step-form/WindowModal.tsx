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
    <div className="modal">
      <h3>Add Window Information</h3>
      <input
        type="text"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        placeholder="Length"
      />
      <input
        type="text"
        value={width}
        onChange={(e) => setWidth(e.target.value)}
        placeholder="Width"
      />
      <div className="mt-3">
        <button onClick={handleSubmit}>Add Window</button>
        <button onClick={closeWindowModal}>Cancel</button>
      </div>
    </div>
  );
};

export default WindowModal;