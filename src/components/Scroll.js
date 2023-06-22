import React from 'react'

export default function Scroll(props) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        height: '800px',
        border: ' 1px solid black',
      }}
    >
      {props.children}
    </div>
  )
}
