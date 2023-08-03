/* eslint-disable react/prop-types */
export function Books({ listOfBooks }) {
  return (
    <div className='books-container'>
      {
        listOfBooks.library.map((book) => (
          <ul key={book.book.ISBN} style={{ padding: 0 }}>
            <img src={book.book.cover}
              alt={book.book.title}
              className='book-img'
            />
          </ul>
        ))
      }
    </div>
  )
}

