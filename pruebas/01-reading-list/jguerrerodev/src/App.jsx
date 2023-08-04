import { useState, useRef } from 'react'
import './App.css'
import { Books } from './components/libros'
import * as ListOfBooks from '../../books.json'
import Slider from '@mui/material/Slider';


function App() {
  const [filteredBooks, setFilteredBooks] = useState(ListOfBooks.library)
  const [value, setValue] = useState([0, 1000])

  const originalUsers = useRef()

  const genderList = (ListOfBooks) => {
    const genderSet = new Set()

    ListOfBooks.library.map(({ book }) => {
      genderSet.add(book.genre)
    })

    return Array.from(genderSet).map((gender) => {
      return (
        <option value={gender} key={gender} onClick={handleChangeFiltroGenero(gender)}>{gender}</option>
      )
    })
  }

  const handleChangeFiltroPaginas = (event, newValue) => {
    setValue(newValue)
    const newFilteredBooks = ListOfBooks.library.filter(({ book }) => book.pages >= newValue[0] && book.pages <= newValue[1])
    setFilteredBooks(newFilteredBooks)
    originalUsers.current = newFilteredBooks
  }

  const handleChangeFiltroGenero = (gender) => {

  }


  return (
    <>
      <header>
        <h1>{filteredBooks.length} libros disponibles</h1>
      </header>

      <section className='menu-container'>
        <aside className='filtrar-paginas'>
          <h2>Filtrar por páginas</h2>
          <div className='page-filter-buttons'>
            <Slider
              max={1000}
              value={value}
              defaultValue={[0, 1000]}
              onChange={handleChangeFiltroPaginas}
              valueLabelDisplay="auto"
            />
          </div>
        </aside>

        <aside className='filtrar-genero'>
          <h2>Filtrar por género</h2>
          <select name='Generos' id='Generos' className='select-genero'>
            <option value='Todos' onClick={handleChangeFiltroGenero('todos')}>Todos</option>
            {genderList(ListOfBooks)}
          </select>
        </aside>
      </section>

      <span>Libros entre {value[0]} y {value[1]} páginas</span>

      <main>
        <Books listOfBooks={filteredBooks} />
      </main>
    </>
  )
}

export default App
