import { useState } from "react";

const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

//pass on switch player function to props
export default function GameBoard({ onSelectSquare, turns }) {
  //derived state from gameTurns
  let gameBoard = initalGameBoard;
  for (const turn of turns) {
    const { square, player } = turn;
    const { row, col } = square;

    gameBoard[row][col] = player;
  }

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
