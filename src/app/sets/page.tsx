'use client'

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Header from './../../components/header/header';
import SetCard from './../../components/setCard/setCard';
import Footer from './../../components/footer/footer';
import { setsData } from '@/data/setsData';
import ResultModal from '@/components/resultModal/resultModal';
import Button from '@/components/button/button';

export default function Sets() {

  const [selectedSets, setSelectedSets] = useState<string[]>([]);
  const [availableFighters, setAvailableFighters] = useState<string[]>([]);
  const [availableBattlefields, setAvailableBattlefields] = useState<string[]>([]);
  const [availableAmount, setAvailableAmount] = useState<number>(0);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [playersNumber, setPlayersNumber] = useState<number>(0);
  const [moreOptions, setMoreOptions] = useState<boolean>(false);

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

  let localizedOptions = setsData.slice(0, 6).map((option) => {
    return (
      <SetCard
        key={option.setIndex}
        setIndex={option.setIndex}
        setName={option.setName}
        imgSrc={option.imgSrc}
        onClick={() => handleCardClick(option.setIndex)}
      />
    )
  })

  let otherOptions = setsData.slice(6).map((option) => {
    return (
      <SetCard
        key={option.setIndex}
        setIndex={option.setIndex}
        setName={option.setName}
        imgSrc={option.imgSrc}
        onClick={() => handleCardClick(option.setIndex)}
      />
    )
  })

  useEffect(() => {
    setAvailableAmount(availableFighters.length);
  }, [availableFighters])

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.options}>
          {localizedOptions}
          {moreOptions && <>{otherOptions}</>}
        </div>
        {moreOptions ? 
        <Button text='Свернуть' onClick={() => setMoreOptions(false)} />
        :
        <Button text='Показать еще' onClick={() => setMoreOptions(true)} />
        }
        <div className={moreOptions ? styles.buttonsFixed : styles.buttons}>
          <Button onClick={() => handleRandom(2)} disabled={availableAmount < 2} text='Для 2 игроков' />
          <Button onClick={() => handleRandom(3)} disabled={availableAmount < 3} text='Для 3 игроков' />
          <Button onClick={() => handleRandom(4)} disabled={availableAmount < 4} text='Для 4 игроков' />
          <Button onClick={() => location.reload()} text='Сбросить' />
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
          />
        }
      </main>
      <Footer />
    </>
  )
}