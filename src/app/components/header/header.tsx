'use client'

import Link from 'next/link';
import styles from './header.module.scss';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import logo from '../../../../public/logo.png';

export default function Header () {

  const router = useRouter();

  return (
    <header className={styles.header}>
      <Image src={logo} alt='Логотип' onClick={() => router.push('/')} />
      <nav>
        <Link href='/sets'>Наборы</Link>
        <Link href='/manual'>Ручной выбор</Link>
        <Link href='/rules'>Правила</Link>
      </nav>
    </header>
  )
}