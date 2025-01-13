

export default function GameBoard({ onSelect, board }) {

    return (
        <ol id="game-board">

            {board.map((row, rowIndex) => (

                <li key={rowIndex}>
                    <ol>
                        {row.map((colIsPlayerSymbol, colIndex) => (
                            <li key={colIndex} >
                                <button onClick={() => onSelect(rowIndex, colIndex)} disabled={colIsPlayerSymbol !== null} >{colIsPlayerSymbol}</button>
                            </li>
                        ))}

                    </ol>
                </li>

            ))

            }


        </ol>
    )
}