
import React from 'react'
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from '../BooksAPI.js'
import BookList from './BookList';



class BooksApp extends React.Component {

  state = {
  categories:[],
  books:[]
  }

  /**
* @description get books array and extract unique shelf
* @param {array} data

*/
getBooks = data =>{
  //dynamically retrieve unique shelfs
  const shelfs = [...new Set(data.map(book => book.shelf))]
   this.setState(()=>{
    return {categories: shelfs, books:data}
   })
}

componentDidMount(){
  BooksAPI.getAll()
  .then((data) =>{
     this.getBooks(data)
  })
}

/**
 *@method
 *@description this method updates the shelf with new book(s) by sending PUT request to the book API using BooksAPI.update method.
  @param {object} updatedBook
  @param {string} shelf
*/
rearrangeShelf = (updatedBook, shelf) =>{
  BooksAPI.update(updatedBook,shelf)
  .then((res)=>{
  //set shelf for updated book
    updatedBook.shelf = shelf;
  //upadate the state with the updated book.
    this.setState(prevState => {
      //Remove updated book from  books by filtering and then add back using spread operator.
      const removeUpdateBook = prevState.books.filter(book => book.id !== updatedBook.id);
      return {
        books:[...removeUpdateBook, updatedBook]
      }
    });

  });

  }



  render() {
    const {books,categories} = this.state;


    return(
      <Router>
        <Route exact path="/"render={
          ()=>(
            <div className="list-books">
              <div className="list-books-title">
                <h1>My Reads</h1>
                <BookList books={books} rearrangeShelf={this.rearrangeShelf} categories={categories} />

              </div>

            </div>
          )
        }>

        </Route>
      </Router>
    )

  }
}

export default BooksApp
