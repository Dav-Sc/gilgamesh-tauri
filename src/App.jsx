import React, { useState, useEffect } from "react";
import { invoke } from "@tauri-apps/api/tauri";
import AudioPlayer from './components/AudioPlayer';
import Navbar from "./components/Navbar";




function App() {
  const [audioFile, setAudioFile] = useState(null);
  const [metadata, setMetadata] = useState({});
  const [bookTitle, setBookTitle] = useState("The sound of silence"); // Initial title

  // Function to handle the selected audio file
  const handleAudioFileSelect = (file) => {
    setAudioFile(file);
    localStorage.setItem("audioFile", JSON.stringify(file));
    invoke('my_custom_command', { file: file })

  

  };


  // Retrieve the selected audio file from local storage on component mount
  useEffect(() => {
    const storedFile = localStorage.getItem("audioFile");
    if (storedFile) {
      const parsedFile = JSON.parse(storedFile);

      setAudioFile(parsedFile);
    }

    
  }, []);

  return (
    <body>
      <Navbar onFileSelect={handleAudioFileSelect} />
      <div className="container">
        <h1>Currently Listening To: {bookTitle}</h1>
        <input
          type="file"
          accept=".mp3, .mp4, .m4a, .m4b"
          onChange={(e) => handleAudioFileSelect(e.target.files[0])}
          style={{ display: 'none' }}
        />
        {audioFile && <AudioPlayer src={URL.createObjectURL(new Blob([audioFile], { type: audioFile.type }))} />}
      </div>
    </body>
  );
}

export default App;
