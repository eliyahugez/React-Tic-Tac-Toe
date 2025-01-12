import { useState } from "react"
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"
import Log from "./components/Log.jsx";


function handelPlayer(gameTurns) {
  let currentPlayer = 'X';

  if (gameTurns.length > 0 && gameTurns[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}

function App() {
  const [gameTurns, setgameTurns] = useState([]);

  const activePlayer = handelPlayer(gameTurns);

  function handleSelectSquer(rowIndex, colIndex) {


    setgameTurns(prevGameTurns => {
      const activePlayer = handelPlayer(prevGameTurns);

      const updateTurns = [
        {
          square: { row: rowIndex, col: colIndex }, player: activePlayer,
          ...prevGameTurns,
        }];
      console.log(prevGameTurns);

      return updateTurns;

    })
  }

  return (<main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
      </ol>
      <GameBoard
        gameTurns={gameTurns}
        onSelect={handleSelectSquer}
      />
    </div>
    <Log turns={gameTurns} />
  </main>

  )

}

export default App
