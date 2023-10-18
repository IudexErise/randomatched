'use client'

import React from 'react';
import styles from './page.module.scss';
import Header from '../../../components/header/header';
import Footer from '../../../components/footer/footer';
import { useTranslations } from 'next-intl';
import Link from 'next/link';


export default function Contact() {

  const t = useTranslations('pages.contact');

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
        <h1>{t('pageName')}</h1>
        <p>{t('text1')}</p>
        <p>{t('text2')}</p>
        <div className={styles.contacts}>
          <b>Email:</b>
          <p className={styles.link}>vyacheslav.saprykin@gmail.com</p>
          <b>Telegram:</b>
          <Link href='https://t.me/IudexErise' className={styles.link}>@IudexErise</Link>
        </div>
        <p>
          {t('text3')}
          <Link href='https://github.com/IudexErise/randomatched/issues' className={styles.link}>GitHub</Link>
        </p>
        </div>

      </main>
      <Footer />
    </>
  )
}