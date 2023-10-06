import Button from '../button/button';
import styles from './resultModal.module.scss';

interface ResultProps {
  hero1: string,
  hero2: string,
  hero3?: string,
  hero4?: string,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  handleRandom(playersCount: number): void,
  playersNumber: number,
  battlefield: string,
  reset(): void 
}

export default function ResultModal({ hero1, hero2, hero3, hero4, setShowModal, handleRandom, playersNumber, battlefield, reset }: ResultProps) {

  const handleReset = () => {
    reset();
    setShowModal(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <div><b>Игрок 1:</b> {hero1}</div>
        <div><b>Игрок 2:</b> {hero2}</div>
        {hero3 && <div><b>Игрок 3:</b> {hero3}</div>}
        {hero4 && <div><b>Игрок 4:</b> {hero4}</div>}
        <div><b>Поле боя:</b> {battlefield}</div>
        <div className={styles.buttons}>
          <Button text='Еще раз' onClick={() => handleRandom(playersNumber)} />
          <Button onClick={() => handleReset()} text='Сбросить' />
          <Button text='Закрыть' onClick={() => setShowModal(false)} />
        </div>
      </div>
    </div>
  )
}