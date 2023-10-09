'use client'

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Header from '../../components/header/header';
import SetCard from '../../components/setCard/setCard';
import Footer from '../../components/footer/footer';
import { setsData } from '@/data/setsData';

export default function MySets() {

  const getSavedSets = () => {
    let local = localStorage.getItem('savedSets');
    if (local === null) {
      return [];
    } else {
      return JSON.parse(local);
    }
  }

  const [savedSets, setSavedSets] = useState<string[]>(getSavedSets());

  const handleCardClick = (index: string) => {
    if (savedSets.includes(index)) {
      setSavedSets((savedSets) => (savedSets.filter((set) => set !== index)));
    } else {
      setSavedSets((savedSets) => ([...savedSets, index]));
    }
    console.log(savedSets)
    let dataToSave = JSON.stringify(savedSets)
    localStorage.setItem('savedSets', dataToSave);
  }


  let options = setsData.map((option) => {
    return (
      <SetCard
        key={option.setIndex}
        setIndex={option.setIndex}
        setName={option.setName}
        imgSrc={option.imgSrc}
        onClick={() => handleCardClick(option.setIndex)}
        selectedSets={savedSets}
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
      </main>
      <Footer />
    </>
  )
}