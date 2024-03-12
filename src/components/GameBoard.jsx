import { useState } from "react";

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//pass on switch player function to props
export default function GameBoard({ onSelectSquare }) {
  // const [gameBoard, setGameBoard] = useState(initalGameBoard);

  // function handleSelectSquare(rowIndex, colIndex) {
  //   setGameBoard((preGameBoard) => {
  //     //array of object
  //     const updatedBoard = [
  //       ...preGameBoard.map((innerArray) => [...innerArray]),
  //     ];
  //     updatedBoard[rowIndex][colIndex] = activePlayerSymbol;
  //     return updatedBoard;
  //   });

  //   //switch player
  //   onSelectSquare();
  // }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={onSelectSquare}>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
