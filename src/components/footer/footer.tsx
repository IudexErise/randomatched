'use client'

import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <Link href='/sets'>Наборы</Link>
        <Link href='/manual'>Ручной выбор</Link>
        <Link href='/rules'>Правила</Link>
      </nav>
      <p>Отличный сайт, чтобы разнообразить выбор персонажа в Unmatched!</p>
    </footer>
  )
}