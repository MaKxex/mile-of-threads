
import {Jura} from 'next/font/google'

const jura = Jura({
    subsets: ['latin'],
})
  


export default function Price({price,currency}) {
  return (
    <div className={jura.className}>
        <span className="-price">{price}<span className="-currency">{currency}</span></span>
    </div>
  )
}
