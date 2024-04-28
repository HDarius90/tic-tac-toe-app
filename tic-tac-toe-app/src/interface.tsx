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
