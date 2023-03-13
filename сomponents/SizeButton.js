
import "../assets/scss/button.scss"


import {Jura} from 'next/font/google'

const jura = Jura({
    subsets: ['latin'],
})
  

export default function Button({text}) {
  return (
    <button className="input">

      <span className="-input-text"><span className={jura.className}>{text}</span></span>
    </button>
  )
}
