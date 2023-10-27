import { useEffect, useState } from 'react';
import styles from './setCard.module.scss';
import Image from "next/image";
import { useLocale, useTranslations } from 'next-intl';
import { setImgPath } from '@/data/setsData';

interface setCardProps {
  setIndex: string,
  onClick: any,
  selectedSets: string[]
}

export default function SetCard({ setIndex, onClick, selectedSets }: setCardProps) {

  const [checked, setChecked] = useState<boolean>(false);
  const t = useTranslations('data.sets');
  const locale = useLocale();
  const imgUrl = `${setImgPath}/setCovers/${locale}/${setIndex}.jpg`

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
        <Image src={imgUrl} alt={t(`set${setIndex}`)} fill sizes='200px' priority={true}/>
      </div>
      <div className={styles.text}>{t(`set${setIndex}`)}</div>
    </div>
  )
}