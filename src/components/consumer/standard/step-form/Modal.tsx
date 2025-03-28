import React, { useState } from "react";
import { GrNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom"; // Import useNavigate

interface ModalProps {
  closeModal: () => void;
  onSubmit: () => void;
}


const Modal: React.FC<ModalProps> = ({ closeModal, onSubmit }) => {
  const navigate = useNavigate(); // Initialize useNavigate


  // State to track checkbox status
  const [isCheckbox1Checked, setIsCheckbox1Checked] = useState(false);
  const [isCheckbox2Checked, setIsCheckbox2Checked] = useState(false);

  // Function to handle form submission
  const handleSubmit = () => {
    if (isCheckbox1Checked && isCheckbox2Checked) {
      onSubmit(); // Call the onSubmit prop if both checkboxes are checked
    } else {
      alert("Please agree to both terms and conditions before continuing."); // Optional: Show an alert if checkboxes are not checked
    }
  };

  // Function to handle modal close and navigate to /dashboard
  const handleClose = () => {
    closeModal(); // Close the modal
    navigate("/consumer/dashboard"); // Navigate to /dashboard
  };

  return (
    <>
      {/* Background Overlay */}
      <div className="fixed inset-0 bg-gray-50/0 bg-opacity-50 z-20 backdrop-blur-sm"></div>

      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center z-50 ml-24">
        <div className="bg-white p-6 rounded shadow-lg w-200">
          <h3 className="text-2xl mb-4 font-bold">
            Building Terms & Conditions
          </h3>
          <div className="space-y-4">
            <label>
              <input
                type="checkbox"
                required
                checked={isCheckbox1Checked}
                onChange={(e) => setIsCheckbox1Checked(e.target.checked)} // Update state when checkbox is toggled
              />
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
              <input
                type="checkbox"
                required
                checked={isCheckbox2Checked}
                onChange={(e) => setIsCheckbox2Checked(e.target.checked)} // Update state when checkbox is toggled
              />
              <span className="pl-2">
                By clicking the “Submit” Button, you will be electrically
                signing this application effective. If Energhx approves your
                Application, the agreement between the parties will take effect
                as of that date.
              </span>
            </label>
          </div>

          {/* Buttons */}
          <div className="flex gap-6 mt-4">
            <button
              className="bg-gray-500 text-white px-4 py-2 rounded"
              onClick={handleClose} // Call handleClose when cancel button is clicked
            >
              Cancel
            </button>
            <button
              className={`bg-[#2DAD00] text-white px-4 py-2 rounded ${
                !isCheckbox1Checked || !isCheckbox2Checked
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              onClick={handleSubmit}
              disabled={!isCheckbox1Checked || !isCheckbox2Checked} // Disable button if either checkbox is unchecked
            >
              <div className="flex items-center gap-1">
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
      </div>
    </>
  );
};

export default Modal;
