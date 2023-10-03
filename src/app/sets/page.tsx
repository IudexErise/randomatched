'use client'

import styles from './page.module.scss';
import Header from './../../components/header/header';
import SetCard from './../../components/setCard/setCard';
import Footer from './../../components/footer/footer';
import { setsData } from '@/data/setsData';

export default function Sets() {

  let options = setsData.map((option) => {
    return (
      <SetCard setIndex={option.setIndex} setName={option.setName} imgSrc={option.imgSrc} />
    )
  })

  return (
    <>
      <Header />
      <main className={styles.main}>
        {options}
      </main>
      <Footer />
    </>
  )
}