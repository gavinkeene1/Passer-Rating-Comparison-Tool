import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ShowBooks extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        shelf: PropTypes.string.isRequired
    }
    state = {
        
    }
    render() {
        const { books, shelf } = this.props;

        const sortBooksByShelf = 
            shelf === 'currentlyReading'
            ? books.filter((book) => (
                book.shelf.includes('currentlyReading')
            ))
            : shelf === 'wantToRead'
            ? books.filter((book) => (
              book.shelf.includes('wantToRead')
          ))
            : shelf === 'read'
            ? books.filter((book) => (
              book.shelf.includes('read')
          ))
            : books.filter((book) => (
              book.shelf.includes(shelf)
            ))

            console.log(shelf);
        

        return(
            sortBooksByShelf.map((book) => (
            <div key={book.id} className="book">
            <div className="book-top">
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
              <div className="book-shelf-changer">
                <select>
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