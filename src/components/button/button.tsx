import styles from './button.module.scss';

interface ButtonProps {
  text: string,
  disabled?: boolean,
  onClick: React.MouseEventHandler<HTMLButtonElement>,
}

export default function Button ({text, disabled, onClick} : ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled} className={styles.button}>
      {text}
    </button>
  )
}