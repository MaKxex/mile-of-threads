import {manrope} from "@/utils/fonts.js"

export default function ProductType({type}) {
  return (
    <div className="-type"><span className={manrope.className}>{type}</span></div>
  )
}
