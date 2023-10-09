'use client'

import Link from 'next/link';
import styles from './header.module.scss';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import { useEffect, useState } from 'react';

export default function Header() {

  const router = useRouter();
  const [currentPage, setCurrentPage] = useState('');

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, [])

  return (
    <header className={styles.header}>
      <Image src={logo} alt='Логотип' onClick={() => router.push('/')} />
      <nav>
        <Link href='/' className={currentPage === '/' ? styles.linkActive : styles.link}>Главная</Link>
        <Link href='/sets' className={currentPage === '/sets' ? styles.linkActive : styles.link}>Наборы</Link>
        <Link href='/manual' className={currentPage === '/manual' ? styles.linkActive : styles.link}>Ручной выбор</Link>
        <Link href='/rules' className={currentPage === '/rules' ? styles.linkActive : styles.link}>Правила</Link>
        <Link href='/mysets' className={currentPage === '/mysets' ? styles.linkActive : styles.link}>Мои наборы</Link>
      </nav>
    </header>
  )
}