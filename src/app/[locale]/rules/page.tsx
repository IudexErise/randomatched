'use client'

import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import styles from './page.module.scss';
import Link from 'next/link';
import { rulesDataProps, rulesDataRu, rulesDataEn } from '@/data/rulesData';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';

interface RulesProps {
  params: {
    locale: string
  }
}

export default function Rules({params: {locale}} : RulesProps) {

  const [rulesData, setRulesData] = useState<rulesDataProps[]>([]);

  const t = useTranslations('pages.rules');

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

  useEffect(() => {
    if (locale === 'ru' ){
      setRulesData(rulesDataRu)
    } else {
      setRulesData(rulesDataEn)
    }
  }, [locale])

  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1>{t('pageName')}</h1>
        <div className={styles.rules}>
          <div className={styles.category}>
            <h2>{t('category4')}</h2>
            {rules4}
          </div>
          <div className={styles.category}>
            <h2>{t('category3')}</h2>
            {rules3}
          </div>
          <div className={styles.category}>
            <h2>{t('category2')}</h2>
            {rules2}
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}