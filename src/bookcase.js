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
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                            <Bookshelf
                                shelf='currentlyReading'
                                updateShelf={updateShelf}
                                bookshelfBooks={currentlyReading}
                        />
                        </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                            <Bookshelf 
                                shelf='wantToRead'
                                updateShelf={updateShelf}
                                bookshelfBooks={wantToRead}
                            />
                        </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                            <Bookshelf
                                shelf='read'
                                updateShelf={updateShelf}
                                bookshelfBooks={read}
                            />
                        </ol>
                        </div>
                    </div>
                </div>
          </div>
        )
    }
}

export default Bookcase;