import React, {Component} from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ListBooks from './ListBooks'
import SearchBooks from './SearchBooks'
import './App.css'

class App extends Component {
  state = {books: []}

  componentDidMount(){
    BooksAPI.getAll().then((books) => {
      console.log({books})
      this.setState({books})
    })
  }
 moveBooks(ListBook) {
    // based on the selected book id, filter down to the book and setState for new shelf based on selection
    console.log(ListBook)
    let result=ListBook.split(":")
    let id=result[0]
    console.log(id)
    let value=result[1]
    let books=this.state.books
    books.map(book =>{
      if(book.id===id)
      {
        book.shelf=value
        BooksAPI.update(id, value).then(shelf => {
          console.log(shelf)
        })
/*        BooksAPI.getAll().then((books) => {
          console.log(books)
        })
  */      this.setState(
          {books:books}
          )
      }
    })
    }
  render() {
    return (
        <div className="app">
        <Route exact path="/"render={() => (
            <ListBooks     
              onChangeShelf={e => this.moveBooks(e)}
              books={this.state.books}
            />
          )}
        />                  
        <Route path="/search" render={() => (
            <SearchBooks
            books={this.state.books} 
              onChangeShelf={e => this.moveBooks(e)}
            />
          )}
        />
        </div>

    )
  }
}

export default App