import { useState } from "react";
import "./App.css";
import { DifficultyPicker } from "./components/DifficultyPicker";
import { GameBoard } from "./components/GameBoard";
import { SideSwitcher } from "./components/SideSwitcher";
import Minimax from "tic-tac-toe-minimax";

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

  const handleClick = async (index: number) => {
    if (board[index] === huPlayer) return; // Ignore if already played by human

    const updatedBoard = [...board];
    updatedBoard[index] = huPlayer;
    setBoard(updatedBoard);
    await new Promise((resolve) => setTimeout(resolve, 100));

    // Apply computer's move to the board
    try {
      const move = await ComputerMove(updatedBoard, symbols, difficulty);
      const newUpdatedBoard = [...updatedBoard]; // Create a new copy of the updated board
      newUpdatedBoard[move] = aiPlayer; // Apply AI player's move
      setBoard(newUpdatedBoard); // Update board state with AI player's move
    } catch (error) {
      console.error("Error fetching computer move:", error);
    }
  };

  return (
    <>
      <DifficultyPicker />
      <SideSwitcher />
      <span>Indítsa el a játékot, vagy válasszon játékost</span>
      <GameBoard boardState={board} handleClick={handleClick} />
      <button onClick={() => setBoard(defaultBoard)}>Újrajátszás</button>
    </>
  );
}

export default App;
