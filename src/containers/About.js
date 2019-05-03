import React, { Component, useState, useEffect } from 'react'
import axios from 'axios'

import {useApiEnhance, useApiReducer} from '../hooks/useApi'

export default function() {
  // const {loading, data, error} = useApiEnhance('https://swapi.co/api/people/1')
  const {loading, data, error} = useApiReducer('https://swapi.co/api/people/1')

  return (
    <>
      <div>
        { loading && <h1> Aku lagi loading </h1>}
        { data.length !==0 && JSON.stringify(data)}
        {error && JSON.stringify(error)}
      </div>
      <h2>dua kaya gini ga bisa?</h2>
    </>
  )
}



// export default function({name}) {
//   const [data, setData] = useState([])
//   const [number, setNumber] = useState(1)

//   useEffect(() => {
//     // fungsi yang akan ke trigger ketika component ke render 
//     // ketika didMount dan didUpdate
//     axios
//     .get(`https://swapi.co/api/people/${number}`)
//     .then(function ({data}) {
//       setData(data)
//     })
//     .catch(err => console.log(err))

//     return () => {
//       // disini adalah trigger ketika componentWillUnMount
//       console.log('will unmount dipanggil')
//     }
//   }, [number, name])

//   return (
//     <div>{JSON.stringify(data)}</div>
//   )
// }


// Penggunaan counter menggunakan hooks
// export default function () {
//   const [counter, setCounter] = useState(0)
//   const [name, setName] = useState('kosasih')

//   return (
//     <div>
//       Counter { counter }
//       <button onClick={() => setCounter(counter + 1)}>Increment</button>
//       <button onClick={() => setCounter(counter - 1)}>Decrement</button>

//       <br />
//       Nama { name}
//       <input type="text" value={name} onChange={e => setName(e.target.value)}/>
//     </div>  
//   )
// }


// Penggunaan counter menggunakan class component
// export default class About extends Component {
//   state = {
//     counter: 0
//   }

//   increment = () => {
//     this.setState({
//       counter: this.state.counter + 1
//     });
//   }

//   decrement = () => {
//     this.setState({
//       counter: this.state.counter - 1
//     });
//   }

//   render() {
//     return (
//       <div>
//         Counter { this.state.counter }

//         <button onClick={this.increment}>Increment</button>
//         <button onClick={this.decrement}>Decrement</button>
//       </div>
//     )
//   }
// }
