import React from 'react'
import { CardsData } from '../../data/Data'
import Card from './Card'

export default function Cards() {
  return (
    <div className='dashCards'>
      {CardsData.map((card, id) => {
        return (
          <div className="parentContainer"
          key={id} >
            <Card
            title={card.title}
            color={card.color}
            barValue={card.barValue}
            count={card.count}
            icon={card.icon}
            series={card.series}
            />
          </div>
        )
      })}
    </div>
  )
}
