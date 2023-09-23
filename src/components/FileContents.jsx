import React from "react";

function FileContents({ fileContent }) {
  return (
    <div className="mt-8 w-[90vw] max-w-[400px]">
      <h2>File Contents</h2>
      <pre className="overflow-scroll max-w-full p-4 border-gray-400 border-2">
        {fileContent}
      </pre>
    </div>
  );
}

export default FileContents;
