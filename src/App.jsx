import { useState } from "react"
import GameBoard from "./components/GameBoard.jsx"
import Player from "./components/Player.jsx"
import Log from "./components/Log.jsx";
import { WINNING_COMBINATIONS } from "./WININNIG_COMBANTIONS.JS";
import GameOver from "./components/GameOver.jsx";

const initial_Game_State = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];
const PLAYERS = {
  X: 'player 1',
  O: 'player 2',
}

function handelPlayer(gameTurnsState) {
  let currentPlayer = 'X';

  if (gameTurnsState.length > 0 && gameTurnsState[0].player === 'X') {
    currentPlayer = 'O';
  }
  return currentPlayer;
}
function deriveWinner(gameBoard, playersState) {
  let winner;

  for (const winCombination of WINNING_COMBINATIONS) {
    const firstSquareSymbol = gameBoard[winCombination[0].row][winCombination[0].column];
    const secondSquareSymbol = gameBoard[winCombination[1].row][winCombination[1].column];
    const thirdSquareSymbol = gameBoard[winCombination[2].row][winCombination[2].column];

    if (firstSquareSymbol && secondSquareSymbol === firstSquareSymbol && thirdSquareSymbol === secondSquareSymbol) {
      winner = playersState[firstSquareSymbol];
    }
    return winner;

  }
}

function deriveGameBoard(gameTurnsState) {
  let gameBoard = [...initial_Game_State.map(array => [...array])];

  for (let oneTurn of gameTurnsState) {
    const { square, player } = oneTurn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }
  return gameBoard;
}
function App() {
  const [gameTurnsState, setgameTurns] = useState([]);
  const [playersState, setPlayersState] = useState(PLAYERS);

  const activePlayer = handelPlayer(gameTurnsState);
  const gameBoard = deriveGameBoard(gameTurnsState)
  const winner = deriveWinner(gameBoard, playersState)
  const draw = gameTurnsState.length === 9 && !winner;
  function handleSelectSquer(rowIndex, colIndex) {

    setgameTurns(prevGameTurns => {
      const activePlayer = handelPlayer(prevGameTurns);

      const updateTurns = [
        { square: { row: rowIndex, col: colIndex }, player: activePlayer },
        ...prevGameTurns,
      ];

      return updateTurns;

    })

  }
  function handleRematch() {
    setgameTurns([]);
  }

  function handelPlayersStateNameChanged(symbol, newName) {
    setPlayersState(previewPlayersState => {
      return {
        ...previewPlayersState,
        [symbol]: newName
      }
    })
  }
  return (<main>
    <div id="game-container">
      <ol id="players" className="highlight-player">
        <Player onChangeName={handelPlayersStateNameChanged} initialName={PLAYERS.X} symbol='O' isActive={activePlayer === 'O'} />
        <Player onChangeName={handelPlayersStateNameChanged} initialName={PLAYERS.O} symbol='X' isActive={activePlayer === 'X'} />
      </ol>
      {(winner || draw) && <GameOver onClickReamatch={handleRematch} winner={winner} />}
      <GameBoard
        board={gameBoard}
        onSelect={handleSelectSquer}
      />
    </div>
    <Log turns={gameTurnsState} />
  </main>

  )

}

export default App
