import React from 'react';
import PropTypes from 'prop-types';

const BookList = (props) =>{
    const {books,rearrangeShelf,categories} = props;
    //set title for each shelf in books array
    const shelfTypes = [
        { type: categories[0], title: 'Currently Reading' },
        { type: categories[1], title: 'Want to Read' },
        { type:categories[2], title: 'Read' }
      ];

    return(
        <div>
            <div className="list-books-content">
                 {shelfTypes.map((shelf,index) => {
                     const bookshelfBooks = books.filter((book)=> book.shelf === shelf.type);
                     return (
                     <div key={index} className="bookshelf"  >
                          <h2 className="bookshelf-title">{shelf.title}</h2>

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