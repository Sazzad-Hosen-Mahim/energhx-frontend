import React from "react";
import { GrNext } from "react-icons/gr";

interface ModalProps {
  closeModal: () => void;
  onSubmit: () => void;
}

const Modal: React.FC<ModalProps> = ({ closeModal, onSubmit }) => {
  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-gray-50/0 bg-opacity-50 z-20 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="bg-white p-6 rounded shadow-lg w-200">
          <h3 className="text-2xl mb-4 font-bold">Building Terms & Conditions</h3>
          <div className="space-y-4">
            <label>
              <input type="checkbox" />
              <span className="pl-2">
                I agree to the Research Ethics policy documents.
              </span>
              <a href="#" className="text-blue-500">
                See Link
              </a>
            </label>
          </div>
          <div className="pt-4">
            <label>
              <input type="checkbox" />
              <span className="pl-2">
                By clicking the “Submit” Button, you will be electrically signing
                this application effective. If Energhx approves your Application,
                the agreement between the parties will take effect as of that date.
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-6 mt-4">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={closeModal}
            >
              Cancel
            </button>
            <button
              className="bg-[#2DAD00] text-white px-4 py-2 rounded"
              onClick={onSubmit}
            >
              <div className="flex items-center gap-1"> continue <span className=""><GrNext /></span><span className="ml-[-14px]"><GrNext /></span></div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;