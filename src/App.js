import React from 'react';
import Bookcase from './bookcase';
import * as BooksAPI from './BooksAPI';
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
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          // List-books holds the app's main page
          // List-books-title holds the "My Reads" Banner
          // List-books-content holds the "Currently Reading", "Want to Read", and "Read" bookshelves
          // Classname="bookshelf" holds resepective bookshelf banners
          // Classname="bookshelf-title" holds respectie bookshelf titles
          // Classname="books-grid" holds list items for individual books
          // <li> tags house individual className="book" divs which hold individual book information
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="open-search">
              <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
            </div>
          </div>
        )}
        <Bookcase books={this.state.books} updateShelf={this.updateShelf}/>
      </div>
    )
  }
}

export default BooksApp
