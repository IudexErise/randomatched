import styles from './setCard.module.scss';
import Image, { StaticImageData } from "next/image";

interface setCardProps {
  setIndex: string,
  setName: string,
  imgSrc: StaticImageData
}

export default function SetCard({setName, setIndex, imgSrc} : setCardProps) {
  return (
    <div className={styles.card}>
      <input type='checkbox' id={setIndex} className={styles.checkbox} />
      <div className={styles.image}>
      <Image src={imgSrc} alt={setName} fill />
      </div>
      <label htmlFor={setIndex}>{setName}</label>
    </div>
  )
}