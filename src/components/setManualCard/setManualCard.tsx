import { useState } from 'react';
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
    const [checked, setChecked] = useState<boolean>(false)
    return (
      <div 
      className={checked ? styles.optionChecked : styles.option} 
      key={fighter} 
      onClick={() => setChecked(!checked)}
      >
        {fighter}
      </div>
    )
  })

  let battlefieldOptions = battlefields.map((battlefield) => {
    const [checked, setChecked] = useState<boolean>(false)
    return (
      <div 
      className={checked ? styles.optionChecked : styles.option} 
      key={battlefield} 
      onClick={() => setChecked(!checked)}
      >
        {battlefield}
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