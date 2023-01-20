import { useState, useEffect } from 'react'
import axios from 'axios'
import './App.css'
import { ContactsList } from './components/ContactsList'
import { SearchInput } from './components/SearchInput'
import { Form } from './components/Form'
import { ContactsCard } from './components/ContactsCard'

function App() {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")
  const [query, setQuery] = useState("")
  const [showAll, setShowAll] = useState(true)

useEffect(() => {
  axios.get("http://127.0.0.1:5174/persons")
  .then((response) =>{
    setPersons(response.data)
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

    let data = persons.find((person) => person.name === newName)

    if(data){
      
      return window.alert(`${data.name} is already added to phonebook`)
    }

    axios.post("http://127.0.0.1:5174/persons", contactObj)
    .then((response) => {
      console.log(response)
      setPersons(persons.concat(response.data))
    })
     

    
    setNewName('')
    setNewNumber('')
  }

  const contactFiltered =  persons.filter((person) => person.name.toLowerCase().includes(query.trim().toLowerCase()))

  return (
    <div className="App">
      <h1>PhoneBook</h1>
      <SearchInput query={query} setQuery={setQuery} />
      <div className="form">
        <h2>Add New Contact</h2>
        <Form addContact={addContact} newName={newName} handleChange={handleChange} newNumber={newNumber} setNewNumber={setNewNumber} />

        <h2>Number</h2>

        <ContactsCard contactFiltered={contactFiltered} />
      </div>
      
    </div>
  )
}

export default App
