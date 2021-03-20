import React  from 'react';
import Book from './Book';
import PropTypes from 'prop-types';
const Shelf = (props)=>{
    const { books , rearrangeShelf} = props;
    return (
        <ol className="books-grid">
          {books.map(book => (
            <Book
              book={book}
              books={books}
              key={book.id}
              rearrangeShelf={rearrangeShelf}
            />
          ))}
        </ol>
      );
}
Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    rearrangeShelf: PropTypes.func.isRequired
  };
export default Shelf;