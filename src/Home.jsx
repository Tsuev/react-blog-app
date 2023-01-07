import React from 'react'
import useFetch from './useFetch'
import BlogList from './BlogList'

export default function Home() {

  const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs')
  

  return (
    <div className="home">
      <h1>Home</h1>
      { error && <div>{ error }</div>}
      { isPending && <div>Loading...</div> }
      { blogs && blogs.map(blog => <BlogList blog={ blog } key={ blog.id }/>) }
    </div>

  )
}
