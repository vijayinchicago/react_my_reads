# MyReads: A Book Tracking App

This is a React-based bookshelf app that allows you to select and categorize books you have read, are currently reading, or want to read. The project emphasizes using React to build the application and provides an API server and client library that you will use to persist information as you interact with the application.

## Installation
1) Clone this project to your machine
`git clone https://github.com/vijayinchicago/react_my_reads.git`

2) Open a bash console, and install packages
-   `npm install`

## Running the app
From a bash console:
`npm start`

This will start a local web server at port 3000, and open a web browser. You can now use the app

## Known bugs:

-   We have duplicate entries in search result, it is a backend bug so we don't handle it. ref: <https://github.com/udacity/reactnd-issues/issues/75>

## What You're Getting

    +--public/    
     |-- index.html - DO NOT MODIFY
    +-- src/
     +-- icons/ - Helpful images for your app. Use at your discretion.
      |-- add.svg
      |-- arrow-back.svg
      |-- arrow-drop-down.svg
     |-- App.js - This is the root of your app. Contains static HTML right now.
     |-- App.css - Styles for your app. Feel free to customize this as you desire.
     |-- App.test.js - Used for testing. Provided with Create React App. 
     Testing is encouraged, but not required.
     |-- BooksAPI.js - A JavaScript API for the provided Udacity backend. 
     Instructions for the methods are below.
     |-- index.js - You should not need to modify this file. It is used for DOM rendering only.
     |-- index.css - Global styles. You probably won't need to change anything here.
    |-- .gitignore 
    |-- CONTRIBUTING.MD - Information about contributing to this repo. 
    TL;DR - Fork and clone your own version of this to use it.
    |-- README.MD - This README file.
    |-- package.json - npm package manager file. It's unlikely that you'll need to modify this.




## Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

### `getAll()`

-   Returns a Promise which resolves to a JSON object containing a collection of book objects.
-   This collection represents the books currently in the bookshelves in your app.

### `update(book, shelf)`

-   book: `<Object>` containing at minimum an `id` attribute
-   shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
-   Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search(query, maxResults)`

-   query: `<String>`
-   maxResults: `<Integer>` Due to the nature of the backend server, search results are capped at 20, even if this is set higher.
-   Returns a Promise which resolves to a JSON object containing a collection of book objects.
-   These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.
The application responds to the following search terms:
'Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'

## Important

The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results. 

## create-react-app

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Attributions
* [React](https://github.com/facebook/react/blob/master/LICENSE)