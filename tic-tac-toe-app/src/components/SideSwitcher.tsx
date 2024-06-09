import { SideSwitchProps } from '../interface';
import styles from './SideSwitcher.module.css';

export const SideSwitcher: React.FC<SideSwitchProps> = ({
  selected,
  switchSide,
}) => {
  const clickHandler = () => {
    switchSide();
  };
  return (
    <div className={styles.sideSwitcher}>
      <button
        className={
          selected === 'X'
            ? `${styles.card} ${styles.selected}`
            : `${styles.card}`
        }
      >
        X
      </button>
      <button
        className={
          selected === 'O'
            ? `${styles.card} ${styles.selected}`
            : `${styles.card}`
        }
        onClick={clickHandler}
      >
        O
      </button>
    </div>
  );
};
