import React from 'react'

export default function Scroll(props) {
  return (
    <div
      style={{
        overflowY: 'scroll',
        height: '500px',
        border: ' 1px solid black',
      }}
    >
      {props.children}
    </div>
  )
}
