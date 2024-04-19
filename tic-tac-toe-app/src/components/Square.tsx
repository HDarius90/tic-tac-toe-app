import { SquareProps } from "../interface";
import styles from "./Square.module.css";

export const Square: React.FC<SquareProps> = ({ value, onClick }) => {

  return (
    <button className={styles.square} onClick={onClick}>
      {value === "X" ? (
        <svg width="100" height="100">
          <line
            x1="10"
            y1="10"
            x2="90"
            y2="90"
            stroke="rgb(13, 161, 146)"
            strokeWidth="10"
          />
          <line
            x1="90"
            y1="10"
            x2="10"
            y2="90"
            stroke="rgb(13, 161, 146)"
            strokeWidth="10"
          />
        </svg>
      ) : value === "O" ? (
        <svg width="100" height="100">
          <circle
            cx="50"
            cy="50"
            r="40"
            stroke="rgb(13, 161, 146)"
            stroke-width="10"
            fill="rgb(20, 189, 172)"
          />
          Sorry, your browser does not support inline SVG.
        </svg>
      ) : (
        <div className={styles.empty}></div>
      )}
    </button>
  );
};
