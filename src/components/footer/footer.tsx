'use client'

import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <nav>
        <Link href='/'>Главная</Link>
        <Link href='/sets'>Наборы</Link>
        <Link href='/manual'>Ручной выбор</Link>
        <Link href='/rules'>Правила</Link>
        <Link href='/mysets'>Мои наборы</Link>
      </nav>
      <p>Сайт-помощник для случайного выбора персонажа и поля для настольной игры Unmatched!</p>
    </footer>
  )
}