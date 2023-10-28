import React, { useState, useEffect } from "react"; // Import React here

import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
// import "./App.css";
import AudioPlayer from './components/AudioPlayer';
import Navbar from "./components/Navbar";


// import audioFile from './audio/First.mp4'; // Import the MP3 file
const audioFile = '';
const BookTitle = "Gaunts Ghost";

function App() {
  const [audioFile, setAudioFile] = useState(null);

  // Function to handle the selected audio file
  const handleAudioFileSelect = (file) => {
    setAudioFile(file);
    localStorage.setItem("audioFile", JSON.stringify(file));
  };

  // Retrieve the selected audio file from local storage on component mount
  useEffect(() => {
    const storedFile = localStorage.getItem("audioFile");
    if (storedFile) {
      setAudioFile(JSON.parse(storedFile));
    }
  }, []);

  return (


    <body >
        <Navbar onFileSelect={handleAudioFileSelect} />
        <div className="container" >
          <h1>Currently Listening To: {BookTitle}</h1>
          <input
            type="file"
            accept=".mp3, .mp4"
            onChange={(e) => handleAudioFileSelect(e.target.files[0])}
            style={{ display: 'none' }}
          />
          {audioFile && <AudioPlayer src={URL.createObjectURL(new Blob([audioFile], { type: audioFile.type }))} />}
        </div>
      </body>

  );
}

export default App;
