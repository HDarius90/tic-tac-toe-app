// Board.js
import { Square } from "./Square";
import styles from "./Board.module.css";
import { BoardProps } from "../interface";

export const Board: React.FC<BoardProps> = ({
  numberOfSquares,
  boardState,
  onClick,
}) => {
  // Create an array with 'square' elements
  const elements = Array.from({ length: numberOfSquares }, (_, index) => index);

  return (
    <>
      <div className={styles.board}>
        {elements.map((index) => (
          <Square
            key={index}
            value={boardState[index]}
            onClick={
              typeof boardState[index] === "number"
                ? () => {
                    if (onClick) {
                      onClick(index);
                    }
                  }
                : undefined
            }
          />
        ))}
      </div>
    </>
  );
};
