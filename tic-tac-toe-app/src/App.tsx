import { useEffect, useState } from 'react';
import Minimax from 'tic-tac-toe-minimax';
import './App.css';
import { DifficultyPicker } from './components/DifficultyPicker';
import { SideSwitcher } from './components/SideSwitcher';
import { BoardState } from './interface';
import { Board } from './components/Board';
import { InfoPanel } from './components/InfoPanel';
import { Side } from './types';

function App() {
  const { ComputerMove } = Minimax;
  const [huPlayer, setHuPlayer] = useState<Side>('X');
  const [aiPlayer, setAiPlayer] = useState<Side>('O');
  const [symbols, setSymbols] = useState({
    huPlayer: huPlayer,
    aiPlayer: aiPlayer,
  });
  const [difficulty, setDifficulty] = useState('Easy');
  const defaultBoard: (string | number)[] = [0, 1, 2, 3, 4, 5, 6, 7, 8];
  const [board, setBoard] = useState(defaultBoard);
  const [isHuTurn, setIsHuTurn] = useState(true);
  const [isGameOver, setIsGameOver] = useState(false);
  const [winner, setWinner] = useState('');

  const switchSide = () => {
    setHuPlayer('O');
    setAiPlayer('X');
    setSymbols((prevSymbols) => ({
      huPlayer: 'O',
      aiPlayer: 'X',
    }));
    setIsHuTurn(false);
  };

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
  }, [board, huPlayer]);

  const handleClick = async (index: number) => {
    if (isGameOver) return; // Ignore if game is over
    if (board[index] === huPlayer || board[index] === aiPlayer) return; // Ignore if already played
    const updatedBoard = [...board];
    updatedBoard[index] = huPlayer;
    setBoard(updatedBoard);
    setIsHuTurn(false); // Set it to AI's turn after human move
  };

  const handleRestart = () => {
    window.location.reload()
  };

  return (
    <div className="appContainer">
      <DifficultyPicker difficulty={difficulty} setDifficulty={setDifficulty} />
      <SideSwitcher switchSide={switchSide} selected={huPlayer} />
      <InfoPanel
        isGameOver={isGameOver}
        symbols={symbols}
        isHuTurn={isHuTurn}
      />
      <Board numberOfSquares={9} boardState={board} onClick={handleClick} />
      {isGameOver && (
        <div className="overlay">
          <h1>GAME OVER</h1>
          <h2>The winner is: {winner}</h2>
        </div>
      )}
      <button className="restartButton" onClick={handleRestart}>
        Restart
      </button>
    </div>
  );
}

export default App;
