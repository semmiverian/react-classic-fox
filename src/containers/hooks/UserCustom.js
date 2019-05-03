import React, {useState, useEffect} from 'react'
import useApi from './useApi'

export default function UserCustom() {
  const user = useApi('https://jsonplaceholder.typicode.com/users', 'get')

  return (
    <div>
      {JSON.stringify(user)}
    </div>
  )
}
