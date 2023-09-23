import React, { useState } from "react";

function InputForm({ handleFileUpload, setIsSuccess }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      setIsLoading(true);

      const reader = new FileReader();
      reader.onload = (event) => {
        const fileContent = event.target.result;

        //ADDING THIS TO ADD A LOADING ANIMATION
        setTimeout(() => {
          setIsLoading(false);
          setIsDisabled(false);
          handleFileUpload(fileContent);
        }, 2000);
      };
      reader.readAsText(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSuccess(true);
  };

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-semibold mb-4">Input Form</h2>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label
            htmlFor="fullName"
            className="block text-gray-600 font-semibold mb-2"
          >
            Full Name:
          </label>
          <input
            required
            type="text"
            id="fullName"
            value={fullName}
            onChange={handleFullNameChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-gray-600 font-semibold mb-2"
          >
            Email:
          </label>
          <input
            required
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
          />
        </div>

        <div className="mb-4 relative">
          <label
            htmlFor="jsonFile"
            className="block text-gray-600 font-semibold mb-2"
          >
            Upload JSON File:
          </label>
          <input
            type="file"
            id="jsonFile"
            accept=".json"
            onChange={handleFileChange}
            className="w-full px-4 py-8 border rounded-lg focus:outline-none focus:border-blue-400"
          />
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-gray-300 bg-opacity-90 rounded-lg">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500 border-r-2 border-b-2"></div>
            </div>
          )}
        </div>
        <button
          disabled={isDisabled}
          type="submit"
          className={`text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600 ${
            isDisabled ? "bg-blue-200" : "bg-blue-500"
          }`}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default InputForm;
