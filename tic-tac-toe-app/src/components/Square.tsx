import { SquareProps } from "../interface";
import styles from "./Square.module.css";

export const Square: React.FC<SquareProps> = ({ onClick }) => {
  return (
    <button className={styles.square} onClick={onClick}>
      asd
    </button>
  );
};
