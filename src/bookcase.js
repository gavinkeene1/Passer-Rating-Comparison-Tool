import React, { Component } from 'react';
import PropTypes, { array } from 'prop-types';
import Bookshelf from './bookshelf';
import { Link } from 'react-router-dom';

class Bookcase extends Component {
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
            // Classname="bookshelf-title" holds respectie bookshelf titles
            // Classname="books-grid" holds list items for individual books
            // <li> tags house individual className="book" divs which hold individual book information
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                            <Bookshelf
                                bookshelfTitle='Currently Reading'
                                bookshelfBooks={currentlyReading}
                                updateShelf={updateShelf}
                        />
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                            <Bookshelf 
                                bookshelfTitle='wantToRead'
                                bookshelfBooks={wantToRead}
                                updateShelf={updateShelf}
                            />
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                            <Bookshelf
                                bookshelfTitle='read'
                                bookshelfBooks={read}
                                updateShelf={updateShelf}
                            />
                    </div>
                </div>
          </div>
        )
    }
}

export default Bookcase;