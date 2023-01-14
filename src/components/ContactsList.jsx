import React from 'react'

export const ContactsList = ({person}) => {
  return (
    <li>{person.name} {person.number}</li>
  )
}
