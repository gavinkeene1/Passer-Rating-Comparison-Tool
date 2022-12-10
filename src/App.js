import * as React from 'react';
import ShowBookcase from './ShowBookcase';
import SearchBooks from './SearchBooks';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';
import PasserRatingInput from './PasserRatingInput';
import AddQBStats from './AddQBStats';

class BooksApp extends React.Component {
  state = {
    books: []
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
      // List-books holds the app's main page
      // List-books-title holds the "My Reads" Banner
      <div className="app">     
          
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
        <Route path='/passer-rating' render={({history}) => (
          <PasserRatingInput />
          )} />
        <Route path='/passer-rating-simple' render={({history}) => (
          <AddQBStats />
        )} />
      </div>
    )
  }
}

export default BooksApp;