import { useState } from "react";

const initialBoard = () => Array(9).fill(null);

const useTicTacToe = () => {
  const [board, setBoard] = useState(initialBoard());
  const [isNext, setIsNext] = useState(true);

  const winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  // calculate which player is win
  const calculateWinner = (currentBoard) => {
    let i;
    for (i = 0; i < winningPatterns.length; i++) {
      const [a, b, c] = winningPatterns[i];

      if (
        currentBoard[a] &&
        currentBoard[a] === currentBoard[b] &&
        currentBoard[a] === currentBoard[c]
      ) {
        return currentBoard[a];
      }
    }

    return;
  };

  const handleClick = (index) => {
    // chelck winner
    const winner = calculateWinner(board);

    if (winner || board[index]) return;

    const newBoard = [...board];
    newBoard[index] = isNext ? "X" : "O";
    setBoard(newBoard);
    setIsNext(!isNext);
  };

  const getStatusMessage = () => {
    const winner = calculateWinner(board);
    if (winner) return `player ${winner} wins`;
    if (!board.includes(null)) return "It's a draw!";

    return `Player ${isNext ? "X" : "O"} turn `;
  };

  const resetGame = () => {
    setBoard(initialBoard());
    setIsNext(true);
  };

  return {
    board,
    calculateWinner,
    handleClick,
    getStatusMessage,
    resetGame,
  };
};

export default useTicTacToe;
