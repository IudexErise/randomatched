import styles from './setManualCard.module.scss';
import Image, { StaticImageData } from "next/image";

interface setManualCardProps {
  setName: string,
  imgSrc: StaticImageData,
  fighters: string[],
  battlefields: string[]
}

export default function SetManualCard({ setName, imgSrc, fighters, battlefields }: setManualCardProps) {

  let fightersOptions = fighters.map((fighter) => {
    return (
      <div className={styles.option} key={fighter}>
        <input type='checkbox' id={fighter} />
        <label htmlFor={fighter}>{fighter}</label>
      </div>
    )
  })

  let battlefieldOptions = battlefields.map((battlefield) => {
    return (
      <div className={styles.option} key={battlefield}>
        <input type='checkbox' id={battlefield} />
        <label htmlFor={battlefield}>{battlefield}</label>
      </div>
    )
  })

  return (
    <div className={styles.card}>
      <Image src={imgSrc} alt='' sizes='200px' />
      <div className={styles.options}>
        <h3>Бойцы</h3>
        {fightersOptions}
        {battlefields.length > 0 && <h3>Поля боя</h3>}
        {battlefieldOptions}
      </div>
    </div>
  )
}