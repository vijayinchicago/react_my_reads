
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import escapsRegExp from 'escape-string-regexp'
import * as BooksAPI from './BooksAPI'
//import sortBy from 'sort-by'

 class SearchBooks extends Component{
 	static propTypes={
 		books: PropTypes.array.isRequired,
 		onChangeShelf: PropTypes.func.isRequired
 	}

 	state={
 		query:'',
 		searchTerms:['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'],
 		searchBooks:[]
 	}
	updateQuery=(query) => {
			this.setState({query: query.trim()})
		}
 		componentWillMount(){
 			//if (this.state.SearchBooks.length==0){
 				//var allBooks=['']
 			this.state.searchTerms.map((term)=>{
 				//allBooks=allBooks.concat(BooksAPI.search(term,1000))
 				BooksAPI.search(term,1000).then(book => {
 					
 				this.setState({searchBooks: this.state.searchBooks.concat(book)})
 				})
 			})
// 			this.setState({searchBooks: allBooks})
 		}

 	render() {
 		console.log('All books', this.state.searchBooks)
 		const {books, onChangeShelf}=this.props;
 		const {query}=this.state



 		var showBooks=[]
 		let showBooksTitle
 		let showBooksAuthor
 		if(query){
 			const match=new RegExp(escapsRegExp(this.state.query), 'i')
 			showBooksTitle=this.state.searchBooks.filter((book) => match.test(book.title)) //filter by title
 			showBooksAuthor=this.state.searchBooks.filter((book) => match.test(book.authors)) //filter by author
 			showBooks=showBooks.concat(showBooksTitle)
 			showBooks=showBooks.concat(showBooksAuthor)
 		}else{
 			showBooks=books
 		}

 		//showBooks.sort(sortBy('title'))

 		return(

			<div className="search-books">
	          	<div className="search-books-bar">
	           		<a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
	           		<div className="search-books-input-wrapper">
	                		<input 	type="text" 
	                				className="search-books"
	                				placeholder="Search by title or author"
	                				value={query}
	                				onChange={(event) => this.updateQuery(event.target.value)}
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
	           		{showBooks.map(book =>
                      <li key={book.title}>
                        <div className="book">
                          <div className="book-top">
                            <div className="book-cover" style={{ width: 128, height: 193 }}></div>
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
 		onChangeShelf: PropTypes.func.isRequired
	}
export default SearchBooks



/*NOTES: The search from BooksAPI is limited to a particular set of search terms.
			                  You can find these search terms here:
			                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
			                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
			                  you don't find a specific author or title. Every search is limited by search terms.
			                */