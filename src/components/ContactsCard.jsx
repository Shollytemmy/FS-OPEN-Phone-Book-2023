import React from 'react'
import { ContactsList } from './ContactsList'

export const ContactsCard = ({contactFiltered, handleDeleteContact }) => {
  return (
    <ul>
          {
            contactFiltered.length ?
            contactFiltered.map((person) => 
            <ContactsList
             key={person.id}
             id={person.id}
              person={person}
               handleDeleteContact={handleDeleteContact}
                />)
            : (<h1>No Name in the Contact</h1>)
          }
        </ul>
  )
}
