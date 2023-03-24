"use client";

import React from 'react'
import "../assets/scss/layout.scss"
import Logo from "../assets/img/logo.svg"
import Image from 'next/image'

import Link from 'next/link'



import {jura, manrope } from '../utils/fonts.js'

import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import BackpackOutlinedIcon from '@mui/icons-material/BackpackOutlined';
import SubnavContent from './SubnavContent';


export default function Header() {
  return (
    <div className='navbar'>
        <div className='-top'>
            <div></div>
            <Link className='logo' href="/">
                <Image className='logo' src={Logo} alt='logo'/>
            </Link>
            <div className='-navbar-icons'>
              <Link href="/#" className='-navbar-icon'><span className={manrope.className}>rus</span></Link>
              <Link href="/#"><AccountCircleOutlinedIcon className='-navbar-icon' /></Link>
              <Link href="/#"><BackpackOutlinedIcon className='-navbar-icon' /></Link>
            </div>
        </div>
        <div className='-bottom'>
            <div className='-subnav'>
              	<Link className={jura.className} href="/whats-new">Что нового?</Link>
				<SubnavContent />
				
            </div>


            <div className='-subnav'><Link className={jura.className} href="/clothes">Одежда</Link></div>
            <div className='-subnav'><Link className={jura.className} href="/accessories">Аксессуары</Link></div>
            <div className='-subnav'><Link className={jura.className} href="/custom">Кастом</Link></div>


        </div>



    </div>
  )
}
