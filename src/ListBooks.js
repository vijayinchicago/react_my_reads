import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import serializeForm from 'form-serialize'

 class ListBooks extends Component{
 	static propTypes={
 		books: PropTypes.array.isRequired,
 		onChangeShelf: PropTypes.func.isRequired,
 		newShelf: PropTypes.string
 	}

 	handleChange(id, value){
 		//const values=serializeForm(e.target, {hash: true})
 		console.log(id, value)
 		this.setState({changeShelfbookId: id})
 		this.setState({changeShelfNewShelf: value})
 		//onChangeShelf(this.state.changeShelfbookId,this.state.changeShelfNewShelf)

 	}

 	render() {
 		const {books, onChangeShelf, newShelf}=this.props;
	    let shelfCurrentlyReading=books.filter((book) => book.shelf==='currentlyReading');
	    let shelfWantToRead=books.filter((book) => book.shelf==='wantToRead');
	    let shelfRead=books.filter((book) => book.shelf==='read') ;
		
    return (
      
 	<div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
              <Link
              	to="/search"
              	className="open-search">
              	Search
              </Link>

            </div>
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Currently Reading</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {shelfCurrentlyReading.map(book =>
                      <li key={book.id} >
                        <div className="book" >
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event) =>onChangeShelf([book.id]+":"+event.target.value)}>
                          
                                <option value="none" disabled>Move to...</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                                <option value="read">Read</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.author}</div>
                        </div>
                      </li>
                   )}
                    </ol>
                  </div>
                </div>
              </div>
            </div>



        <div className="list-books">
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Want to Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {shelfWantToRead.map(book =>
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event) =>onChangeShelf([book.id]+":"+event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="wantToRead">Want To Read</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="read">Read</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.author}</div>
                        </div>
                      </li>
                   )}
                    </ol>
                  </div>
                </div>
              </div>
            </div>





        <div className="list-books">
            <div className="list-books-content">
              <div>
                <div className="bookshelf">
                  <h2 className="bookshelf-title">Read</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                    {shelfRead.map(book =>
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select onChange={(event) =>this.onChangeShelf([book.id]+":"+event.target.value)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="Read">Read</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="wantToRead">Want to Read</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
                          <div className="book-authors">{book.author}</div>
                        </div>
                      </li>
                   )}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>


	        )
	    }
	}
	ListBooks.PropTypes={
		books: PropTypes.array.isRequired,
		onChangeShelf: PropTypes.func.isRequired,
		newShelf: PropTypes.string
	}
export default ListBooks

