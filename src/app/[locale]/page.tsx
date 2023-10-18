'use client'

import Header from '../../components/header/header';
import Main from '../../components/main/main';
import Footer from '../../components/footer/footer';

interface HomeProps {
  params: {
    locale: string
  }
}

export default function Home({ params: { locale } }: HomeProps) {
  return (
    <>
      <Header />
      <Main locale={locale} />
      <Footer />
    </>
  )
}
