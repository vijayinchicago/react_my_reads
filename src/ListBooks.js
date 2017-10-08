import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

 class ListBooks extends Component{
 	static propTypes={
 		books: PropTypes.array.isRequired,
 		onSelectChange: PropTypes.func.isRequired
 	}

 	render() {
 		const {books}=this.props;
 		//console.log(books)
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
                      <li key={book.id}>
            <div className="book">
              <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                <div className="book-shelf-changer">
                  <select value={book.shelf} onChange={e => this.props.onSelectChange(book,e)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors.join(', ')}</div>
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
                  <select value={book.shelf} onChange={e => this.props.onSelectChange(book,e)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors.join(', ')}</div>
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
                  <select value={book.shelf} onChange={e => this.props.onSelectChange(book,e)}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
              </div>
              <div className="book-title">{book.title}</div>
              <div className="book-authors">{book.authors.join(', ')}</div>
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
		onSelectChange: PropTypes.func.isRequired
	}
export default ListBooks

