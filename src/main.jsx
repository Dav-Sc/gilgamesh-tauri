import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AudioPlayer from "./components/AudioPlayer";
import Navbar from "./components/Navbar";
import FileUploader from "./components/FileUploader"
import "./input.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
