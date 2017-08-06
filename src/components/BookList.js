import React, { Component } from 'react'
import { PropTypes } from 'prop-types'
import Bookshelf from './Bookshelf'
import ButtonAddBook from './ButtonAddBook'
import PageFooter from './PageFooter'

export default class BookList extends Component {

  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      authors: PropTypes.arrayOf(PropTypes.string.isRequired),
      imageLinks: PropTypes.object.isRequired,
      shelf: PropTypes.string.isRequired
    })),
    onShelfChange: PropTypes.func.isRequired
  }

  arrBookShelves = [
    {
      name: `currentlyReading`,
      heading: `Currently Reading`
    },
    {
      name: `wantToRead`,
      heading: `Want to Read`
    },
    {
      name: `read`,
      heading: `Read`
    }
  ]

  render(){
    const arrBookShelves = this.arrBookShelves
    const books = this.props.books

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            { arrBookShelves.map((shelf,index)=> (
              <Bookshelf
                title={shelf.heading}
                key={index}
                books={books.filter((book) => book.shelf === shelf.name)}
                onShelfChange={(id,shelf)=>{
                  this.props.onShelfChange(id,shelf)
                }}
              />
            )) }
          </div>
        </div>
        <ButtonAddBook />
        <PageFooter />
      </div>
    )
  }
}
