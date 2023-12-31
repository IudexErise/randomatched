'use client'

import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import { BattlefieldProps, allBattlefieldsData, allFightersData, allSetsArray, allSetsData } from '@/data/setsData';
import SetManualCard from '../../../components/setManualCard/setManualCard';
import styles from './page.module.scss';
import { useEffect, useState } from 'react';
import ResultModal from '@/components/resultModal/resultModal';
import Button from '@/components/button/button';
import Features from '@/components/features/features';
import { useTranslations } from 'next-intl';

interface ManualProps {
  params: {
    locale: string
  }
}

export default function Manual({params: {locale}} : ManualProps) {

  const [showModal, setShowModal] = useState<boolean>(false);
  const [playersNumber, setPlayersNumber] = useState<number>(0);
  const [randomNumbers, setRandomNumbers] = useState<number[]>([]);
  const [availableFighters, setAvailableFighters] = useState<string[]>([]);
  const [availableBattlefields, setAvailableBattlefields] = useState<BattlefieldProps[]>([]);
  const [displayedOptions, setDisplayedOptions] = useState<number>(6);

  const t = useTranslations('pages.manual');

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
    setAvailableFighters([]);
    setAvailableBattlefields([]);
  }

  const selectAll = (range : string) => {
    if (range === 'fighters') {
      setAvailableFighters(allFightersData);
    } else {
      setAvailableBattlefields(allBattlefieldsData);
    }
    setDisplayedOptions(allSetsArray.length);
  }

  useEffect(() => {
    let savedFighters = localStorage.getItem('savedFighters');
    if (savedFighters === null) {
      setAvailableFighters([]);
    } else {
      let data = savedFighters.split(',');
      setAvailableFighters(data);
    }
  }, [])

  useEffect(() => {
    let savedBattlefields = localStorage.getItem('savedBattlefields');
    if (savedBattlefields === null) {
      setAvailableBattlefields([]);
    } else {
      let data = JSON.parse(savedBattlefields);
      setAvailableBattlefields(data);
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('savedBattlefields', JSON.stringify(availableBattlefields));
    localStorage.setItem('savedFighters', availableFighters.toString());
  }, [availableBattlefields, availableFighters])

  let options = allSetsArray.slice(0, displayedOptions).map((card) => {
    return (
      <SetManualCard
        key={card.setIndex}
        setIndex={card.setIndex}
        fighters={card.fighters}
        battlefields={card.battlefields}
        availableFighters={availableFighters}
        setAvailableFighters={setAvailableFighters}
        availableBattlefields={availableBattlefields}
        setAvailableBattlefields={setAvailableBattlefields}
      />
    )
  })

  let features = [t('feature1'), t('feature2'), t('feature3')]

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>{t('pageName')}</h1>
        <Features features={features} />
        <div className={styles.cards}>
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
          <Button onClick={() => selectAll('fighters')} disabled={availableFighters.length === allFightersData.length} text={t('buttons.allFighters')} />
          <Button onClick={() => selectAll('all')} disabled={availableBattlefields.length === allBattlefieldsData.length} text={t('buttons.allBattlefields')} />
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