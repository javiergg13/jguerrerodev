/* eslint-disable react/prop-types */
export function Books({ listOfBooks }) {
  return (
    <section className='books-container'>
      {
        listOfBooks.map(({ book }) => (
          <ul key={book.ISBN} style={{ padding: 0 }}>
            <img src={book.cover}
              alt={book.title}
              className='book-img'
            />
          </ul>
        ))
      }
    </section>
  )
}
