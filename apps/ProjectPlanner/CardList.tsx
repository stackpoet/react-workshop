import React from 'react'
import { Card } from './Card'
import { Heading } from './Heading'
import { BsThreeDots } from 'react-icons/bs'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import './CardList.scss'

type Props = {
  cardListId: number
  name: string
  cardIds: number[]
}

export const CardList: React.FC<Props> = ({ cardListId, name, cardIds }) => {
  return (
    <Droppable droppableId={`${cardListId}`}>
      {(provided: any) => {
        return (
          <div
            className="card-list spacing"
            // data-card-list-empty={itemIds.length > 0 ? undefined : ''}
          >
            <div className="flex-split">
              <div className="spacing">
                <Heading size={3}>{name}</Heading>
              </div>
              <div>
                <button className="text-small">
                  <BsThreeDots />
                </button>
              </div>
            </div>

            <div className="dropzone" {...provided.droppableProps} ref={provided.innerRef}>
              {Array.isArray(cardIds) &&
                cardIds.map((cardId, index) => {
                  return (
                    <Draggable key={cardId} draggableId={cardId + ''} index={index}>
                      {(provided: any) => {
                        return (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <Card cardId={cardId}>{cardId}</Card>
                          </div>
                        )
                      }}
                    </Draggable>
                  )
                })}
              {provided.placeholder}
            </div>

            <div className="flex-split">
              <div>...</div>
              <div>
                <button className="button button-small button-outline">Add Card</button>
              </div>
            </div>
          </div>
        )
      }}
    </Droppable>
  )
}
