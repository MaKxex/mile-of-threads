import "@/assets/scss/addToCart.scss"

import {Jura } from 'next/font/google'

const jura = Jura({
    subsets: ['latin'],
  })


export default function AddToCart({text,style}) {
  return (
    <button className="-addToCart" type="button" style={style} ><span className={jura.className}>{text}</span></button>
  )
}
