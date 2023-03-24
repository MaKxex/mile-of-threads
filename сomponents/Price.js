import {jura} from "@/utils/fonts.js"


export default function Price({price,currency}) {
  return (
    <div className={jura.className}>
        <span className="-price">{price}<span className="-currency">{currency}</span></span>
    </div>
  )
}
