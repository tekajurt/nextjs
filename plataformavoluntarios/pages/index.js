import { Inter } from '@next/font/google'
import Template from './template'
import Start from "./home"

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Template>
      <Start />
    </Template>
  )
}
