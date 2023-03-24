"use client";

import React from 'react'
import "../assets/scss/layout.scss"
import Image from 'next/image'

import Link from 'next/link'



import {jura, manrope } from '../utils/fonts.js'

import SubNav from './SubNav';
import Logo from './Logo.js';
import NavBarIcons from './NavBarIcons';


export default function Header() {
  return (
    <div className='navbar'>
        <div className='-top'>
            <div></div>
            <Logo/>
            <NavBarIcons />
        </div>
        <div className='-bottom'>
            <SubNav />


        </div>



    </div>
  )
}
