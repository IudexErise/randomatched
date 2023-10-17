'use client'

import React, { useEffect, useState } from 'react';
import styles from './page.module.scss';
import Header from '../../../components/header/header';
import SetCard from '../../../components/setCard/setCard';
import Footer from '../../../components/footer/footer';
import { setsDataRu as setsData } from '@/data/setsData';
import Features from '@/components/features/features';

export default function MySets() {

  const [savedSets, setSavedSets] = useState<string[]>([]);

  const handleCardClick = (newElement: string) => {
    if (savedSets.includes(newElement)) {
      setSavedSets(savedSets.filter((set) => set !== newElement));
    } else {
      setSavedSets([...savedSets, newElement]);
    }
  }

  useEffect(() => {
    let local = localStorage.getItem('savedSets');
    if (local === null) {
      setSavedSets([]);
    } else {
      setSavedSets(JSON.parse(local));
    }
  }, [])

  useEffect(() => {
    let dataToSave = JSON.stringify(savedSets)
    localStorage.setItem('savedSets', dataToSave);
  }, [savedSets])


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

  let features = ['Выбирайте ваши наборы в 1 клик, чтобы сохранить выбор в дальнейшем']

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>Мои наборы</h1>
        <Features features={features} />
        <div className={styles.options}>
          {options}
        </div>
      </main>
      <Footer />
    </>
  )
}