import { useEffect, useState } from 'react';
import { InfoPanelProps } from '../interface';
import styles from './InfoPanel.module.css';

export const InfoPanel: React.FC<InfoPanelProps> = ({
  isGameOver,
  symbols,
  isHuTurn,
}) => {
  const useUpdateText = (props: InfoPanelProps) => {
    const [text, setText] = useState('Start the game or choose your player');
    const [initialProps, setInitialProps] = useState(props);

    useEffect(() => {
      if (props.isGameOver) {
        setText('The game is over');
      } else if (
        props.isGameOver !== initialProps.isGameOver ||
        props.symbols !== initialProps.symbols ||
        props.isHuTurn !== initialProps.isHuTurn
      ) {
        setInitialProps(props); // Update initial props to current props
        if (props.isHuTurn) {
          setText(`${props.symbols.huPlayer} moves next`);
        } else {
          setText(`${props.symbols.aiPlayer} moves next`);
        }
      }
    }, [props, initialProps]);

    return text;
  };

  const text = useUpdateText({ isGameOver, symbols, isHuTurn });

  return (
    <div className={styles.infoPanel}>
      <span>{text}</span>
    </div>
  );
};
