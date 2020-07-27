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
        <div className="bookshelf">
          <h2 className="bookshelf-title">{bookshelfTitle}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
            {bookshelfBooks.map((book) => (
                  <Book book={book} updateShelf={updateShelf}/>
                ))}
            </ol>
          </div>
        </div>
            )}}

export default Bookshelf;