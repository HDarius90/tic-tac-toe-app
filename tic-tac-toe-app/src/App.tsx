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
  const defaultBoard  = [0, "X", 2, 3, 4, 5, 6, 7, 8];
  const [board, setBoard] = useState(defaultBoard);

  const nextMove = ComputerMove(board, symbols, difficulty);
  console.log(nextMove);
  

  return (
    <>
      <DifficultyPicker />
      <SideSwitcher />
      <span>Indítsa el a játékot, vagy válasszon játékost</span>
      <GameBoard boardState={board}/>
      <button>Újrajátszás</button>
    </>
  );
}

export default App;
