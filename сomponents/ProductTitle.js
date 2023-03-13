

import {Jura} from 'next/font/google'

const jura = Jura({
    subsets: ['latin'],
})


export default function ProductTitle({title}) {
  return (
    <div className="-title">
        <h1 className={jura.className}>{title}</h1>
    </div>
  )
}
