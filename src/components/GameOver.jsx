export default function GameOver({ winner, onClickReamatch }) {

    return (
        <div id="game-over">
            <h2>Game Over</h2>
            {winner ? <p>{winner} Won!</p> : <p>It's A Darw </p>}
            <button onClick={onClickReamatch} >Rematch</button>
        </div>
    )
}
