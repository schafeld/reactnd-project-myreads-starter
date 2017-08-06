import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class PageFooter extends Component {
  render () {
    return (
      <div>
        <div className="footer bookshelf">
          This app was made by <Link to="/author">Olli</Link>.
        </div>
      </div>
    )
  }
}