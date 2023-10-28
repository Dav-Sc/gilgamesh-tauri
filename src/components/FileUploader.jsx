import React from 'react';

const FileUploader = ({ onFileSelect }) => {
  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      onFileSelect(selectedFile);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".mp3, .mp4"
        onChange={handleFileChange}
        style={{ display: 'none' }}
        id="fileInput"
      />
      <label htmlFor="fileInput" className="btn btn-primary">
        Select File
      </label>
    </div>
  );
};

export default FileUploader;
