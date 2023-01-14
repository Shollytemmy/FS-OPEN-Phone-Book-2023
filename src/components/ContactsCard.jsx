import React from 'react'
import { ContactsList } from './ContactsList'

export const ContactsCard = ({contactFiltered, }) => {
  return (
    <ul>
          {
            contactFiltered.length ?
            contactFiltered.map((person) => <ContactsList key={person.id} person={person} />)
            : (<h1>No Name in the Contact</h1>)
          }
        </ul>
  )
}
