import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShelfChanger extends Component {
  state = {
    bool:false,
    id:""
  }
   shelfTypes = [
    { type: 'currentlyReading', title: 'Currently Reading' },
    { type: 'wantToRead', title: 'Want to Read' },
    { type: 'read', title: 'Read' },
    {type:'none',title:"None"}
  ];

  toggle = ()=> this.setState(prev =>({ bool: !prev.bool}));
  updateShelf = event => this.props.rearrangeShelf(this.props.book, event.target.id);


  render() {
    const { book, books } = this.props;

    // set current shelf to none as default
    let currentShelf = 'none';

    // check if book has an existing shelf and assign to "currentShelf"
    for (let item of books) {
      if (item.id === book.id) {
        currentShelf = item.shelf;
      }

    }
    //Get the Index ShelfTypes where type matches currentShelf
    const index = this.shelfTypes.findIndex(item => item.type === currentShelf);

    //Set title to a jsx element on the index having type that matches with "currentShelf"
      if(this.shelfTypes[index].type === currentShelf){
        if( typeof this.shelfTypes[index].title === "string"){
          this.shelfTypes[index].title = <span id={currentShelf} className="current-shelf">{this.shelfTypes[index].title}</span>
           }

      }

    return (
      <div className="book-shelf-changer" onClick={this.toggle}>
       <div onClick={this.updateShelf} className="book-shelf-selector">
         {this.state.bool && this.shelfTypes.map(shelf => <p key={shelf.type} name={shelf.type} id={shelf.type} >{shelf.title}</p>)}
       </div>

      </div>
    );
  }
}
ShelfChanger.propTypes = {
  book: PropTypes.object.isRequired,
  books: PropTypes.array.isRequired,
  rearrangeShelf:PropTypes.func.isRequired,


};
export default ShelfChanger;
