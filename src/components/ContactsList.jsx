import React from 'react'

export const ContactsList = ({person, handleDeleteContact, id}) => {
  return (
    <li className='contact'>{person.name} {person.number} <button onClick={() => handleDeleteContact(id)}>delete</button></li>
  )
}
