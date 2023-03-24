import {jura} from "@/utils/fonts.js"

export default function ProductTitle({title}) {
  return (
    <div className="-title">
        <h1 className={jura.className}>{title}</h1>
    </div>
  )
}
