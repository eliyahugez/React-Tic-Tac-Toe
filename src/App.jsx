import { useState } from "react"
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"
import Log from "./components/Log.jsx";

function App() {
  const [gameTurns, setgameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquer(rowIndex, colIndex) {

    setActivePlayer((prevPlayer) => prevPlayer === 'X' ? 'O' : 'X');

    setgameTurns(prevGameTurns => {

      let currentPlayer = 'X';

      if (prevGameTurns.length > 0 && prevGameTurns[0].player === 'X') {
        currentPlayer = 'O';
      }

      const updateTurns = [
        {
          square: { row: rowIndex, col: colIndex }, player: currentPlayer,
          ...prevGameTurns
        }]
      console.log(updateTurns);

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
        onSelect={handleSelectSquer} />
    </div>
    <Log />
  </main>

  )

}

export default App
