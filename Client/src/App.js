import io from "socket.io-client";
import {useState} from "react";

// Components
import Game from "./components/Game";

const socket = io.connect("http://localhost:2000");

function App() {
  const [gameCode, setGameCode] = useState("");
  const [connected, setConnected] = useState(false);

  const joinGame = () => {
    if (gameCode?.length === 0) {
      alert(`The game code is empty`);
      return;
    }
    socket.emit("joinGame", gameCode);

    setConnected(true);
    alert(`You joined the game: ${gameCode}`);
  }

  return (
    !connected ? 
    <div>
      <h1> Welcome to BattleShip Multiplayer </h1>
      <h4> Write the code of the game that you want to join </h4>
      <input type="text" placeholder="Type the game code here" onChange={(e)=>{setGameCode(e.target.value)}}/>
      <input type="button" onClick={joinGame} value="Join game"/>
    </div>
    :
    <Game code={gameCode}/>
  );
}

export default App;
