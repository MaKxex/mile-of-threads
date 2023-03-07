import React from 'react'
import "../assets/scss/layout.scss"
import Logo from "../assets/img/logo.svg"
import Image from 'next/image'

import Link from 'next/link'






export default function Header() {
  return (
    <div className='navbar'>
        <div className='-top'>
            <Link href="/">
                <Image src={Logo}/>
            </Link>
            <div className='-navbar_btns'>
              <div className='-navBtn'> Profile</div>
              <div className='-navBtn'> Cart</div>
              <div className='-navBtn'> Language</div>
              <div>Profile</div>
              <div>Cart</div>
              <div>Language</div>
            </div>
        </div>
        <div className='-bottom'>
            <Link href="/whats-new">Что нового?</Link>
            <Link href="/clothes">Одежда</Link>
            <Link href="/accessories">Аксессуары</Link>
            <Link href="/about-us">Кто мы?</Link>
        </div>
    
    </div>
  )
}
