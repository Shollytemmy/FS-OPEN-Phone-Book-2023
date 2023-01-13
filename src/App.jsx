import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { ContactsList } from './components/ContactsList'

function App() {
  const [persons, setPersons] = useState([
    {id: 1, name: 'Arto Hellas'}
  ])

  console.log(persons)
  const [newName, setNewName] = useState("")


  const handleChange = (e) =>{
    setNewName(e.target.value)

  }

  const addContact = (e) =>{
    e.preventDefault()
    let contactObj = {
      name: newName,
      id: persons.length + 1
    }

    let data = persons.find((person) => person.name === newName)

    if(data){
      
      return window.alert(data.name + " Already exist")
    }
     

    setPersons(persons.concat(contactObj))
    setNewName('')
  }

  return (
    <div className="App">
      <h1>PhoneBook</h1>
      <div className="form">
        <form action="" onSubmit={addContact}>
          <div className="input">
            <input type="text" value={newName} onChange={handleChange} />
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
