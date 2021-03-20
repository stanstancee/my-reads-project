import React  from 'react';



const Shelf = (props)=>{
    return (
        <ol className="books-grid">
          {props.books.map(book => (
            <h1 key={book.id}> book </h1>
          ))}
        </ol>
      );
}

export default Shelf;