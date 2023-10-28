import { useState } from "react";
import reactLogo from "./assets/react.svg";
import { invoke } from "@tauri-apps/api/tauri";
import "./App.css";
import AudioPlayer from './components/AudioPlayer';


import audioFile from './audio/First.mp4'; // Import the MP3 file



function App() {


  return (

    <body className="container" >
 

      <div >
        <h1>Currently Listening To:</h1>

        <AudioPlayer
          src={audioFile}
        />
      </div>
    </body>

  );
}

export default App;
