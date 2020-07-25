import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './book';

class Bookshelf extends Component {
    static propTypes = {
        updateShelf: PropTypes.func.isRequired,
        sortBooksByShelf: PropTypes.func.isrequired,
        updateShelf: PropTypes.func.isRequired
    }

    render() {
        const { shelf, bookshelf, updateShelf } = this.props;

        return(
            bookshelf.map((book) => (
              <Book book={book} updateShelf={updateShelf}/>
            )))
    }
}

export default Bookshelf;