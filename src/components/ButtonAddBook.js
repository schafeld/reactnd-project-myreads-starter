import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ButtonAddBook extends Component {
  render () {
    return (
      <div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}