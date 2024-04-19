export interface BoardProps {
  numberOfSquares: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface SquareProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
