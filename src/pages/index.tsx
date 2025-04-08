import Image from 'next/image'
import { Inter } from 'next/font/google'
import Packages from '../component/Packages/Packages'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div style={{backgroundColor: "#e8e8e4"}}><Packages /></div>
    
  )
}
