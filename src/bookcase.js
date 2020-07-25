import React, { Component } from 'react';
import PropTypes, { array } from 'prop-types';
import Bookshelf from './bookshelf';
import { Link } from 'react-router-dom';

class Bookcase extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired,
        bookshelfTitle: PropTypes.string.isRequired
    }

    render() {   
        const { books, shelf, updateShelf } = this.props;

        const currentlyReading = books.filter((book) => (
            book.shelf === 'currentlyReading'));
        const wantToRead = books.filter((book) => (
            book.shelf === 'wantToRead'));
        const read = books.filter((book) => (
            book.shelf === 'read'));

        // Sort books to their respective shelves (ternary operator)
        const sortBooksByShelf = 
        shelf === 'currentlyReading'?
            books.filter((book) => (book.shelf === 'currentlyReading')):
        shelf === 'wantToRead'?
            books.filter((book) => (book.shelf === 'wantToRead')):
        shelf === 'read'?
            books.filter((book) => (book.shelf === 'read')):
        /* After all three bookshelves get their books, the
        ternary operator filters nothing */
        books.filter((book) => (book.shelf === 'N/A'))
        
        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Currently Reading</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                            <Bookshelf
                                books={this.props.books}
                                shelf='currentlyReading'
                                updateShelf={updateShelf}
                                bookshelf={currentlyReading}
                        />
                        </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Want to Read</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                            <Bookshelf 
                                books={this.props.books}
                                shelf='wantToRead'
                                updateShelf={updateShelf}
                                bookshelf={wantToRead}
                            />
                        </ol>
                        </div>
                    </div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">Read</h2>
                        <div className="bookshelf-books">
                        <ol className="books-grid">
                            <Bookshelf
                                books={this.props.books}
                                shelf='read'
                                updateShelf={updateShelf}
                                bookshelf={read}
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