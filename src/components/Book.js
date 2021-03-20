import React from 'react';
import PropTypes from 'prop-types';

const Book = props => {
  const { book, books, rearrangeShelf } = props;

  // add fallbacks for missing cover images and title

  const title = book.title ? book.title : 'No title available';
  const CoverImage = () =>{
    return(
    book.imageLinks && book.imageLinks.thumbnail ? <div className="book-cover" style={{ backgroundImage: `url(${book.imageLinks.thumbnail})` }} >
    </div>:<div className="book-cover" style={{background:"green"}} >
         <p>No Cover Image</p>
            </div>
    )
  }
  const BookAuthor = ()=>{
    return(
      <div>
          {book.authors &&
         book.authors.map((author, index) => (
      <div className="book-authors" key={index}>
        {author}
      </div>
    ))}
      </div>
    )

  }

  return (
    <li>
      <div className="book">
        <div className="book-top">
          <CoverImage />
        </div>
        <div className="book-title">{title}</div>
        <BookAuthor />
      </div>
    </li>
  );
};

Book.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  rearrangeShelf: PropTypes.func.isRequired
};

export default Book;