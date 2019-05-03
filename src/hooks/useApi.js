import {useState, useEffect, useReducer} from 'react'
import axios from 'axios'

export function useApiReducer(url) {
  const intialState = {
    data: [],
    loading: false,
    error: ''
  }
  const [state, setState] = useReducer((state, newState) => ({...state, ...newState}), intialState)

  useEffect(() => {
    setState({
      loading: true
    })

    axios
    .get(url)
    .then(function ({data}) {
      setState({
        data
      })
    })
    .catch(err => {
      setState({
        error: err
      })
    })
    .finally(() => {
      setState({
        loading: false
      })
    })
  }, [url])

  return state
}

export function useApiEnhance(url) {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  useEffect(() => {
    setLoading(true)

    axios
    .get(url)
    .then(function ({data}) {
      setData(data)
    })
    .catch(err => {
      setError(err)
    })
    .finally(() => {
      setLoading(false)
    })
  }, [url])

  return {data, error, loading}
}

export default function useApi(url) {
  const [data, setData] = useState([])

  useEffect(() => {
    axios
    .get(url)
    .then(function ({data}) {
      setData(data)
      // return data
    })
    .catch(err => console.log(err))
  }, [url])

  return data
}