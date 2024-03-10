import { useState } from "react";

//initialName -> player1, player2
export default function Player({ initialName, symbol }) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    // update value based on previous value using function
    setIsEditing((editing) => !editing);
  }

  function handleChange(event) {
    //get user input value
    setPlayerName(event.target.value);
  }

  // if isEditing is false by default
  let editablePlayerName = <span className="player-name">{playerName}</span>;

  // if isEditing is true
  if (isEditing) {
    editablePlayerName = (
      <input type="text" rquired value={playerName} onChange={handleChange} />
    );
  }

  return (
    <li>
      <span className="player">
        {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
      </span>
    </li>
  );
}
