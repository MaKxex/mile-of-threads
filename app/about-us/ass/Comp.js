import React from 'react'

export default function Comp(props) {
  console.log(props);
  return (
    <div>{props.text}</div>
  )
}
