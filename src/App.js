import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Route } from 'react-router-dom'
// import SearchBar from './components/SearchBar'
// import BookshelfTable from './components/BookshelfTable'


import BookSearch from './components/BookSearch'
import BookList from './components/BookList'

import './App.css'

export default class BooksApp extends Component {
  state = {
    books: []
  }

  componentDidMount(){
    this.fetchMyBooks()
  }

  fetchMyBooks = () => {
    BooksAPI.getAll().then((books) => this.setState({ books }))
  }

  changeShelf = (id,shelf) => {
    BooksAPI.update({id},shelf).then(()=>{
      this.fetchMyBooks()
    })
  }

  render() {

    return (
      <div className="app">

        { /* start page,  (used to be showSearchPage: true) */ }
          <Route
            exact path="/"
            render={()=>(
              <BookList
                books={this.state.books}
                onShelfChange={(id,shelf)=>{
                  this.changeShelf(id,shelf)
                }}
              />
            )}
          />

        { /* search page, search bar and book displayed in categories (used to be showSearchPage: false) */}
          <Route
            exact path="/search"
            render={({history}) => (
              <BookSearch
                myBooks={this.state.books}
                onShelfChange={(id,shelf)=>{
                  this.changeShelf(id,shelf)
                  history.push('/')
                }}
              />
            )}
          />

        { /* about page, 'copyleft' and author information */}
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
