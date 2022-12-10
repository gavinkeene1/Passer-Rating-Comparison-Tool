import * as React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './book';

class Bookshelf extends Component {
    static propTypes = {
        bookshelfTitle: PropTypes.string.isRequired,
        bookshelfBooks: PropTypes.array.isRequired,
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
                  <Book book={book} updateShelf={updateShelf} key={book.id}/>
                ))}
            </ol>
          </div>
        </div>
            )}}

export default Bookshelf;