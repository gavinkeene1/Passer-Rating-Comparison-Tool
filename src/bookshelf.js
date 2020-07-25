import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './book';

class Bookshelf extends Component {
    static propTypes = {
        bookshelfTitle: PropTypes.string.isRequired,
        bookshelfBooks: PropTypes.func.isrequired,
        updateShelf: PropTypes.func.isRequired
    }

    render() {
        const {bookshelfTitle, bookshelfBooks, updateShelf } = this.props;

        return(
            bookshelfBooks.map((book) => (
              <Book book={book} updateShelf={updateShelf}/>
            )))
    }
}

export default Bookshelf;