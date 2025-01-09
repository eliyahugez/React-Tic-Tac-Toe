import { useState } from "react";

const initialGameState = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
]
export default function GameBoard({ onSelect, activeSymbolPlayer }) {
    const [gameState, setGameState] = useState(initialGameState);

    function handleGameStateChange(rowIndex, colIndex) {

        setGameState((prevGameState) => {
            const newGameState = [...prevGameState.map(rowArray => [...rowArray])]
            newGameState[rowIndex][colIndex] = activeSymbolPlayer;
            return newGameState;
        });

        onSelect();
    }

    return (
        <ol id="game-board">

            {gameState.map((row, rowIndex) => (

                <li key={rowIndex}>
                    <ol>

                        {row.map((col, colIndex) => (
                            <li key={colIndex} >
                                <button onClick={() => handleGameStateChange(rowIndex, colIndex)} >{col}</button>
                            </li>
                        ))}

                    </ol>
                </li>

            ))

            }


        </ol>
    )
}