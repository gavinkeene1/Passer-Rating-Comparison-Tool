import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './bookshelf';
import { Link } from 'react-router-dom';

class ShowBookcase extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    render() {   
        const { books, updateShelf } = this.props;

        // Functions to filter books to their respective bookshelves:
        const currentlyReading = books.filter((book) => (
            book.shelf === 'currentlyReading'));
        const wantToRead = books.filter((book) => (
            book.shelf === 'wantToRead'));
        const read = books.filter((book) => (
           book.shelf === 'read'));
        
        return (
            // List-books-content holds the "Currently Reading", "Want to Read", and "Read" bookshelves
            // Classname="bookshelf" holds resepective bookshelf banners
            <div className="list-books-content">
                <div>
                            <Bookshelf
                                bookshelfTitle='Currently Reading'
                                bookshelfBooks={currentlyReading}
                                updateShelf={updateShelf}
                        />
                            <Bookshelf 
                                bookshelfTitle='Want To Read'
                                bookshelfBooks={wantToRead}
                                updateShelf={updateShelf}
                            />
                            <Bookshelf
                                bookshelfTitle='Read'
                                bookshelfBooks={read}
                                updateShelf={updateShelf}
                            />
                </div>
          </div>
        )
    }
}

export default ShowBookcase;