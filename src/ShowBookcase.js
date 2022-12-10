import * as React from 'react';
import { Component } from 'react';
import PropTypes from 'prop-types';
import Bookshelf from './bookshelf';
import { Link } from 'react-router-dom';
import { FourthQuarterPassingStats } from './FourthQuarterPassing2021';

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
            
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
                <div>
                            <Bookshelf
                                bookshelfTitle='NFL Passing Stats'
                                bookshelfBooks={currentlyReading}
                                updateShelf={updateShelf}
                            />
                            {FourthQuarterPassingStats()}
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
            <div className="open-search">
                <Link
                  to='search'
                  className='open-search'
                >
                Add a book
                </Link>
            </div>
          </div>  
        )
    }
}

export default ShowBookcase;