import React from 'react'

function Card({ name, email, id }) {
  return (
    <div className="tc bg-light-green dib mr3 pa3 ma2 grow bw2 shadow-5">
      <img src={`https://robohash.org/${id}`} alt="robots" />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  )
}

export default Card
