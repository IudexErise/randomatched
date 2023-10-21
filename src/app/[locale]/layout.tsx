import { Inter } from 'next/font/google';
import './globals.scss';
import { Analytics } from '@vercel/analytics/react';
import {NextIntlClientProvider} from 'next-intl';
import {notFound} from 'next/navigation';

export interface LocaleProps {
  children: React.ReactNode,
  params: {
    locale: string
  }
}

const inter = Inter({ subsets: ['cyrillic', 'latin'] })

export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'ru'}];
}
 
export default async function LocaleLayout({children, params: {locale}} : LocaleProps) {
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
 
  return (
    <html lang={locale}>
      <body className={inter.className}>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
        <Analytics />
      </body>
    </html>
  );
}
