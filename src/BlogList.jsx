import React from 'react'
import { Link } from 'react-router-dom'

function BlogList({ blog: { id, author, title  } }) {
  return (
    <div className="blog-preview">
      <Link to={`blogs/${ id }`}>
        <h2>{ title }</h2>
        <p>Written by { author }</p>
      </Link>
    </div>
  )
}

export default BlogList
