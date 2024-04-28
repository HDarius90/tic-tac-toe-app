import { GameBoardProps } from "../interface";
import { Board } from "./Board";
import styles from "./GameBoard.module.css";

export const GameBoard: React.FC<GameBoardProps> = ({boardState, handleClick}) => {
  
    return (
      <div className={styles.bacground}>
        <Board numberOfSquares={9} boardState={boardState} onClick={handleClick}/>
      </div>
    );
};
