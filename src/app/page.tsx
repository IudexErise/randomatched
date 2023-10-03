import Image from 'next/image'
import styles from './page.module.css'
import Footer from './components/footer/footer'
import Main from './components/main/main'
import Header from './components/header/header'

export default function Home() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  )
}
