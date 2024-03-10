import { useState } from "react";

export default function Player({ name, symbol }) {
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing(true);
  }

  // if isEditing is false by default
  let playerName = <span className="player-name">{name}</span>;

  // if isEditing is true
  if (isEditing) {
    playerName = <input type="text" rquired />;
  }

  return (
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClick}>Edit</button>
      </span>
    </li>
  );
}
