'use client'

import Header from './../../components/header/header';
import Footer from './../../components/footer/footer';
import { setsData } from '@/data/setsData';
import SetManualCard from './../../components/setManualCard/setManualCard';
import styles from './page.module.scss';

export default function Manual () {

  let cards = setsData.map((set) => {
    return (
      <SetManualCard 
        setName={set.setName}
        imgSrc={set.imgSrc}
        fighters={set.fighters}
        battlefields={set.battlefields}
      />
    )
  }) 

  return (
    <>
    <Header />
    <main className={styles.main}>
      {cards}
    </main>
    <Footer />
    </>
  )
}