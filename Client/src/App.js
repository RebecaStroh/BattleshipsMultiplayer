import io from "socket.io-client";
import {useState} from "react";

const socket = io.connect("http://localhost:2000");

function App() {
  const [gameCode, setGameCode] = useState("");

  const joinGame = () => {
    if (gameCode?.length === 0) return;
    socket.emit("joinGame", gameCode);
    alert(`You joined the game: ${gameCode}`);
  }

  return (
    <div>
      <h1> Welcome to BattleShip Multiplayer </h1>
      <h4> Write the code of the game that you want to join </h4>
      <input type="text" placeholder="Type the game code here" onChange={(e)=>{setGameCode(e.target.value)}}/>
      <input type="button" onClick={joinGame} value="Join game"/>
    </div>
  );
}

export default App;
