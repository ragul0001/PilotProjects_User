"use client";
import React, { useState } from "react";

const FileUploadButton: React.FC = () => {
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files || [];
    setSelectedFiles(Array.from(files));
  };

  return (
    <div className="file-upload items-center">
      <div className="flex mt-3">
        <input
          id="fileInput"
          type="file"
          className="hidden"
          onChange={handleFileChange}
          multiple //Allow multiple files
        />
        <label
          htmlFor="fileInput"
          className="cursor-pointer bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
        >
          Choose File
        </label>
        <span className="ml-2 mt-2">
          {selectedFiles.length > 0
            ? `${selectedFiles.length} files selected`
            : "No file selected"}
        </span>
        <button className="mx-2 cursor-pointer bg-blue-500 text-white px-2 py-1 rounded-md hover:bg-blue-600">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default FileUploadButton;