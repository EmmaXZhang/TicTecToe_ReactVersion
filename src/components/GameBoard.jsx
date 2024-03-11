const initalGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null],
];

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initalGameBoard);

  function handleSelectSquare(rowIndex, colIndex) {
    setGameBoard((preGameBoard) => {
      //array of object
      const updatedBoard = [
        ...preGameBoard.map((innerArray) => [...innerArray]),
      ];
      updatedBoard[rowIndex][colIndex] = "x";
      return updatedBoard;
    });
  }

  return (
    <ol id="game-board">
      {GameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button onClick={() => handleSelectSquare(rowIndex, colIndex)}>
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
