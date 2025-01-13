import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setplayerName] = useState(initialName);

    const handleNameChange = (e) => {
        setplayerName(e.target.value);
    }
    const handleEditClick = () => {
        setIsEditing((isEditing) => !isEditing);
        if (isEditing) {
            onChangeName(symbol, playerName)
        }

    }

    let btnConent = 'Edit';
    let playerNameEdit = <span className="player-name" >{playerName}</span>;

    if (isEditing) {
        playerNameEdit = <input type="text" required value={playerName} onChange={handleNameChange} />;
        btnConent = 'Save';
    }

    return (
        <li className={isActive ? 'active' : undefined} >
            <span className="player">

                {playerNameEdit}
                <span className="player-symbol" >{symbol}</span>
            </span>
            <button onClick={handleEditClick} >{btnConent}</button>
        </li>
    )
}