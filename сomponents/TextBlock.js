import "@/assets/scss/textBlock.scss"

import {Jura, Manrope } from 'next/font/google'


const jura = Jura({
  subsets: ['latin'],
})

const manrope = Manrope({
  subsets: ['latin'],
})


export default function TextBlock({title,children}) {
  return (
    <div className="text-block">
        <h1 className='-text-block-title'><span className={jura.className}>{title}</span></h1>
        <span className='-text-block-text'><span className={manrope.className}>{children}</span></span>
    </div>
  )
}
