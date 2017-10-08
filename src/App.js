import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class App extends Component {
  state = {books: [], searchResults:[]}

  componentWillMount(){
    BooksAPI.getAll().then((books) => {
     // console.log({books})
      this.setState({books})
    })
  }


    handleSelectChange = (book, shelf) => {
     // console.log('Book:' + book + 'Shelf:' + shelf)
     // console.log(book.id)
    BooksAPI.update(book, shelf).then(() => {
      let books=this.state.books
      books.map(currBook =>{
        if(currBook.id===book.id)
          {currBook.shelf=shelf
            this.setState(
              books:books)}
      })
    })
  }

  handleSearch=(term) => {
    if(term.length>0)
    {
      this.setState({searchResults:[]})
      BooksAPI.search(term,20).then(book => {
          this.setState(
          {
            searchResults: book
          })
        })
    }
    else
    {
      this.setState(
        {searchResults: []}
        )
      }
    }


  render() {
    return (
        <div className="app">
        <Route exact path="/"render={() => (
            <ListBooks     
              onSelectChange={(book,event) => this.handleSelectChange(book,event.target.value)}
              books={this.state.books}
            />
          )}
        />                  
        <Route path="/search" render={() => (
            <SearchBooks
            books={this.state.books}
            searchResults={this.state.searchResults}
            onSearchChange={event => this.handleSearch(event.target.value)}   
              onSelectChange={(book,event) => this.handleSelectChange(book,event.target.value)}
            />
          )}
        />
        </div>

    )
  }
}

export default App