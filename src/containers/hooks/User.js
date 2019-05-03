import React, {useState, useEffect} from 'react'
import axios from 'axios'

export default function User() {
  const [user, setUser] = useState(1)

  useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/users')
      .then(({ data }) => {
        setUser(data)
      })
  }, [])

  return (
    <div>
      {JSON.stringify(user)}
    </div>
  )
}
