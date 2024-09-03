import React, { useState } from "react";

// Corrected imports
import Song from "./componets/Song";
import Player from "./componets/Player";
import "./styles/app.scss";

// Assuming data is a function that returns an array
import data from "./util";

function App() {
  const [songs, setSongs] = useState(data()); // Ensure data() is used if data is a function
  const [currentSong, setCurrentSong] = useState(songs[0]);

  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player />
    </div>
  );
}

export default App;

