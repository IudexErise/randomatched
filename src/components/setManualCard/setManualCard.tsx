import { useState } from 'react';
import styles from './setManualCard.module.scss';
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import tick from '../../../public/tick.svg';
import cross from '../../../public/cross.svg';
import { BattlefieldProps, allSetsArray, setImgPath } from '@/data/setsData';
import { useLocale, useTranslations } from 'next-intl';
import Checkbox from '../checkbox/checkbox';

interface SetManualCardProps {
  setIndex: string,
  fighters: string[],
  battlefields: BattlefieldProps[],
  availableFighters: string[],
  setAvailableFighters: Dispatch<SetStateAction<string[]>>,
  availableBattlefields: BattlefieldProps[],
  setAvailableBattlefields: Dispatch<SetStateAction<BattlefieldProps[]>>,
}


export default function SetManualCard(
  { setIndex, fighters, battlefields, availableFighters, setAvailableFighters, availableBattlefields, setAvailableBattlefields }: SetManualCardProps) {

  const [selectAllSet, setSelectAllSet] = useState<boolean>(true);
  const locale = useLocale();
  const imgUrl = `${setImgPath}/setCovers/${locale}/${setIndex}.jpg`

  const t = useTranslations('components.manualCard');

  let fightersOptions = fighters.map((fighter) => {
    return (
      <Checkbox
        key={fighter}
        id={fighter}
        players={0}
        availableFighters={availableFighters}
        setAvailableFighters={setAvailableFighters}
        type='fighter'
        availableBattlefields={availableBattlefields}
        setAvailableBattlefields={setAvailableBattlefields}
      />
    )
  })

  let battlefieldOptions = battlefields.map((battlefield) => {
    return (
      <Checkbox
        key={battlefield.battlefieldId}
        id={battlefield.battlefieldId}
        players={battlefield.battlefieldPlayers}
        availableFighters={availableFighters}
        setAvailableFighters={setAvailableFighters}
        type='battlefield'
        availableBattlefields={availableBattlefields}
        setAvailableBattlefields={setAvailableBattlefields}
      />
    )
  })

  const selectSet = () => {
    if (selectAllSet) {
      let addedFighters = [...availableFighters, ...allSetsArray[Number(setIndex) - 1].fighters];
      setAvailableFighters([...availableFighters, ...addedFighters.filter(fighter => !availableFighters.includes(fighter))]);
      let addedBattlefields = [...availableBattlefields, ...allSetsArray[Number(setIndex) - 1].battlefields]
      setAvailableBattlefields([...availableBattlefields, ...addedBattlefields.filter(battlefield => !availableBattlefields.includes(battlefield))]);
    } else {
      setAvailableFighters(availableFighters.filter((val) => !allSetsArray[Number(setIndex) - 1].fighters.includes(val)));
      setAvailableBattlefields(availableBattlefields.filter((val) => !allSetsArray[Number(setIndex) - 1].battlefields.includes(val)));
    }
    setSelectAllSet(!selectAllSet);
  }

  return (
    <div className={styles.card}>
      <Image src={imgUrl} alt='' width={220} height={320} />
      {selectAllSet ?
        <Image src={tick} alt={t('selectSet')} title={t('selectSet')} onClick={() => selectSet()} />
        :
        <Image src={cross} alt={t('unselectSet')} title={t('unselectSet')} onClick={() => selectSet()} />
      }
      <div className={styles.options}>
        <h3>{t('fighters')}</h3>
        {fightersOptions}
        {battlefields.length > 0 && <h3>{t('battlefields')}</h3>}
        {battlefieldOptions}
      </div>
    </div>
  )
}