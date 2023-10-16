'use client'

import Link from 'next/link';
import styles from './footer.module.scss';
import { useTranslations } from 'next-intl';

export default function Footer() {

  const nav = useTranslations('components.nav');
  const f = useTranslations('components.footer');

  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <nav>
        <Link href={nav('redir1')} className={styles.link}>{nav('nav1')}</Link>
        <Link href={nav('redir2')} className={styles.link}>{nav('nav2')}</Link>
        <Link href={nav('redir3')} className={styles.link}>{nav('nav3')}</Link>
        <Link href={nav('redir4')} className={styles.link}>{nav('nav4')}</Link>
        <Link href={nav('redir5')} className={styles.link}>{nav('nav5')}</Link>
        </nav>
        <div className={styles.textContainer}>
          <p className={styles.text}>{f('description')}</p>
          <p className={styles.text}>{f('rights')}</p>
        </div>
      </div>
      <Link href='https://www.linkedin.com/in/iudexerise/' className={styles.myLink}>{f('author')}</Link>
    </footer>
  )
}