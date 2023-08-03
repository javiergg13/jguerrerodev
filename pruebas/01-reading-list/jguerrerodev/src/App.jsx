// import { useState } from 'react'
import './App.css'
import { Books } from './components/libros'
import * as ListOfBooks from '../../books.json'


function App() {
  // const [unavailableBooks, setUnavailableBooks] = useState()

  return (
    <>
      <h1>libros disponibles</h1>

      <Books listOfBooks={ListOfBooks} />
    </>
  )
}

export default App
