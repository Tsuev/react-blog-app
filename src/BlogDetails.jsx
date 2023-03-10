import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from './useFetch'

function BlogDetails() {
  const { id } = useParams()
  const { data: blog, isPending, error } = useFetch(`http://localhost:8000/blogs/${id}`)
  return (
    <div>
      { isPending && <div>Loading...</div> }
      { error && <div>{ error }</div> }
      { blog && (
        <article className='blog-details'>
          <h2>{ blog.title }</h2>
          <p>Written by { blog.author }</p>
          <div>{ blog.body }</div>
        </article>
      )}
    </div>
  )
}

export default BlogDetails
