import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {PropTypes} from 'prop-types'
import * as BooksAPI from './../BooksAPI'
import Bookshelf from './Bookshelf'

export default class BookSearch extends Component {

  state = {
    booksFound: [],
    query: ''
  }

  updateQuery = (event) => {
    const value = event.target.value.trim()
    this.setState({query: value})
    this.searchData(value)
  }

  searchData = (value) => {
    if (value.length !== 0) {
      BooksAPI.search(value, 5).then((booksFound) => {
        if(booksFound.length > 0){
          booksFound = booksFound.filter((book) => book.imageLinks)
          this.setState({booksFound})
        } else {
          this.setState({
            booksFound: []
          })
        }
      })
    } else {
      this.setState({
        booksFound: [], 
        query: ''
      })
    }
  }

  static propTypes = {
    myBooks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string.isRequired),
      imageLinks: PropTypes.object.isRequired,
      shelf: PropTypes.string.isRequired
    })),
    onShelfChange: PropTypes.func.isRequired
  }

  render() {
    const booksFound = this.state.booksFound
    const query = this.state.query

    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              <input type="text"
                placeholder="Search by title or author"
                value={query}
                onChange={this.updateQuery}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
        
        { /* Display search results */ }
        {this.state.query !== '' && booksFound.length > 0 && (<Bookshelf title="Search Results" books={booksFound} onShelfChange={(id, shelf) => {
          this.props.onShelfChange(id, shelf)
        }}/>)}

        { /* Display hint in case of no results */ }
        {this.state.query !== '' && this.state.query.length > 2 && booksFound.length === 0 && (
          <div><p>No results found. Try another search term...</p></div>
        )}

      </div>
    )
  }
}
