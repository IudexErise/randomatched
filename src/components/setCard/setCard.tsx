import { useEffect, useState } from 'react';
import styles from './setCard.module.scss';
import Image, { StaticImageData } from "next/image";

interface setCardProps {
  setIndex: string,
  setName: string,
  imgSrc: StaticImageData,
  onClick: any,
  selectedSets: string[]
}

export default function SetCard({ setName, setIndex, imgSrc, onClick, selectedSets}: setCardProps) {

  const [checked, setChecked] = useState<boolean>(false);
  
  const handleClick = () => {
    onClick(setIndex);
    setChecked(!checked)
  }

  useEffect(() => {
    if (!selectedSets.find((set) => set === setIndex)) {
      setChecked(false);
    }
  }, [selectedSets])

  return (
    <div className={checked ? styles.checkedCard : styles.card} onClick={() => handleClick()}>
      <div className={styles.image}>
        <Image src={imgSrc} alt={setName} fill sizes='200px' priority={true} />
      </div>
      <div className={styles.text}>{setName}</div>
    </div>
  )
}