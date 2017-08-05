import React from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
import ContentMock from './components/ContentMock'
import './App.css'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true  // remove this as I'm using routing?
  }

  render() {
    return (
      <div className="app">

        <Route exact path="/" render={() => (

          <ContentMock />

        )}/>

        <Route exact path="/search" render={() => (

          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" href="./" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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

        )}/>

        <Route exact path="/author" render={() => (
          <div>
            <p>This web app was made by Oliver Schafeld as part of Udacity ReactJS Nanodegree program.</p>
            <p>Back to <a href="./">start page</a> or go to <a href="./search">search page</a>.</p>
          </div>
        )}/>

      </div>
    )
  }
}

export default BooksApp
