
import "../assets/scss/button.scss"


import {jura} from "@/utils/fonts.js"

export default function Button({text}) {
  return (
    <button className="input">

      <span className="-input-text"><span className={jura.className}>{text}</span></span>
    </button>
  )
}
