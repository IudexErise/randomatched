'use client'

import Header from './../../components/header/header';
import Footer from './../../components/footer/footer';
import styles from './page.module.scss';
import Link from 'next/link';

export default function Rules() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <ul>
          Правила наборов для 4 игроков
        </ul>
        <ul>
          Правила наборов для 3 игроков
        </ul>
        <ul>
          Правила наборов для 2 игроков
        </ul>
      </main>
      <Footer />
    </>
  )
}