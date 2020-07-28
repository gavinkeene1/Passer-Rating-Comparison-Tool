import React from 'react';
import ShowBookcase from './ShowBookcase';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import { Link, Route } from 'react-router-dom';
import './App.css';

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  }
  componentDidMount() {
      BooksAPI.getAll()
      .then((books) => {
          this.setState(() => ({
              books
          }))
      })
  }

  updateShelf = (changedBook, shelf) => {
    changedBook.shelf = shelf
    this.setState(() => ({
      books: this.state.books.filter((book) => (book.id !== changedBook.id)).concat([changedBook])
    }))
    BooksAPI.update(changedBook, shelf)
  }
  
  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <SearchBooks/>
        ) : (
          // List-books holds the app's main page
          // List-books-title holds the "My Reads" Banner
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="open-search">
                <Link
                  to='search'
                  class='open-search'
                >
                Add a book
                </Link>
            </div>
          </div>
        )}
        <Route exact path='/' render={() => (
          <ShowBookcase
          books={this.state.books}
          updateShelf={this.updateShelf}
          />
        )} />
        <Route path='/search' render={({history}) => (
          <SearchBooks

        />
        )} />
        
      </div>
    )
  }
}

export default BooksApp
