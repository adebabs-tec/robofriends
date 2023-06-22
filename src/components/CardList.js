import React from 'react'
import Card from './card'

function CardList({ robots }) {
  return (
    <div>
      {robots.map((user, i) => {
        return (
          <Card
            key={i}
            name={robots[i].name}
            email={robots[i].email}
            id={robots[i].id}
          />
        )
      })}
    </div>
  )
}

export default CardList
