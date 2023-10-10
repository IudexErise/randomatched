import Image from 'next/image';
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

  let player1 = `https://storage.googleapis.com/randomatched/cardBacksRu/${hero1}.png`;
  let player2 = `https://storage.googleapis.com/randomatched/cardBacksRu/${hero2}.png`;
  let player3 = `https://storage.googleapis.com/randomatched/cardBacksRu/${hero3}.png`;
  let player4 = `https://storage.googleapis.com/randomatched/cardBacksRu/${hero4}.png`;
  let cardWidth = 160;
  let cardHeight = 240

  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <div className={styles.images}>
          <div className={styles.card}>
            <Image src={player1} alt='' width={cardWidth} height={cardHeight} />
            <div>{hero1}</div>
          </div>
          <div className={styles.vs}>VS</div>
          <div className={styles.card}>
            <Image src={player2} alt='' width={cardWidth} height={cardHeight} />
            <div>{hero2}</div>
          </div>
          {hero3 &&
            <div className={styles.vs}>VS</div>
          }
          {hero3 &&
            <div className={styles.card}>
              <Image src={player3} alt='' width={cardWidth} height={cardHeight} />
              <div>{hero3}</div>
            </div>
          }
          {hero4 &&
            <div className={styles.vs}>VS</div>
          }
          {hero4 &&
            <div className={styles.card}>
              <Image src={player4} alt='' width={cardWidth} height={cardHeight} />
              <div>{hero4}</div>
            </div>
          }
        </div>
        <div className={styles.battlefield}><b>Поле боя:</b> {battlefield}</div>
        <div className={styles.buttons}>
          <Button text='Еще раз' onClick={() => handleRandom(playersNumber)} />
          <Button onClick={() => handleReset()} text='Сбросить' />
          <Button text='Закрыть' onClick={() => setShowModal(false)} />
        </div>
      </div>
    </div>
  )
}
