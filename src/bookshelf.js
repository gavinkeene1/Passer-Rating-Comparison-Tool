import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Book from './book';

class Bookshelf extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    render() {
        const { books, shelf, updateShelf } = this.props;
        console.log(books);
        
        // Ternary operator sorts books to respective shelves
        const sortBooksByShelf = 
            shelf === 'currentlyReading'
            ? books.filter((book) => (
                book.shelf === 'currentlyReading'
            ))
            : shelf === 'wantToRead'
            ? books.filter((book) => (
              book.shelf === 'wantToRead'
          ))
            : shelf === 'read'
            ? books.filter((book) => (
              book.shelf === 'read'
          ))
            : books.filter((book) => (
              book.shelf.includes('a')
            ))

            console.log(shelf);
        

        return(
            sortBooksByShelf.map((book) => (
              <Book book={book} updateShelf={updateShelf}/>
            )))
    }
}

export default Bookshelf;