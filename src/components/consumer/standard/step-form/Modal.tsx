import React, { useState } from "react";

interface ModalProps {
  closeModal: () => void;
  onSubmit: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal, onSubmit }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50 backdrop-blur-lg">
      <div className="bg-white p-6 rounded shadow-lg w-96">
        <h3 className="text-xl font-semibold mb-4">
          Terms & Conditions
        </h3>
        <div className="space-y-4">
          <label>
            <input type="checkbox" />
            I agree to the Research Ethics policy documents.{" "}
            <a href="#" className="text-blue-500">
              See Link
            </a>
          </label>
          <label>
            <input type="checkbox" />
            By clicking the “Submit” Button, you will be electrically signing
            this application effective. If Energhx approves your Application,
            the agreement between the parties will take effect as of that date.
          </label>
        </div>

        <div className="flex justify-between mt-4">
          <button
            className="bg-gray-500 text-white px-4 py-2 rounded"
            onClick={closeModal}
          >
            Cancel
          </button>
          <button
            className="bg-green-600 text-white px-4 py-2 rounded"
            onClick={onSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
