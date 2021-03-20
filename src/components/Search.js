import React, { Component } from 'react';
import Book from './Book';
import * as BooksAPI from '../BooksAPI';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Search extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    rearrangeShelf: PropTypes.func.isRequired
  };

  state = {
    query: '',
    returnedBooks: [],
    Err: false
  };

  searchBooks = event => {
    const query = event.target.value;
    this.setState({ query });

    // Run Search on the first input
    if (query) {
      BooksAPI.search(query.trim(), 20).then(books => {
        books.length
          ? this.setState({ returnedBooks: books, Err: false })
          : this.setState({ returnedBooks: [], Err: true });
      });

      // reset to default state if no input
    } else this.setState({ returnedBooks: [], Err: false });
  };

  render() {
    const { query, returnedBooks, Err } = this.state;
    const { books, rearrangeShelf } = this.props;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={this.searchBooks}
            />
          </div>
        </div>
        <div className="search-books-results">
          {returnedBooks.length > 0 && (
            <div>
              <h3>Search returned {returnedBooks.length} books </h3>
              <ol className="books-grid">
                {returnedBooks.map(book => (
                  <Book
                    book={book}
                    books={books}
                    key={book.id}
                    rearrangeShelf={rearrangeShelf}
                  />
                ))}
              </ol>
            </div>
          )}
          {Err && (
            <h3>Search did not return any books. Please try again!</h3>
          )}
        </div>
      </div>
    );
  }
}
export default Search;
