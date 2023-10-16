'use client'

import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import styles from './page.module.scss';
import Link from 'next/link';
import { rulesData } from '@/data/rulesData';

export default function Rules() {

  const sortRules = (players: number) => {
    let rules = rulesData.filter((item) => item.playersCount === players).map((rule) => {
      return (
        <Link
          target='_blank'
          href={rule.rulesPath}
          key={rule.rulesName}
          className={styles.link}
        >
          {rule.rulesName}
        </Link>
      )
    })
    return rules
  }

  let rules4 = sortRules(4);
  let rules3 = sortRules(3);
  let rules2 = sortRules(2);

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Правила</h1>
        <div className={styles.rules}>
          <div className={styles.category}>
            <h2>Наборы для 4 игроков</h2>
            {rules4}
          </div>
          <div className={styles.category}>
            <h2>Наборы для 3 игроков</h2>
            {rules3}
          </div>
          <div className={styles.category}>
            <h2>Наборы для 2 игроков</h2>
            {rules2}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}