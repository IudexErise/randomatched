'use client'

import Header from './../../components/header/header';
import Footer from './../../components/footer/footer';
import { allBattlefields, allFighters, setsData } from '@/data/setsData';
import SetManualCard from './../../components/setManualCard/setManualCard';
import styles from './page.module.scss';
import { useState } from 'react';
import ResultModal from '@/components/resultModal/resultModal';
import Button from '@/components/button/button';

export default function Manual() {

  const [showModal, setShowModal] = useState<boolean>(false);
  const [playersNumber, setPlayersNumber] = useState<number>(0);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [availableFighters, setAvailableFighters] = useState<string[]>([]);
  const [availableBattlefields, setAvailableBattlefields] = useState<string[]>([]);
  const [displayedOptions, setDisplayedOptions] = useState<number>(6);

  const getUniqueRandom = (range: number, count: number) => {
    let numbers = new Set<number>();
    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * (range - 1 + 1)));
    }
    return [...numbers];
  }

  const getRandomBattlefield = (max: number) => {
    return Math.floor(Math.random() * (max));
  }

  const handleRandom = (playersCount: number) => {
    getRandomBattlefield(availableBattlefields.length);
    setPlayersNumber(playersCount);
    setShowModal(true);
    let randNumbers: number[] = getUniqueRandom(availableFighters.length, playersCount);
    setRandomNumbers(randNumbers);
  }

  const reset = () => {
    setAvailableFighters([]);
    setAvailableBattlefields([]);
  }

  const selectAll = (range : string) => {
    if (range === 'fighters') {
      setAvailableFighters(allFighters);
    } else {
      setAvailableBattlefields(allBattlefields);
    }
    setDisplayedOptions(setsData.length);
  }

  let options = setsData.slice(0, displayedOptions).map((card) => {
    return (
      <SetManualCard
        key={card.setIndex}
        setIndex={card.setIndex}
        imgSrc={card.imgSrc}
        fighters={card.fighters}
        battlefields={card.battlefields}
        availableFighters={availableFighters}
        setAvailableFighters={setAvailableFighters}
        availableBattlefields={availableBattlefields}
        setAvailableBattlefields={setAvailableBattlefields}
      />
    )
  })

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.cards}>
          {options}
        </div>
        {displayedOptions > 6 ?
          <Button text='Свернуть' onClick={() => setDisplayedOptions(6)} />
          :
          <Button text='Показать еще' onClick={() => setDisplayedOptions(setsData.length)} />
        }
        <div className={displayedOptions > 6 ? styles.buttonsFixed : styles.buttons}>
          <Button onClick={() => handleRandom(2)} disabled={availableFighters.length < 2 } text='Для 2 игроков' />
          <Button onClick={() => handleRandom(3)} disabled={availableFighters.length < 3 } text='Для 3 игроков' />
          <Button onClick={() => handleRandom(4)} disabled={availableFighters.length < 4 } text='Для 4 игроков' />
          <Button onClick={() => reset()} disabled={availableFighters.length === 0 && availableBattlefields.length === 0} text='Сбросить выбор' />
          <Button onClick={() => selectAll('fighters')} disabled={availableFighters.length === allFighters.length} text='Выбрать всех бойцов' />
          <Button onClick={() => selectAll('all')} disabled={availableBattlefields.length === allBattlefields.length} text='Выбрать все поля боя' />
        </div>
        {showModal &&
          <ResultModal
            battlefield={availableBattlefields[getRandomBattlefield(availableBattlefields.length)]}
            hero1={availableFighters[randomNumbers[0]]}
            hero2={availableFighters[randomNumbers[1]]}
            hero3={availableFighters[randomNumbers[2]]}
            hero4={availableFighters[randomNumbers[3]]}
            setShowModal={setShowModal}
            handleRandom={handleRandom}
            playersNumber={playersNumber}
            reset={() => reset()}
          />
        }
      </main>
      <Footer />
    </>
  )
}