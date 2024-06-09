import React, { Dispatch, SetStateAction } from 'react';
import { Side } from './types';

export type BoardState = (number | string)[];

export interface BoardProps {
  numberOfSquares: number;
  boardState: (number | string)[];
  onClick?: (index: number) => void;
}

export interface GameBoardProps {
  boardState: (number | string)[];
  handleClick: (index: number) => void;
}

export interface SquareProps {
  value: string | number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface DifficultyPickerProps {
  difficulty: string;
  setDifficulty: Dispatch<SetStateAction<string>>;
}

export interface SideSwitchProps {
  selected: Side;
  switchSide: () => void;
}

export interface InfoPanelProps {
  isGameOver: boolean;
  symbols: {
    huPlayer: Side;
    aiPlayer: Side;
  };
  isHuTurn: boolean;
}
