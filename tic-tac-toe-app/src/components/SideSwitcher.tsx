import styles from './SideSwitcher.module.css'

export const SideSwitcher = () => {
  return (
    <div className={styles.sideSwitcher}>
      <div className={`${styles.card} ${styles.selected}`}>X</div>
      <div className={styles.card}>O</div>
    </div>
  );
};
