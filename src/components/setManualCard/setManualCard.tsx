import { useState } from 'react';
import styles from './setManualCard.module.scss';
import Image, { StaticImageData } from "next/image";
import { Dispatch, SetStateAction } from "react";

interface SetManualCardProps {
  setName: string,
  imgSrc: StaticImageData,
  fighters: string[],
  battlefields: string[],
  availableFighters: string[],
  setAvailableFighters: Dispatch<SetStateAction<string[]>>,
  availableBattlefields: string[],
  setAvailableBattlefields: Dispatch<SetStateAction<string[]>>,
}

interface CheckboxProps {
  name: string,
  availableFighters: string[],
  setAvailableFighters: Dispatch<SetStateAction<string[]>>,
  availableBattlefields: string[],
  setAvailableBattlefields: Dispatch<SetStateAction<string[]>>,
  type: string
}

export default function SetManualCard({ setName, imgSrc, fighters, battlefields, availableFighters, setAvailableFighters, availableBattlefields, setAvailableBattlefields }: SetManualCardProps) {

  let fightersOptions = fighters.map((fighter) => {
    return (
      <Checkbox
        name={fighter}
        availableFighters={availableFighters}
        setAvailableFighters={setAvailableFighters}
        type='fighters'
        availableBattlefields={availableBattlefields}
        setAvailableBattlefields={setAvailableBattlefields}
      />
    )
  })

  let battlefieldOptions = battlefields.map((battlefield) => {
    return (
      <Checkbox
        name={battlefield}
        availableFighters={availableFighters}
        setAvailableFighters={setAvailableFighters}
        type='battlefield'
        availableBattlefields={availableBattlefields}
        setAvailableBattlefields={setAvailableBattlefields}
      />
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

function Checkbox({ name, availableFighters, setAvailableFighters, availableBattlefields, setAvailableBattlefields, type }: CheckboxProps) {

  const [checked, setChecked] = useState<boolean>(false);

  const handleClick = () => {
    if (checked) {
      if (type === 'fighters') {
        let newArray = availableFighters.filter((fighter) => fighter !== name)
        setAvailableFighters(newArray);
      } else {
        let newArray = availableBattlefields.filter((battlefield) => battlefield !== name)
        setAvailableBattlefields(newArray);
      }
    } else {
      if (type === 'fighters') {
        setAvailableFighters([...availableFighters, name]);
      } else {
        setAvailableBattlefields([...availableBattlefields, name]);
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
    </div>
  )
}