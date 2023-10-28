import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
// import "./App.css";
import AudioPlayer from './components/AudioPlayer';
import Navbar from "./components/Navbar";


import audioFile from './audio/First.mp4'; // Import the MP3 file

const BookTitle = "Gaunts Ghost";

function App() {


  return (

    
    <body >
      <Navbar />
 

      <div className="container" >
        
        <h1>Currently Listening To: {BookTitle}</h1>

        <AudioPlayer
          src={audioFile}
        />
      </div>
    </body>

  );
}

export default App;
