'use client'

import { useRouter } from 'next/navigation';
import styles from './main.module.scss';
import Image from 'next/image';
import vol1ru from '../../../public/vol1ru.jpg';
import vol2ru from '../../../public/vol2ru.jpg';
import vol1en from '../../../public/vol1en.jpg';
import vol2en from '../../../public/vol2en.jpg';
import rulesRu from '../../../public/rulesRu.jpg';
import rulesEn from '../../../public/rulesEn.jpg';
import mysets from '../../../public/mysets.jpg';
import mysetsEn from '../../../public/mysetsEn.jpg';
import { useTranslations } from 'next-intl';

interface MainProps {
  locale: string
}

export default function Main({ locale }: MainProps) {

  const t = useTranslations('pages.main');

  const router = useRouter();

  return (
    <main className={styles.main}>
      <div className={styles.item} onClick={() => router.push(t('redir1'))}>
        {locale === 'ru' ?
          <Image src={vol1ru} alt='' priority />
          :
          <Image src={vol1en} alt='' priority />
        }
        <h2>{t('opt1')}</h2>
      </div>
      <div className={styles.item} onClick={() => router.push(t('redir2'))}>
      {locale === 'ru' ?
          <Image src={vol2ru} alt='' priority />
          :
          <Image src={vol2en} alt='' priority />
        }
        <h2>{t('opt2')}</h2>
      </div>
      <div className={styles.item} onClick={() => router.push(t('redir3'))}>
      {locale === 'ru' ?
          <Image src={rulesRu} alt='' priority />
          :
          <Image src={rulesEn} alt='' priority />
        }
        <h2>{t('opt3')}</h2>
      </div>
      <div className={styles.item} onClick={() => router.push(t('redir4'))}>
      {locale === 'ru' ?
          <Image src={mysets} alt='' priority />
          :
          <Image src={mysetsEn} alt='' priority />
        }
        <h2>{t('opt4')}</h2>
      </div>
    </main>
  )
}