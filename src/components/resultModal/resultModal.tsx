import Image from 'next/image';
import Button from '../button/button';
import styles from './resultModal.module.scss';
import { imgPath } from '@/data/setsData';

interface ResultProps {
  hero1: string,
  hero2: string,
  hero3?: string,
  hero4?: string,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  handleRandom(playersCount: number): void,
  playersNumber: number,
  battlefield?: string,
  reset(): void
}

export default function ResultModal({ hero1, hero2, hero3, hero4, setShowModal, handleRandom, playersNumber, battlefield, reset }: ResultProps) {

  const handleReset = () => {
    reset();
    setShowModal(false);
  }

  let player1 = `${imgPath}/cardBacksRu/${hero1}.png`;
  let player2 = `${imgPath}/cardBacksRu/${hero2}.png`;
  let player3 = `${imgPath}/cardBacksRu/${hero3}.png`;
  let player4 = `${imgPath}/cardBacksRu/${hero4}.png`;
  let map = `${imgPath}/battlefields/${battlefield}.jpg`;

  let cardWidth = 150;
  let cardHeight = 230

  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <div className={styles.images}>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image src={player1} alt={hero1} priority={true} fill />
            </div>
            <div>{hero1}</div>
          </div>
          <div className={styles.vs}>VS</div>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image src={player2} alt={hero2} priority={true} fill />
            </div>
            <div>{hero2}</div>
          </div>
          {hero3 &&
            <div className={styles.vs}>VS</div>
          }
          {hero3 &&
            <div className={styles.card}>
              <div className={styles.image}>
                <Image src={player3} alt={hero3} priority={true} fill />
              </div>
              <div>{hero3}</div>
            </div>
          }
          {hero4 &&
            <div className={styles.vs}>VS</div>
          }
          {hero4 &&
            <div className={styles.card}>
              <div className={styles.image}>
                <Image src={player4} alt={hero4} priority={true} fill />
              </div>
              <div>{hero4}</div>
            </div>
          }
        </div>
        {battlefield &&
          <>
            <div className={styles.map}>
              <Image src={map} alt={map} priority={true} fill />
            </div>
            <div className={styles.battlefield}>{battlefield}</div>
          </>
        }
        <div className={styles.buttons}>
          <Button text='Еще раз' onClick={() => handleRandom(playersNumber)} />
          <Button onClick={() => handleReset()} text='Сбросить' />
          <Button text='Закрыть' onClick={() => setShowModal(false)} />
        </div>
      </div>
    </div>
  )
}
