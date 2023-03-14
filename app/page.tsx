import Image from 'next/image'
import { Inter } from 'next/font/google'
import MobileMenu from './components/MobileMenu'
import HomePage from './components/HomePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      {/* <MobileMenu/> */}
      <HomePage/>
    </main>
  )
}
