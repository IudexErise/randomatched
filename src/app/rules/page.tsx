'use client'

import Header from './../../components/header/header';
import Footer from './../../components/footer/footer';
import styles from './page.module.scss';
import Link from 'next/link';
import { rulesData4, rulesData3, rulesData2 } from '@/data/rulesData';

export default function Rules() {

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Правила</h1>
        <div className={styles.rules}>
          <div className={styles.category}>
            <h2>Наборы для 4 игроков</h2>
            {
              rulesData4.map((rule) => {
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
            }
          </div>
          <div className={styles.category}>
            <h2>Наборы для 3 игроков</h2>
            {
              rulesData3.map((rule) => {
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
            }
          </div>
          <div className={styles.category}>
            <h2>Наборы для 2 игроков</h2>
            {
              rulesData2.map((rule) => {
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
            }
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}