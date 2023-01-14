import React from 'react'

export const Form = ({addContact,newName, handleChange, newNumber, setNewNumber }) => {
  return (
            <form action="" onSubmit={addContact}>
          <div className="input">
            <label htmlFor="">Name: </label>
            <input type="text" value={newName} onChange={handleChange} />
          </div>
          <div className="number">
            <label htmlFor="">Number: </label>
            <input type="text" value={newNumber} onChange={(e) => setNewNumber(e.target.value)} />
          </div>
          <div className="button">
            <button type='submit'>Add</button>
          </div>
        </form>
  )
}
