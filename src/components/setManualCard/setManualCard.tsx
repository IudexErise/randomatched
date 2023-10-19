import { useEffect, useState } from 'react';
import styles from './setManualCard.module.scss';
import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import tick from '../../../public/tick.svg';
import cross from '../../../public/cross.svg';
import { setsDataRu, setsDataEn, setsDataProps, battlefieldProps } from '@/data/setsData';
import { useTranslations } from 'next-intl';

interface SetManualCardProps {
  setIndex: string,
  imgSrc: string,
  fighters: string[],
  battlefields: battlefieldProps[],
  availableFighters: string[],
  setAvailableFighters: Dispatch<SetStateAction<string[]>>,
  availableBattlefields: battlefieldProps[],
  setAvailableBattlefields: Dispatch<SetStateAction<battlefieldProps[]>>,
  locale: string
}

interface CheckboxProps {
  name: string,
  players: number,
  availableFighters: string[],
  setAvailableFighters: Dispatch<SetStateAction<string[]>>,
  availableBattlefields: battlefieldProps[],
  setAvailableBattlefields: Dispatch<SetStateAction<battlefieldProps[]>>,
  type: string
}

export default function SetManualCard(
  { setIndex, imgSrc, fighters, battlefields, availableFighters, setAvailableFighters, availableBattlefields, setAvailableBattlefields, locale }: SetManualCardProps) {

  const [selectAllSet, setSelectAllSet] = useState<boolean>(true);
  const [setsData, setSetsData] = useState<setsDataProps[]>(setsDataEn);

  const t = useTranslations('components.manualCard');

  let fightersOptions = fighters.map((fighter) => {
    return (
      <Checkbox
        key={fighter}
        name={fighter}
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
        key={battlefield.name}
        name={battlefield.name}
        players={battlefield.players}
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
      let addedFighters = [...availableFighters, ...setsData[Number(setIndex) - 1].fighters];
      setAvailableFighters([...availableFighters, ...addedFighters.filter(fighter => !availableFighters.includes(fighter))]);
      let addedBattlefields = [...availableBattlefields, ...setsData[Number(setIndex) - 1].battlefields]
      setAvailableBattlefields([...availableBattlefields, ...addedBattlefields.filter(battlefield => !availableBattlefields.includes(battlefield))]);
    } else {
      setAvailableFighters(availableFighters.filter((val) => !setsData[Number(setIndex) - 1].fighters.includes(val)));
      setAvailableBattlefields(availableBattlefields.filter((val) => !setsData[Number(setIndex) - 1].battlefields.includes(val)));
    }
    setSelectAllSet(!selectAllSet);
  }

  useEffect(() => {
    if (locale === 'ru') {
      setSetsData(setsDataRu)
    } else {
      setSetsData(setsDataEn)
    }
  }, [locale])

  return (
    <div className={styles.card}>
      <Image src={imgSrc} alt='' width={220} height={320} />
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

function Checkbox({ name, players, availableFighters, setAvailableFighters, availableBattlefields, setAvailableBattlefields, type }: CheckboxProps) {

  const [checked, setChecked] = useState<boolean>(false);

  useEffect(() => {
    if (type === 'fighter' && checked && !availableFighters.find((el) => name === el)) {
      setChecked(false);
    } else if (type === 'battlefield' && checked && !availableBattlefields.find((el) => name === el.name)) {
      setChecked(false);
    }
  }, [availableFighters, availableBattlefields, checked, type, name])

  useEffect(() => {
    if (availableFighters.find((el) => name === el) || availableBattlefields.find((el) => name === el.name)) {
      setChecked(true);
    }
  }, [availableFighters, availableBattlefields, checked, name])

  const handleClick = () => {
    if (checked) {
      if (type === 'fighter') {
        let newArray = availableFighters.filter((fighter) => fighter !== name)
        setAvailableFighters(newArray);
      } else {
        let newArray = availableBattlefields.filter((battlefield) => battlefield.name !== name)
        setAvailableBattlefields(newArray);
      }
    } else {
      if (type === 'fighter') {
        setAvailableFighters([...availableFighters, name]);
      } else {
        setAvailableBattlefields([...availableBattlefields, { name: name, players: players }]);
      }
    }
    setChecked(!checked);
  }

  return (
    <div
      className={checked ? styles.optionChecked : styles.option}
      onClick={() => handleClick()}
    >
      {name}
      {players !== 0 && <>({players})</>}
    </div>
  )
}