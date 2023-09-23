import React from "react";

const SuccesModal = ({ setIsSuccess }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold mb-4">Success!</h2>
        <p>Your form has been successfully submitted.</p>
        <button
          onClick={() => setIsSuccess(false)}
          className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SuccesModal;
