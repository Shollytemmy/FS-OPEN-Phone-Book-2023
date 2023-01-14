import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ContactsList } from './components/ContactsList'

function App() {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])

  console.log(persons)
  const [newName, setNewName] = useState("")
  const [newNumber, setNewNumber] = useState("")


  const handleChange = (e) =>{
    setNewName(e.target.value)

  }

  const addContact = (e) =>{
    e.preventDefault()
    let contactObj = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }

    let data = persons.find((person) => person.name === newName)

    if(data){
      
      return window.alert(`${data.name} is already added to phonebook`)
    }
     

    setPersons(persons.concat(contactObj))
    setNewName('')
    setNewNumber('')
  }

  return (
    <div className="App">
      <h1>PhoneBook</h1>
      <div className="form">
        <form action="" onSubmit={addContact}>
          <div className="input">
            <input type="text" value={newName} onChange={handleChange} />
          </div>
          <div className="number">
            <input type="text" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
          </div>
          <div className="button">
            <button type='submit'>Add</button>
          </div>
        </form>
        <h2>Number</h2>

        <ul>
          {
            persons.map((person) => <ContactsList key={person.id} person={person} />)
          }
        </ul>
      </div>
      
    </div>
  )
}

export default App
