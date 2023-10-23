'use client';
 
import {useTranslations} from 'next-intl';
import styles from './error.module.scss';
import Link from 'next/link';
 
export default function Error() {
  const t = useTranslations('pages.error');
 
  return (
    <div className={styles.container}>
    <div className={styles.headline}>
      <h1>404</h1>
      <h2>{t('error')}</h2>
    </div>
    <Link href='/'>{t('return')}</Link>
    </div>

  );
}