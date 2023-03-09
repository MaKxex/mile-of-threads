"use client";

import React from 'react'
import "../assets/scss/layout.scss"
import Logo from "../assets/img/logo.svg"
import Image from 'next/image'

import Link from 'next/link'



import {Jura, Manrope } from 'next/font/google'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';


const jura = Jura({
  weight: '400',
  subsets: ['latin'],
})

const manrope = Manrope({
  weight: '500',
  subsets: ['latin'],
})


export default function Header() {
  return (
    <div className='navbar'>
        <div className='-top'>
            <div></div>
            <Link className='logo' href="/">
                <Image className='logo' src={Logo} alt='logo'/>
            </Link>
            <div className='-navbar_btns'>
              <Link href="/#"><AccountCircleOutlinedIcon className='-navBtns' /></Link>
              <Link href="/#"><BackpackOutlinedIcon className='-navBtns' /></Link>
              <Link href="/#" className='-navBtns'><span className={manrope.className}>rus</span></Link>
            </div>
        </div>
        <div className='-bottom'>
            <Link className={jura.className} href="/whats-new">Что нового?</Link>
            <Link className={jura.className} href="/clothes">Одежда</Link>
            <Link className={jura.className} href="/accessories">Аксессуары</Link>
            <Link className={jura.className} href="/about-us">Кто мы?</Link>
        </div>
    
    </div>
  )
}
