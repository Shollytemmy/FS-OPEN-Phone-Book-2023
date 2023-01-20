import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { ContactsList } from './components/ContactsList'
import { SearchInput } from './components/SearchInput'
import { Form } from './components/Form'
import { ContactsCard } from './components/ContactsCard'
import contactsServices from "./services/contacts"
import { Notification } from './components/Notification'
import { Footer } from './components/Footer'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [query, setQuery] = useState("")
  const [showMessage, setMessage] = useState("Added contacts")


useEffect(() => {
  contactsServices
  .getAllPersons()
  .then((contact) =>{
    setPersons(contact)
  })

}, [])






  const handleChange = (e) =>{
    setNewName(e.target.value)

  }

  const addContact = (e) =>{
    e.preventDefault()
    let contactObj = {
      name: newName,
      number: newNumber
    }

    if(!newName || !newNumber) return

    let data = persons.find((person) => person.name === newName && person.number === newNumber)
    // console.log(data)

    if(data){
      
      if (window.confirm(`${data.name} Alredy exist Do you want to replace the old name iwth the new name ? `));
      contactsServices.updatePersons(data.id, contactObj)
      .then((response) => {
        setMessage(`${response.name} contacts Edited`)
      setTimeout(() => {
        setMessage(null)

      },2000)

        setPersons(persons.map((person) => person.id === data.id ? {...person, response} : person))
      })
       return 
    }

    contactsServices.createPersons(contactObj)
    .then((response) => {
      
      setPersons(persons.concat(response))
      setMessage(`${response.name} added to the phonebook`)
      setTimeout(() => {
        setMessage(null)

      },2000)

      
    })

 
    setNewName('')
    setNewNumber('')
  }


  const handleDeleteContact = (id) =>{
    if(window.confirm('Are you sure you want to delete'))

    contactsServices.removePersons(id)
    .then((response) => {
      setPersons(persons.filter((person) => person.id !== id))
      // console.log(response)
    })
  }







  const contactFiltered =  persons.filter((person) => person.name.toLowerCase().includes(query.trim().toLowerCase()))

  return (
    <div className="App">
      <Notification message={showMessage} />
      <h1>PhoneBook</h1>
      <SearchInput query={query} setQuery={setQuery} />
      <div className="form">
        <h2>Add New Contact</h2>
        <Form addContact={addContact} newName={newName} handleChange={handleChange} newNumber={newNumber} setNewNumber={setNewNumber} />

        <h2>Number</h2>

        <ContactsCard contactFiltered={contactFiltered} handleDeleteContact={handleDeleteContact} />
      </div>

      <Footer />
    </div>
  )
}

export default App
/**return window.alert(`${data.name} is already added to phonebook`) */