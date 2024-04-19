export interface BoardProps {
  numberOfSquares: number;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface SquareProps {
  value: string;
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void;
}
