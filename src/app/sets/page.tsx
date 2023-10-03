'use client'

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Header from './../../components/header/header';
import SetCard from './../../components/setCard/setCard';
import Footer from './../../components/footer/footer';
import { setsData } from '@/data/setsData';

export default function Sets() {

  const [selectedSets, setSelectedSets] = useState<string[]>([]);
  const [availableFighters, setAvailableFighters] = useState<string[]>([]);
  const [availableAmount, setAvailableAmount] = useState<number>(0);

  const handleCardClick = (newElement: string) => {
    if (selectedSets.includes(newElement)) {
      setSelectedSets(selectedSets.filter((el) => el !== newElement));
      setAvailableFighters(availableFighters.filter((val) => !setsData[Number(newElement) - 1].fighters.includes(val)));
    } else {
      setSelectedSets([...selectedSets, newElement]);
      setAvailableFighters([...availableFighters, ...setsData[Number(newElement) - 1].fighters]);
    }
  }

  const getUniqueRandom = (range: number, count: number) => {
    let numbers = new Set();
    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * (range - 1 + 1)));
    }
    return [...numbers];
  }

  const handleRandom = (playersCount: number) => {
    let randNumbers: any[] = getUniqueRandom(availableFighters.length, playersCount);
    if (playersCount === 2) {
      alert(`Игрок 1: ${availableFighters[randNumbers[0]]}; Игрок 2: ${availableFighters[randNumbers[1]]}`)
    } else if (playersCount === 3) {
      alert(`Игрок 1: ${availableFighters[randNumbers[0]]}; Игрок 2: ${availableFighters[randNumbers[1]]}, Игрок 3: ${availableFighters[randNumbers[2]]}`)
    } else {
      alert(`Игрок 1: ${availableFighters[randNumbers[0]]}; Игрок 2: ${availableFighters[randNumbers[1]]}, Игрок 3: ${availableFighters[randNumbers[2]]}, Игрок 4: ${availableFighters[randNumbers[3]]}`)
    }
  }

  let options = setsData.map((option) => {
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
    setAvailableAmount(availableFighters.length)
  }, [availableFighters])

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.options}>
          {options}
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => handleRandom(2)} disabled={availableAmount < 2}>Для 2 игроков</button>
          <button className={styles.button} onClick={() => handleRandom(3)} disabled={availableAmount < 3}>Для 3 игроков</button>
          <button className={styles.button} onClick={() => handleRandom(4)} disabled={availableAmount < 4}>Для 4 игроков</button>
        </div>
      </main>
      <Footer />
    </>
  )
}