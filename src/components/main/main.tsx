'use client'

import { useRouter } from 'next/navigation';
import styles from './main.module.scss';
import Image from 'next/image';
import vol1 from '../../../public/vol1.jpg';
import vol2Blurred from '../../../public/vol2Blurred.jpg';
import rules from '../../../public/rules.jpg';
import mysets from '../../../public/mysets.jpg';

export default function Main() {

  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.item} onClick={() => router.push('/sets')}>
        <Image src={vol1} alt='' priority />
        <h2>Наборы</h2>
      </div>
      <div className={styles.item} onClick={() => router.push('/manual')}>
        <Image src={vol2Blurred} alt='' priority />
        <h2>Ручной выбор</h2>
      </div>
      <div className={styles.item} onClick={() => router.push('/rules')}>
        <Image src={rules} alt='' priority />
        <h2>Правила</h2>
      </div>
      <div className={styles.item} onClick={() => router.push('/mysets')}>
        <Image src={mysets} alt='' priority />
        <h2>Мои наборы</h2>
      </div>
    </main>
  )
}