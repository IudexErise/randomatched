import styles from './setCard.module.scss';
import Image, { StaticImageData } from "next/image";

interface setCardProps {
  setIndex: string,
  setName: string,
  imgSrc: StaticImageData,
  onClick: any;
}

export default function SetCard({setName, setIndex, imgSrc, onClick} : setCardProps) {
  return (
    <div className={styles.card} onClick={onClick}>
      <input type='checkbox' id={setIndex} className={styles.checkbox} />
      <div className={styles.image}>
      <Image src={imgSrc} alt={setName} fill />
      </div>
      <label htmlFor={setIndex}>{setName}</label>
    </div>
  )
}