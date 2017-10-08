
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//import escapsRegExp from 'escape-string-regexp'

 class SearchBooks extends Component{
 	static propTypes={
 		books: PropTypes.array.isRequired,
		searchResults: PropTypes.array.isRequired,
 		onSelectChange: PropTypes.func.isRequired,
 		onSearchChange: PropTypes.func.isRequired
 	}

	updateQuery=(query) => {
			this.setState({query: query.trim()})
		}


 	render() {
 		const {searchResults, books}=this.props;
		// determine if the search results contain any books that are already on a bookshelf.
		// if so, set the value in search results so appropriate option value can be pre-selected
		if(searchResults)
			{
				books.map(book => {
 				searchResults.map(resBook => {
 					if (book.id===resBook.id){
 						resBook.shelf=book.shelf
 					}
 				}
 				)}
 			)
 			} 


 		return(

			<div className="search-books">
	          	<div className="search-books-bar">
	           		<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
	           		<div className="search-books-input-wrapper">
	                		<input 	type="text" 
	                				className="search-books"
	                				placeholder="Search by title or author"
	                				onChange={(event) => this.props.onSearchChange(event)}
	                		/>
		            </div>
		            <Link
		              	to="/"
		              	className="close-search">
		              	Close Search
              		</Link>
	       	    </div>
	           	<div className="search-books-results">
	           		<ol className="books-grid">

	           		{searchResults.map(book =>
                      <li key={book.id}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                            <div className="book-shelf-changer">
                              <select value={book.shelf} onChange={e => this.props.onSelectChange(book,e)}>
                                <option value="none" disabled>Move to...</option>
                                <option value="wantToRead">Want To Read</option>
                                <option value="currentlyReading">Currently Reading</option>
                                <option value="read">Read</option>
                              </select>
                            </div>
                          </div>
                          <div className="book-title">{book.title}</div>
             			  <div className="book-authors">{book.authors}</div>
                        </div>
                      </li>
                   )}
                    </ol>
	            </div>
	        </div>
       	)
	}
}
	SearchBooks.PropTypes={
 		books: PropTypes.array.isRequired,
		searchResults: PropTypes.array.isRequired,
 		onSelectChange: PropTypes.func.isRequired,
 		onSearchChange: PropTypes.func.isRequired
	}
export default SearchBooks



/*NOTES: The search from BooksAPI is limited to a particular set of search terms
			                  You can find these search terms here:
			                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
			                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
			                  you don't find a specific author or title. Every search is limited by search terms.
			                */