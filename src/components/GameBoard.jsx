
const initialGameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
export default function GameBoard({ onSelect, gameTurns }) {
    let gameState = initialGameState;

    for (let oneTurn of gameTurns) {
        const { square, player } = oneTurn;
        const { row, col } = square;

        gameState[row][col] = player;
    }

    return (
        <ol id="game-board">

            {gameState.map((row, rowIndex) => (

                <li key={rowIndex}>
                    <ol>

                        {row.map((col, colIndex) => (
                            <li key={colIndex} >
                                <button onClick={() => onSelect(rowIndex, colIndex)} disabled={col !== null} >{col}</button>
                            </li>
                        ))}

                    </ol>
                </li>

            ))

            }


        </ol>
    )
}