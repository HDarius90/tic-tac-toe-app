import { useEffect, useState } from 'react';
import Minimax from 'tic-tac-toe-minimax';
import './App.css';
import { DifficultyPicker } from './components/DifficultyPicker';
import { GameBoard } from './components/GameBoard';
import { SideSwitcher } from './components/SideSwitcher';
import { BoardState } from './interface';

function App() {
  const { ComputerMove } = Minimax;
  const huPlayer = 'X';
  const aiPlayer = 'O';
  const symbols = {
    huPlayer: huPlayer,
    aiPlayer: aiPlayer,
  };
  const difficulty = 'Easy';
  const defaultBoard: (string | number)[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [board, setBoard] = useState(defaultBoard);
  const [isHuTurn, setIsHuTurn] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    const aiMove = async (board: BoardState) => {
      try {
        const move = await ComputerMove(board, symbols, difficulty);
        const newBoard = [...board];
        newBoard[move] = aiPlayer;
        setBoard(newBoard);
        setIsHuTurn(true); // Set it to human's turn after AI move
      } catch (error) {
        console.error('Error fetching computer move:', error);
      }
    };

    const checkGameOver = (board: BoardState) => {
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

        if (symbols.every((symbol) => symbol !== '' && symbol === symbols[0])) {
          return true;
        }
      }

      return false;
    };

    checkGameOver(board)
      ? (setIsGameOver(true), setWinner(isHuTurn ? aiPlayer : huPlayer))
      : !isGameOver && !isHuTurn
      ? setTimeout(() => {
          aiMove(board);
        }, 500)
      : null;
  }, [board]);

  const handleClick = async (index: number) => {
    if (isGameOver) return; // Ignore if game is over
    if (board[index] === huPlayer || board[index] === aiPlayer) return; // Ignore if already played
    const updatedBoard = [...board];
    updatedBoard[index] = huPlayer;
    setBoard(updatedBoard);
    setIsHuTurn(false); // Set it to AI's turn after human move
  };

  const handleRestart = () => {
    setBoard(defaultBoard);
    setIsGameOver(false);
    setWinner('');
    setIsHuTurn(true); // Human player starts first after restart
  };

  return (
    <>
      <DifficultyPicker />
      <SideSwitcher />
      <span>Start the game or choose your player</span>
      <div>
        <GameBoard boardState={board} handleClick={handleClick} />
        {isGameOver && (
          <div className="overlay">
            <p>
              <h1>GAME OVER</h1>
              <h2>The winner is: {winner}</h2>
            </p>
          </div>
        )}
      </div>
      <button onClick={handleRestart}>Restart</button>
    </>
  );
}

export default App;
