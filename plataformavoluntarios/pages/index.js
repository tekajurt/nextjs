import { Inter } from '@next/font/google'
import Template from './componens/template'
import Start from "./home"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Start />
  )
}
