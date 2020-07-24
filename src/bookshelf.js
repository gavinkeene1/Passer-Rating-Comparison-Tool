import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BooksApp from './App';

class ShowBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.string.isRequired,
        updateShelf: PropTypes.func.isRequired
    }

    render() {
        const { books, shelf } = this.props;
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
            <div key={book.id} className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select value={this.props.shelf} onChange={(event) => this.props.updateShelf(book, event.target.value)}>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{book.title}</div>
            <div className="book-authors">{book.authors}</div>
          </div>
            )))
    }
}

export default ShowBooks;