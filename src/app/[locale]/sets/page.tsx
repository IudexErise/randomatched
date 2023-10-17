'use client'

import React, { useState, useEffect } from 'react';
import styles from './page.module.scss';
import Header from '../../../components/header/header';
import SetCard from '../../../components/setCard/setCard';
import Footer from '../../../components/footer/footer';
import { allBattlefieldsRu, allBattlefieldsEn, allFightersRu, allFightersEn, allSets, ruBattlefields, ruFighters, ruSets, setsDataRu, setsDataEn, setsDataProps } from '@/data/setsData';
import ResultModal from '@/components/resultModal/resultModal';
import Button from '@/components/button/button';
import Features from '@/components/features/features';
import { LocaleProps } from '../layout';
import { useTranslations } from 'next-intl';

export default function Sets({ params: { locale } }: LocaleProps) {

  const [selectedSets, setSelectedSets] = useState<string[]>([]);
  const [availableFighters, setAvailableFighters] = useState<string[]>([]);
  const [availableBattlefields, setAvailableBattlefields] = useState<string[]>([]);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [showModal, setShowModal] = useState<boolean>(false);
  const [playersNumber, setPlayersNumber] = useState<number>(0);
  const [displayedOptions, setDisplayedOptions] = useState<number>(6);
  const [allBattlefields, setAllBattlefields] = useState<string[]>([]);
  const [allFighters, setAllFighters] = useState<string[]>([]);
  const [setsData, setSetsData] = useState<setsDataProps[]>([]);

  const t = useTranslations('pages.sets');

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

  const selectSets = (range: string) => {
    if (range === 'ru') {
      setSelectedSets(ruSets);
      setAvailableFighters(ruFighters);
      setAvailableBattlefields(ruBattlefields);
    } else {
      setSelectedSets(allSets);
      setAvailableFighters(allFighters);
      setAvailableBattlefields(allBattlefields);
    }
    setDisplayedOptions(setsData.length);
  }

  useEffect(() => {
    if (locale === 'ru') {
      setAllBattlefields(allBattlefieldsRu);
      setAllFighters(allFightersRu);
      setSetsData(setsDataRu);
    } else {
      setAllBattlefields(allBattlefieldsEn);
      setAllFighters(allFightersEn);
      setSetsData(setsDataEn);
    }
    let savedSets = localStorage.getItem('savedSets');
    if (savedSets !== null) {
      let data = JSON.parse(savedSets);
      setSelectedSets(data);
      data.forEach((set: string) => {
        setAvailableFighters((availableFighters) => ([...availableFighters, ...setsData[Number(set) - 1].fighters]));
        setAvailableBattlefields((availableBattlefields) => ([...availableBattlefields, ...setsData[Number(set) - 1].battlefields]));
      });
    }
  }, [locale])

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
          <Button text={t('buttons.showMore')} onClick={() => setDisplayedOptions(setsData.length)} />
        }
        <div className={displayedOptions > 6 ? styles.buttonsFixed : styles.buttons}>
          <Button onClick={() => handleRandom(2)} disabled={availableFighters.length < 2} text={t('buttons.for2players')} />
          <Button onClick={() => handleRandom(3)} disabled={availableFighters.length < 3} text={t('buttons.for3players')} />
          <Button onClick={() => handleRandom(4)} disabled={availableFighters.length < 4} text={t('buttons.for4players')} />
          <Button onClick={() => reset()} disabled={availableFighters.length === 0 && availableBattlefields.length === 0} text={t('buttons.reset')} />
          {locale === 'ru' &&
            <Button onClick={() => selectSets('ru')} disabled={ruSets === selectedSets.sort()} text={t('buttons.selectRu')} />
          }
          <Button onClick={() => selectSets('all')} disabled={selectedSets.length === setsData.length} text={t('buttons.selectAll')} />
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
            locale={locale}
          />
        }
      </main>
      <Footer />
    </>
  )
}