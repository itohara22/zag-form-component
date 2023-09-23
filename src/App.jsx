import React, { useState } from "react";
import Form from "./components/Form";
import FileContents from "./components/FileContents";
import SuccesModal from "./components/SuccesModal";

const App = () => {
  const [fileContent, setFileContent] = useState(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleFileUpload = (content) => {
    setFileContent(content);
  };

  return (
    <div className="mx-auto h-screen w-[100vw] max-w-[415px] pt-10 px-5 ">
      {isSuccess && <SuccesModal setIsSuccess={setIsSuccess} />}
      <Form handleFileUpload={handleFileUpload} setIsSuccess={setIsSuccess} />
      {fileContent !== null && <FileContents fileContent={fileContent} />}
    </div>
  );
};

export default App;
