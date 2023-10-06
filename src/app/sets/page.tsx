'use client'

import React, { useState } from 'react';
import styles from './page.module.scss';
import Header from './../../components/header/header';
import SetCard from './../../components/setCard/setCard';
import Footer from './../../components/footer/footer';
import { allBattlefields, allFighters, allSets, ruBattlefields, ruFighters, ruSets, setsData } from '@/data/setsData';
import ResultModal from '@/components/resultModal/resultModal';
import Button from '@/components/button/button';

export default function Sets() {

  const [selectedSets, setSelectedSets] = useState<string[]>([]);
  const [availableFighters, setAvailableFighters] = useState<string[]>([]);
  const [availableBattlefields, setAvailableBattlefields] = useState<string[]>([]);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [playersNumber, setPlayersNumber] = useState<number>(0);
  const [displayedOptions, setDisplayedOptions] = useState<number>(6);

  const handleCardClick = (newElement: string) => {
    if (selectedSets.includes(newElement)) {
      setSelectedSets(selectedSets.filter((el) => el !== newElement));
      setAvailableFighters(availableFighters.filter((val) => !setsData[Number(newElement) - 1].fighters.includes(val)));
      setAvailableBattlefields(availableBattlefields.filter((val) => !setsData[Number(newElement) - 1].battlefields.includes(val)));
    } else {
      setSelectedSets([...selectedSets, newElement]);
      setAvailableFighters([...availableFighters, ...setsData[Number(newElement) - 1].fighters]);
      setAvailableBattlefields([...availableBattlefields, ...setsData[Number(newElement) - 1].battlefields]);
    }
  }

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
    setSelectedSets([])
    setAvailableFighters([]);
    setAvailableBattlefields([]);
  }

  const selectSets = (range : string) => {
    if (range === 'ru') {
    setSelectedSets(ruSets);
    setAvailableFighters(ruFighters);
    setAvailableBattlefields(ruBattlefields);
    } else {
      setSelectedSets(allSets);
      setAvailableFighters(allFighters);
      setAvailableBattlefields(allBattlefields);
    }
  }

  let options = setsData.slice(0, displayedOptions).map((option) => {
    return (
      <SetCard
        key={option.setIndex}
        setIndex={option.setIndex}
        setName={option.setName}
        imgSrc={option.imgSrc}
        onClick={() => handleCardClick(option.setIndex)}
        selectedSets={selectedSets}
      />
    )
  })

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.options}>
          {options}
        </div>
        {displayedOptions > 6 ?
          <Button text='Свернуть' onClick={() => setDisplayedOptions(6)} />
          :
          <Button text='Показать еще' onClick={() => setDisplayedOptions(setsData.length)} />
        }
        <div className={displayedOptions > 6 ? styles.buttonsFixed : styles.buttons}>
          <Button onClick={() => handleRandom(2)} disabled={availableFighters.length < 2 || availableBattlefields.length < 1} text='Для 2 игроков' />
          <Button onClick={() => handleRandom(3)} disabled={availableFighters.length < 3 || availableBattlefields.length < 1} text='Для 3 игроков' />
          <Button onClick={() => handleRandom(4)} disabled={availableFighters.length < 4 || availableBattlefields.length < 1} text='Для 4 игроков' />
          <Button onClick={() => reset()} disabled={availableFighters.length === 0 && availableBattlefields.length === 0} text='Сбросить' />
          <Button onClick={() => selectSets('ru')} disabled={ruSets === selectedSets.sort()} text='Выбрать всю локализацию' />
          <Button onClick={() => selectSets('all')} disabled={selectedSets.length === setsData.length} text='Выбрать все наборы' />
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