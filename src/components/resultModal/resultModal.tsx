import Image from 'next/image';
import Button from '../button/button';
import styles from './resultModal.module.scss';
import { imgPath } from '@/data/setsData';
import { useTranslations } from 'next-intl';

interface ResultProps {
  hero1: string,
  hero2: string,
  hero3?: string,
  hero4?: string,
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>,
  handleRandom(playersCount: number): void,
  playersNumber: number,
  battlefield?: string,
  reset(): void,
  locale: string,
  randomNumbers: number[]
}

export default function ResultModal({ hero1, hero2, hero3, hero4, setShowModal, handleRandom, playersNumber, battlefield, reset, locale, randomNumbers }: ResultProps) {

  const t = useTranslations('components.resultModal');

  const handleReset = () => {
    reset();
    setShowModal(false);
  }

  let player2 = `${imgPath}/cardBacks/${locale}/${hero2}.png`;
  let player1 = `${imgPath}/cardBacks/${locale}/${hero1}.png`;
  let player3 = `${imgPath}/cardBacks/${locale}/${hero3}.png`;
  let player4 = `${imgPath}/cardBacks/${locale}/${hero4}.png`;
  let map = `${imgPath}/battlefields/${locale}/${battlefield}.jpg`;

  return (
    <div className={styles.container}>
      <div className={styles.result}>
        <div className={styles.images}>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image src={player1} alt={hero1} priority={true} fill placeholder='blur' blurDataURL='/blur.png'  sizes="(min-width: 768px) 150px, (max-width: 767px) 25vw" />
            </div>
            <p>{hero1}</p>
            <hr/>
            <p>{t('start')}{randomNumbers[0] + 1}</p>
          </div>
          <div className={styles.vs}>VS</div>
          <div className={styles.card}>
            <div className={styles.image}>
              <Image src={player2} alt={hero2} priority={true} fill placeholder='blur' blurDataURL='/blur.png' sizes="(min-width: 768px) 150px, (max-width: 767px) 25vw" />
            </div>
            <p>{hero2}</p>
            <hr/>
            <p>{t('start')}{randomNumbers[1] + 1}</p>
          </div>
          {hero3 &&
            <div className={styles.vs}>VS</div>
          }
          {hero3 &&
            <div className={styles.card}>
              <div className={styles.image}>
                <Image src={player3} alt={hero3} priority={true} fill placeholder='blur' blurDataURL='/blur.png' sizes="(min-width: 768px) 150px, (max-width: 767px) 25vw" />
              </div>
              <p>{hero3}</p>
              <hr/>
              <p>{t('start')}{randomNumbers[2] + 1}</p>
            </div>
          }
          {hero4 &&
            <div className={styles.vs}>VS</div>
          }
          {hero4 &&
            <div className={styles.card}>
              <div className={styles.image}>
                <Image src={player4} alt={hero4} priority={true} fill placeholder='blur' blurDataURL='/blur.png' sizes="(min-width: 768px) 150px, (max-width: 767px) 25vw"/>
              </div>
              <p>{hero4}</p>
              <hr/>
              <p>{t('start')}{randomNumbers[3] + 1}</p>
            </div>
          }
        </div>
        {battlefield &&
          <>
            <div className={styles.map}>
              <Image src={map} alt={map} priority={true} fill placeholder='blur' blurDataURL='/blur.png' sizes="(min-width: 768px) 350px, (max-width: 767px) 250px"/>
            </div>
            <div className={styles.battlefield}>{battlefield}</div>
          </>
        }
        <div className={styles.buttons}>
          <Button text={t('repeat')} onClick={() => handleRandom(playersNumber)} />
          <Button onClick={() => handleReset()} text={t('reset')} />
          <Button text={t('close')} onClick={() => setShowModal(false)} />
        </div>
      </div>
    </div>
  )
}
