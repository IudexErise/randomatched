'use client'

import styles from './page.module.scss';
import Header from './../../components/header/header';
import SetCard from './../../components/setCard/setCard';
import Footer from './../../components/footer/footer';
import { setsData } from '@/data/setsData';

export default function Sets() {

  let selected: string[] = [];
  let availableHeroes : string[] = [];

  const handleCardClick = (newElement: string) => {
    if (selected.includes(newElement)) {
      let filteredArray = selected.filter((el) => el !== newElement);
      selected = filteredArray;
    } else {
      selected = [...selected, newElement];
    }
  }

  const handleRandom = () => {
    selected.forEach((item : string) => {
      let arrayIndex : number = Number(item) - 1;
      availableHeroes = [...availableHeroes, ...setsData[arrayIndex].fighters];
    })
    let hero1 = Math.floor(Math.random() * (availableHeroes.length - 1));
    let hero2 = Math.floor(Math.random() * (availableHeroes.length - 1));
    alert(`Игрок 1: ${availableHeroes[hero1]} Игрок 2: ${availableHeroes[hero2]}`)
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

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.options}>
          {options}
        </div>
        <div className={styles.buttons}>
          <button className={styles.button} onClick={() => handleRandom()}>Для 2 игроков</button>
          <button className={styles.button} onClick={() => handleRandom()}>Для 3 игроков</button>
          <button className={styles.button} onClick={() => handleRandom()}>Для 4 игроков</button>
        </div>
      </main>
      <Footer />
    </>
  )
}