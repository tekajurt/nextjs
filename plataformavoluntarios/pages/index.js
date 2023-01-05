import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
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
