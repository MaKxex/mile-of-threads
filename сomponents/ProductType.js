import React from 'react'

import {Manrope } from 'next/font/google'

const manrope = Manrope({
    subsets: ['latin'],
  })
  

export default function ProductType({type}) {
  return (
    <div className="-type"><span className={manrope.className}>{type}</span></div>
  )
}
