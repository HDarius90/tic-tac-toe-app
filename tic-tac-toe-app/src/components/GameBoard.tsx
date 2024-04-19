import { Board } from "./Board";
import styles from "./GameBoard.module.css";

export const GameBoard = () => {
  
    const handleClick = () => {
        console.log('handleClick');        
    }

    return (
      <div className={styles.bacground}>
        <Board numberOfSquares={9} onClick={handleClick}/>
      </div>
    );
};
