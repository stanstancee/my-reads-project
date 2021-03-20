import React from 'react';
import PropTypes from 'prop-types';
import Shelf from './Shelf';

const BookList = (props) =>{
    const {books,rearrangeShelf,categories} = props;
    //set title for each shelf in books array
    const shelves = [
        { type: categories[0], title: 'Currently Reading' },
        { type: categories[1], title: 'Want to Read' },
        { type:categories[2], title: 'Read' }
      ];

    return(
        <div>
            <div className="list-books-content">
                 {shelves.map((shelf,index) => {
                     const bookshelfBooks = books.filter((book)=> book.shelf === shelf.type);
                     return (
                     <div key={index} className="bookshelf"  >
                          <h2 className="bookshelf-title">{shelf.title}</h2>
                          <Shelf books={bookshelfBooks} rearrangeShelf={rearrangeShelf} />

                    </div>
                     );
                     })}
             </div>
        </div>
    )
}
BookList.propTypes = {
    books:PropTypes.array.isRequired,
    rearrangeShelf:PropTypes.func.isRequired,
    categories:PropTypes.array
}
export default BookList;