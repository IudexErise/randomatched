'use client'

import Link from 'next/link';
import styles from './header.module.scss';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { useEffect, useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname } from 'next-intl/client';

export default function Header() {

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState('');
  const t = useTranslations('components.nav');
  const h = useTranslations('components.header');

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, [])

  const pathname = usePathname();
  const locale = useLocale();

  return (
    <header className={styles.header}>
      <Image src={logo} alt={t('logo')} onClick={() => router.push(t('redir1'))} priority />
      <nav>
        <Link href={t('redir1')} className={currentPage === t('redir1') ? styles.linkActive : styles.link}>{t('nav1')}</Link>
        <Link href={t('redir2')} className={currentPage === t('redir2') ? styles.linkActive : styles.link}>{t('nav2')}</Link>
        <Link href={t('redir3')} className={currentPage === t('redir3') ? styles.linkActive : styles.link}>{t('nav3')}</Link>
        <Link href={t('redir4')} className={currentPage === t('redir4') ? styles.linkActive : styles.link}>{t('nav4')}</Link>
        <Link href={t('redir5')} className={currentPage === t('redir5') ? styles.linkActive : styles.link}>{t('nav5')}</Link>
      </nav>
      <div className={styles.langs}>
        <Link
          locale='ru'
          href={`/ru${pathname}`}
          className={locale === 'ru' ? styles.langActive : styles.lang}
        >
          Ru
        </Link>
        <Link
          locale='en'
          href={`/en${pathname}`}
          className={locale === 'en' ? styles.langActiveEn : styles.lang}
        >
          En
        </Link>
      </div>
    </header>
  )
}