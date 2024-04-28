import { useEffect, useState } from "react";
import Minimax from "tic-tac-toe-minimax";
import "./App.css";
import { DifficultyPicker } from "./components/DifficultyPicker";
import { GameBoard } from "./components/GameBoard";
import { SideSwitcher } from "./components/SideSwitcher";
import { BoardState } from "./interface";

function App() {
  const { ComputerMove } = Minimax;
  const huPlayer = "X";
  const aiPlayer = "O";
  const symbols = {
    huPlayer: huPlayer,
    aiPlayer: aiPlayer,
  };
  const difficulty = "Hard";
  const defaultBoard: (string | number)[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [board, setBoard] = useState(defaultBoard);
  const [gameOver, setGameOver] = useState([false, ""]);

  useEffect(() => {
    if (hasThreeInARow(board)) {
      setGameOver([true, huPlayer]);
    }
  }, [board]);

  const hasThreeInARow = (board: BoardState) => {
    const winningCombinations = [
      [0, 1, 2], // Top row
      [3, 4, 5], // Middle row
      [6, 7, 8], // Bottom row
      [0, 3, 6], // Left column
      [1, 4, 7], // Middle column
      [2, 5, 8], // Right column
      [0, 4, 8], // Diagonal from top-left to bottom-right
      [2, 4, 6], // Diagonal from top-right to bottom-left
    ];

    for (const combination of winningCombinations) {
      const [a, b, c] = combination;
      const symbols = [board[a], board[b], board[c]];

      // Check if all symbols in the combination are the same and not empty
      if (symbols.every((symbol) => symbol !== "" && symbol === symbols[0])) {
        return true; // Found a winning combination
      }
    }

    return false; // No winning combination found
  };

  const handleClick = async (index: number) => {
    if (board[index] === huPlayer) return; // Ignore if already played by human

    const updatedBoard = [...board];
    updatedBoard[index] = huPlayer;
    setBoard(updatedBoard);
    await new Promise((resolve) => setTimeout(resolve, 500));

    // Apply computer's move to the board
    try {
      const move = await ComputerMove(updatedBoard, symbols, difficulty);
      const newUpdatedBoard = [...updatedBoard]; // Create a new copy of the updated board
      newUpdatedBoard[move] = aiPlayer; // Apply AI player's move
      setBoard(newUpdatedBoard); // Update board state with AI player's move
    } catch (error) {
      console.error("Error fetching computer move:", error);
    }
    hasThreeInARow(board) ? setGameOver([true, huPlayer]) : "";
  };

  return (
    <>
      <DifficultyPicker />
      <SideSwitcher />
      <span>Indítsa el a játékot, vagy válasszon játékost</span>
      <div>
        <GameBoard boardState={board} handleClick={handleClick} />
        {gameOver[0] ? (
          <div className="overlay">
            <p>
              <h1>GAME OVER</h1> <h2>The winner is: {gameOver[1]}</h2>
            </p>
          </div>
        ) : (
          ""
        )}
      </div>
      <button onClick={() => setBoard(defaultBoard)}>Újrajátszás</button>
    </>
  );
}

export default App;
