import { useEffect, useState } from 'react';
import styles from './setCard.module.scss';
import Image, { StaticImageData } from "next/image";

interface setCardProps {
  setIndex: string,
  setName: string,
  imgSrc: string,
  onClick: any,
  selectedSets: string[]
}

export default function SetCard({ setName, setIndex, imgSrc, onClick, selectedSets }: setCardProps) {

  const [checked, setChecked] = useState<boolean>(false);

  const handleClick = () => {
    onClick();
  }

  useEffect(() => {
    if (selectedSets.includes(setIndex)) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [selectedSets, setIndex, setChecked])

  return (
    <div className={checked ? styles.checkedCard : styles.card} onClick={() => handleClick()}>
      <div className={styles.image}>
        <Image src={imgSrc} alt={setName} fill sizes='200px' priority={true} />
      </div>
      <div className={styles.text}>{setName}</div>
    </div>
  )
}