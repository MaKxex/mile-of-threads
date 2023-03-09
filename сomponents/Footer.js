import React from 'react'
import "../assets/scss/layout.scss"
import FooterContent from './FooterContent'

import {Jura, Manrope } from 'next/font/google'

const jura = Jura({
    subsets: ['latin'],
  })
  
  const manrope = Manrope({
    subsets: ['latin'],
  })
  

var links = [{
  text: "Кто мы?",
  href: "/about-us"
},
{
  text: "Хочешь подзаработать?",
  href: "/hh"
}
]


export default function Footer() {
  return (
    
      <div className='footer container'>
        {/* <FooterContent title="asd" links={links}/> */}


        
        <div className='-footer-content-block'>
          <div className= "-footer-content-title">
                <h1 className={jura.className}>Для нас </h1>
          </div>

          <div className='-footer-content'>
                <a className={manrope.className} href="/about-us">Кто мы?</a>
                <a className={manrope.className} href="/hh">Хочешь подзаработать?</a>
          </div>
        </div>

        <div className='-footer-content-block'>
          <div className= "-footer-content-title">
                <h1 className={jura.className}>Информация</h1>
          </div>
          <div className='-footer-content'>
                <a className={manrope.className} href="/delivery">Что там с доставкой?</a>
                <a className={manrope.className} href="/refund">Не понравилось! Возврат!</a>
          </div>

        </div>

        <div className='-footer-content-block'>
          <div className= "-footer-content-title">
                <h1 className={jura.className}>Для любимых клиентов </h1>
          </div>
          <div className='-footer-content'>
                <a className={manrope.className} href="/discount">Хочу скидочку</a>
                <a className={manrope.className} href="/">Вопрос - ответ</a>
          </div>

        </div>

        <div className='-footer-content-block'>
          <div className= "-footer-content-title">
            <h1 className={jura.className}>Смотри, как мы развиваемся!</h1>
          </div>
          <div className='-footer-content'>
                <a className={manrope.className} href="https://www.instagram.com/mileofthreads/">Instagram</a>
                {/* <a className={manrope.className} href="/hh">Facebook</a> */}
                <a className={manrope.className} href="/#">TikTok</a>
          </div>

        </div>
      </div>
  )
}
