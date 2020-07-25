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
        const currentlyReading = this.props.books.filter((book) => (
            book.shelf === 'currentlyReading'));
        const wantToRead = this.props.books.filter((book) => (
            book.shelf === 'wantToRead'));
        const read = this.props.books.filter((book) => (
            book.shelf === 'read'));
        
        return (
            <div className="list-books-content">
                <div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Currently Reading</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Bookshelf books={this.props.books} shelf='currentlyReading' updateShelf={this.props.updateShelf}/>
                    </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Want to Read</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Bookshelf books={this.props.books} shelf='wantToRead' updateShelf={this.props.updateShelf}/>
                    </ol>
                    </div>
                </div>
                <div className="bookshelf">
                    <h2 className="bookshelf-title">Read</h2>
                    <div className="bookshelf-books">
                    <ol className="books-grid">
                        <Bookshelf books={this.props.books} shelf='read' updateShelf={this.props.updateShelf}/>
                    </ol>
                    </div>
                </div>
                </div>
          </div>
        )
    }
}

export default Bookcase;