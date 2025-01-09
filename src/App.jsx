import { useState } from "react"
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"

function App() {
  const [activePlayer, setActivePlayer] = useState('X');

  function handleSelectSquer() {
    setActivePlayer((prevPlayer) => prevPlayer === 'X' ? 'O' : 'X');
  }

  return (<main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player initialName='Player 2' symbol='O' isActive={activePlayer === 'O'} />
        <Player initialName='Player 1' symbol='X' isActive={activePlayer === 'X'} />
      </ol>
      <GameBoard activeSymbolPlayer={activePlayer} onSelect={handleSelectSquer} />
    </div>
  </main>

  )

}

export default App
