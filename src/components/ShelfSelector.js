
import React,{Component} from 'react';
import PropTypes from 'prop-types';

class ShelfSelector extends Component{
    static  PropTypes = {
        rearrangeShelf:PropTypes.func.isRequired,
        book:PropTypes.object.isRequired,
        books:PropTypes.array.isRequired,
        shelfs:PropTypes.array.isRequired
    }

    render(){

        return (<div>

             </div>
          );

    }



}
export default ShelfSelector
