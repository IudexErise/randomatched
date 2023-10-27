import { BattlefieldProps } from "@/data/setsData";
import { useTranslations } from "next-intl";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import styles from './checkbox.module.scss';

interface CheckboxProps {
  id: string,
  players: number,
  availableFighters: string[],
  setAvailableFighters: Dispatch<SetStateAction<string[]>>,
  availableBattlefields: BattlefieldProps[],
  setAvailableBattlefields: Dispatch<SetStateAction<BattlefieldProps[]>>,
  type: string
}

export default function Checkbox({ id, players, availableFighters, setAvailableFighters, availableBattlefields, setAvailableBattlefields, type }: CheckboxProps) {

  const [checked, setChecked] = useState<boolean>(false);
  const t = useTranslations('data');

  useEffect(() => {
    if (type === 'fighter' && checked && !availableFighters.find((el) => id === el)) {
      setChecked(false);
    } else if (type === 'battlefield' && checked && !availableBattlefields.find((el) => id === el.battlefieldId)) {
      setChecked(false);
    }
  }, [availableFighters, availableBattlefields, checked, type, id])

  useEffect(() => {
    if (type === 'fighter' && availableFighters.find((el) => id === el)) {
      setChecked(true);
    } else if (type === 'battlefield' && availableBattlefields.find((el) => id === el.battlefieldId)) {
      setChecked(true);
    }
  }, [availableFighters, availableBattlefields, checked, id])

  const handleClick = () => {
    if (checked) {
      if (type === 'fighter') {
        let newArray = availableFighters.filter((fighter) => fighter !== id)
        setAvailableFighters(newArray);
      } else {
        let newArray = availableBattlefields.filter((battlefield) => battlefield.battlefieldId !== id)
        setAvailableBattlefields(newArray);
      }
    } else {
      if (type === 'fighter') {
        setAvailableFighters([...availableFighters, id]);
      } else {
        setAvailableBattlefields([...availableBattlefields, { battlefieldId: id, battlefieldPlayers: players }]);
      }
    }
    setChecked(!checked);
  }

  return (
    <div
      className={checked ? styles.optionChecked : styles.option}
      onClick={() => handleClick()}
    >
      {type === 'fighter' ? t(`fighters.fighter${id}`): t(`battlefields.battlefield${id}`)}
      {players !== 0 && <>({players})</>}
    </div>
  )
}