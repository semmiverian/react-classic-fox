import {useState, useEffect} from 'react'
import axios from 'axios'

export default function useApi(url, method) {
  const [data, setData] = useState(null)

  useEffect(() => {
    axios[method](url)
      .then(({data}) => {
        setData(data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [url, method])

  return data
}