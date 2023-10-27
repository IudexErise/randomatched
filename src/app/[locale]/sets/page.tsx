'use client'

import React, { useState, useEffect } from 'react';
import styles from './page.module.scss';
import Header from '../../../components/header/header';
import SetCard from '../../../components/setCard/setCard';
import Footer from '../../../components/footer/footer';
import { BattlefieldProps, SetsDataProps, allBattlefieldsData, allFightersData, allSetsArray, allSetsData, ruBattlefieldsData, ruFightersData, ruSetsData } from '@/data/setsData';
import ResultModal from '@/components/resultModal/resultModal';
import Button from '@/components/button/button';
import Features from '@/components/features/features';
import { useTranslations } from 'next-intl';

interface SetsProps {
  params: {
    locale: string
  }
}

export default function Sets({ params: { locale } }: SetsProps) {

  const [selectedSets, setSelectedSets] = useState<string[]>([]);
  const [availableFighters, setAvailableFighters] = useState<string[]>([]);
  const [availableBattlefields, setAvailableBattlefields] = useState<BattlefieldProps[]>([]);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [playersNumber, setPlayersNumber] = useState<number>(0);
  const [displayedOptions, setDisplayedOptions] = useState<number>(6);

  const t = useTranslations('pages.sets');

  const handleCardClick = (newElement: string) => {
    if (selectedSets.includes(newElement)) {
      setSelectedSets(selectedSets.filter((el) => el !== newElement));
      setAvailableFighters(availableFighters.filter((val) => !allSetsArray[Number(newElement) - 1].fighters.includes(val)));
      setAvailableBattlefields(availableBattlefields.filter((val) => !allSetsArray[Number(newElement) - 1].battlefields.includes(val)));
    } else {
      setSelectedSets([...selectedSets, newElement]);
      setAvailableFighters([...availableFighters, ...allSetsArray[Number(newElement) - 1].fighters]);
      setAvailableBattlefields([...availableBattlefields, ...allSetsArray[Number(newElement) - 1].battlefields]);
    }
  }

  const getUniqueRandom = (range: number, count: number) => {
    let numbers = new Set<number>();
    while (numbers.size < count) {
      numbers.add(Math.floor(Math.random() * (range - 1 + 1)));
    }
    return [...numbers];
  }

  const getRandomBattlefield = (playersCount: number) => {
    if (availableBattlefields.length > 0) {
      let validBattlefields = availableBattlefields.filter((item) => item.battlefieldPlayers >= playersCount);
      if (validBattlefields.length > 0) {
        let battlefieldsIndex = Math.floor(Math.random() * (validBattlefields.length));
        return validBattlefields[battlefieldsIndex].battlefieldId;
      }
    }
  }

  const handleRandom = (playersCount: number) => {
    setPlayersNumber(playersCount);
    getRandomBattlefield(playersCount);
    setShowModal(true);
    let randNumbers: number[] = getUniqueRandom(availableFighters.length, playersCount);
    setRandomNumbers(randNumbers);
  }

  const reset = () => {
    setSelectedSets([])
    setAvailableFighters([]);
    setAvailableBattlefields([]);
  }

  const selectSets = (range: string) => {
    if (range === 'ru') {
      setSelectedSets(ruSetsData);
      setAvailableFighters(ruFightersData);
      setAvailableBattlefields(ruBattlefieldsData);
    } else {
      setSelectedSets(allSetsData);
      setAvailableFighters(allFightersData);
      setAvailableBattlefields(allBattlefieldsData);
    }
    setDisplayedOptions(allSetsArray.length);
  }


  useEffect(() => {
      let savedSets = localStorage.getItem('savedSets');
      if (savedSets !== null) {
        let data = JSON.parse(savedSets);
        setSelectedSets(data);
        data.forEach((set: string) => {
          setAvailableFighters((availableFighters) => ([...availableFighters, ...allSetsArray[Number(set) - 1].fighters]));
          setAvailableBattlefields((availableBattlefields) => ([...availableBattlefields, ...allSetsArray[Number(set) - 1].battlefields]));
        });
      }
  }, [])

  let options = allSetsArray.slice(0, displayedOptions).map((option) => {
    return (
      <SetCard
        key={option.setIndex}
        setIndex={option.setIndex}
        onClick={() => handleCardClick(option.setIndex)}
        selectedSets={selectedSets}
      />
    )
  })

  let features = [t('feature1'), t('feature2')];

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>{t('pageName')}</h1>
        <Features features={features} />
        <div className={styles.options}>
          {options}
        </div>
        {displayedOptions > 6 ?
          <Button text={t('buttons.showLess')} onClick={() => setDisplayedOptions(6)} />
          :
          <Button text={t('buttons.showMore')} onClick={() => setDisplayedOptions(allSetsArray.length)} />
        }
        <div className={displayedOptions > 6 ? styles.buttonsFixed : styles.buttons}>
          <Button onClick={() => handleRandom(2)} disabled={availableFighters.length < 2} text={t('buttons.for2players')} />
          <Button onClick={() => handleRandom(3)} disabled={availableFighters.length < 3} text={t('buttons.for3players')} />
          <Button onClick={() => handleRandom(4)} disabled={availableFighters.length < 4} text={t('buttons.for4players')} />
          <Button onClick={() => reset()} disabled={availableFighters.length === 0 && availableBattlefields.length === 0} text={t('buttons.reset')} />
          {locale === 'ru' &&
            <Button onClick={() => selectSets('ru')} disabled={ruSetsData === selectedSets.sort()} text={t('buttons.selectRu')} />
          }
          <Button onClick={() => selectSets('all')} disabled={selectedSets.length === allSetsArray.length} text={t('buttons.selectAll')} />
        </div>
        {showModal &&
          <ResultModal
            battlefield={getRandomBattlefield(playersNumber)}
            hero1={availableFighters[randomNumbers[0]]}
            hero2={availableFighters[randomNumbers[1]]}
            hero3={availableFighters[randomNumbers[2]]}
            hero4={availableFighters[randomNumbers[3]]}
            setShowModal={setShowModal}
            handleRandom={handleRandom}
            playersNumber={playersNumber}
            reset={() => reset()}
            locale={locale}
            randomNumbers={getUniqueRandom(playersNumber, playersNumber)}
          />
        }
      </main>
      <Footer />
    </>
  )
}