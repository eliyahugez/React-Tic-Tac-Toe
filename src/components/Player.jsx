import { useState } from "react"

export default function Player({ name, symbol }) {
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        setIsEditing((isEditing) => !isEditing);
    }

    let btnConent = 'Edit';
    let playerName = <span className="player-name" >{name}</span>;
    if (isEditing) {
        playerName = <input type="text" required value={name} />;
        btnConent = 'Save';
    }

    return (
        <li>
            <span className="player">

                {playerName}
                <span className="player-symbol" >{symbol}</span>
            </span>
            <button onClick={handleEditClick} >{btnConent}</button>
        </li>
    )
}