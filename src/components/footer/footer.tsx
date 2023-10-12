'use client'

import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <nav>
          <Link href='/' className={styles.link}>Главная</Link>
          <Link href='/sets' className={styles.link}>Наборы</Link>
          <Link href='/manual' className={styles.link}>Ручной выбор</Link>
          <Link href='/rules' className={styles.link}>Правила</Link>
          <Link href='/mysets' className={styles.link}>Мои наборы</Link>
        </nav>
        <div className={styles.textContainer}>
          <p className={styles.text}>Сайт-помощник для случайного выбора персонажа и поля для настольной игры Unmatched</p>
          <p className={styles.text}>Все права на продукт принадлежат Reasotation Games, Mondo Games, Iello и Gaga Games</p>
        </div>
      </div>
      <Link href='https://www.linkedin.com/in/iudexerise/' className={styles.myLink}>V.Saprykin 2023©</Link>
    </footer>
  )
}