import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [isPending, setIsPending] = useState(true)
  const [error, setError] = useState(null)
  
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then(res => res.json())
        .then(res => setData(res))
        .then(res => setIsPending(false))
        .catch(error => { setError(error); setIsPending(false) })
    }, 1000);
  }, [url])

  return { data, isPending, error }
}

export default useFetch