'use client'

import { useRouter } from 'next/navigation';
import styles from './main.module.scss';
import Image from 'next/image';
import vol1 from '../../../public/vol1.jpg';
import vol2Blurred from '../../../public/vol2Blurred.jpg';
import rules from '../../../public/rules.jpg';
import mysets from '../../../public/mysets.jpg';
import {useTranslations} from 'next-intl';

export default function Main() {

  const t = useTranslations('pages.main');

  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.item} onClick={() => router.push(t('redir1'))}>
        <Image src={vol1} alt='' priority />
        <h2>{t('opt1')}</h2>
      </div>
      <div className={styles.item} onClick={() => router.push(t('redir2'))}>
        <Image src={vol2Blurred} alt='' priority />
        <h2>{t('opt2')}</h2>
      </div>
      <div className={styles.item} onClick={() => router.push(t('redir3'))}>
        <Image src={rules} alt='' priority />
        <h2>{t('opt3')}</h2>
      </div>
      <div className={styles.item} onClick={() => router.push(t('redir4'))}>
        <Image src={mysets} alt='' priority />
        <h2>{t('opt4')}</h2>
      </div>
    </main>
  )
}