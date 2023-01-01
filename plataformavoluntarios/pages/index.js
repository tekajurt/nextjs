import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Navbar from "./nav"
import Footer from "./footer"
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Navbar />
      <div className='container-fluid bg-light'>
        hola
      </div>
      <Footer/>
    </>
  )
}
