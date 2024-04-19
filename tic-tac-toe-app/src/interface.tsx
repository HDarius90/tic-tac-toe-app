export interface BoardProps {
  numberOfSquares: number;
  boardState: (number | string)[];
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void ;
}

export interface GameBoardProps {
  boardState: (number | string)[];
}

export interface SquareProps {
  value: string | number;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void ;
}
